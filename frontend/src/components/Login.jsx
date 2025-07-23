import { useState } from 'react';
import { auth } from '../firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (!userCredential.user.emailVerified) {
        alert('Please verify your email first');
        nav('/email-verify');
        return;
      }
      const idToken = await userCredential.user.getIdToken();
      localStorage.setItem('idToken', idToken);
      nav('/dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email" required
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email} onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password" required
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password} onChange={e => setPassword(e.target.value)}
        />
        <button type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
          Login
        </button>
      </form>
    </div>
  );
}

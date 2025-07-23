import { useState } from 'react';
import { auth, sendVerification } from '../firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendVerification(userCredential.user);
      alert('Verification email sent!');
      nav('/email-verify');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email" required
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email} onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password" required minLength="6"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password} onChange={e => setPassword(e.target.value)}
        />
        <button type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Register & Verify Email
        </button>
      </form>
    </div>
  );
}

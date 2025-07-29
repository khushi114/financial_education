import { useState } from 'react';
import { auth } from '../firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Sparkles, ArrowRight } from 'lucide-react';
import loginImage from '../assets/login.png'; // <-- Import the image

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

      await fetch('/api/user/me', {
        headers: { Authorization: `Bearer ${idToken}` },
      });

      nav('/Dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-6">
      <div className="flex w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-1/2 bg-gradient-to-br from-purple-100 to-pink-100 p-8 flex items-center justify-center">
          <img src={loginImage} alt="Login visual" className="w-full max-w-sm animate-fade-in" />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="bg-gradient-to-br from-purple-300 to-pink-300 rounded-full p-3 shadow-lg animate-pulse">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Level Up Login</h2>
          </div>
          <p className="text-center text-gray-600 mb-6">Unlock your financial journey!</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute left-3 top-3 text-purple-500">
                <Mail className="w-5 h-5 animate-bounce" />
              </div>
              <input
                type="email"
                required
                placeholder="Email"
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-purple-200 focus:border-purple-500 outline-none bg-gradient-to-r from-white to-purple-50 transition-all duration-300"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <div className="absolute left-3 top-3 text-purple-500">
                <Lock className="w-5 h-5 animate-bounce" />
              </div>
              <input
                type="password"
                required
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-purple-200 focus:border-purple-500 outline-none bg-gradient-to-r from-white to-purple-50 transition-all duration-300"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full font-bold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Login</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600">
            Don’t have an account?{' '}
            <a href="/register" className="text-purple-600 hover:underline font-semibold">Register</a>
          </p>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce {
          animation: bounce 1.5s infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}

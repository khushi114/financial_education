import { useState } from 'react';
import { auth, sendVerification } from '../firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Sparkles, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="bg-white rounded-3xl p-10 shadow-2xl max-w-md w-full relative z-10 transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="bg-gradient-to-br from-purple-300 to-pink-300 rounded-full p-3 shadow-lg animate-pulse">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Level Up Register</h2>
        </div>
        <p className="text-center text-gray-600 mb-6">Join the financial adventure!</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <div className="absolute left-3 top-3 text-purple-500">
              <User className="w-5 h-5 animate-bounce" />
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
              minLength="6"
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
            <span>Register & Verify Email</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-purple-600 hover:underline font-semibold">Login</a>
        </p>
      </div>

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
      `}</style>
    </div>
  );
}
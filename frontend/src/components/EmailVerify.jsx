import { useEffect, useState } from 'react';
import { auth, sendVerification } from '../firebase.config';
import { useNavigate } from 'react-router-dom';

export default function EmailVerify() {
  const [sent, setSent] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) nav('/login');
  }, [nav]);

  const handleResend = async () => {
    await sendVerification(auth.currentUser);
    setSent(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded text-center">
      <h2 className="text-xl font-semibold mb-4">Verify Your Email</h2>
      <p>Check your inbox (and spam) for a verification link.</p>
      <button
        onClick={handleResend}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700">
        {sent ? 'Verification Sent!' : 'Resend Email'}
      </button>
    </div>
  );
}

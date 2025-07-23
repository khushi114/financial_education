import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import EmailVerify from './components/EmailVerify';
import Dashboard from './components/Dashboard'; // define separately

function Protected({ children }) {
  const token = localStorage.getItem('idToken');
  return token ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/email-verify" element={<EmailVerify />} />
        <Route path="/dashboard"
               element={<Protected><Dashboard /></Protected>} />
      </Routes>
    </BrowserRouter>
  );
}

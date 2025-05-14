import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { token, user } = await login(username, password);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      if (user.is_admin_user) {
        navigate('/admin-dashboard');
      } else if (user.is_client) {
        navigate('/client-home');
      } else {
        setError('Unknown user type.');
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 cursor-pointer rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition duration-300 disabled:opacity-60"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {error && (
            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
          )}
          <p className='my-1 text-blue-300'>
            Don't have an account ? <a href="/register-client/" className='text-white underline'>Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

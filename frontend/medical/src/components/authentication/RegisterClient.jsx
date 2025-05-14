import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerClient } from '../api/auth';

const RegisterClient = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerClient(formData.username, formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError('Registration failed. Try a different username.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Username</label>
            <input
              name="username"
              type="text"
              placeholder="johndoe"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Password</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Register
          </button>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <p>
            Already have an account? <a href="/login/" className='underline text-blue-600'>Log in.</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterClient;

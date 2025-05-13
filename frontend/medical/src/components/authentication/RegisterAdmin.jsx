import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerAdmin } from '../api/auth';

const RegisterAdmin = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerAdmin(formData.username, formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError('Registration failed. Try a different username.');
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Register as Admin</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" type="text" placeholder="Username" className="border p-2 w-full mb-2" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" className="border p-2 w-full mb-2" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" className="border p-2 w-full mb-2" onChange={handleChange} required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full">Register</button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default RegisterAdmin;
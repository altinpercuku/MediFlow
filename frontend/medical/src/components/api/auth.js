import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login/`, {
    username,
    password,
  });
  return response.data;
};

export const registerClient = async (username, email, password) => {
  const response = await axios.post(`${API_URL}/register/`, {
    username,
    email,
    password,
  });
  return response.data;
};


export const logout = () => {
  // Remove token and user data from localStorage
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};
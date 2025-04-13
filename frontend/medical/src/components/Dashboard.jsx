import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  // Check if the user is authenticated (has an access token)
  const accessToken = localStorage.getItem('access_token');

  // If the user is not authenticated, redirect them to the login page
  if (!accessToken) {
    navigate('/login');  // Redirect to the login page
    return null;  // Return null while the redirect happens
  }

  return (
    <div>
      <h2>Protected Page</h2>
      <p>This page is only accessible to logged-in users.</p>
    </div>
  );
}

export default Dashboard;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../PageStyles.css';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className="page profile">
      <div className="profile-message">
        <h2>Welcome to your profile!</h2>
        <p>You are logged in.</p>
      </div>
      <button onClick={handleLogout} className="logout-button">Log out</button>
    </div>
  );
};

export default Profile;

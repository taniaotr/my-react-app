import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../PageStyles.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'Admin' && password === '12345') {
      localStorage.setItem('isAuthenticated', 'true'); 
      navigate('/profile');
    } else {
      setError('The username or password entered is incorrect');
    }
  };

  return (
    <div className="page_login">
      <h2 className="login-title">Authorization</h2>
      <div className="login-container">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">Enter</button>
        {error && <p className="login-error">{error}</p>}
      </div>
    </div>
  );
};

export default Login;

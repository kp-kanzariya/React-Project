// src/components/Login.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = { id: email, email };
    dispatch(login(user));
    alert('Logged in successfully!');
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

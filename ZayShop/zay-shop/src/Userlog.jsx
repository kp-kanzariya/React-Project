import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminSide from './AdminSide';
import { Link } from 'react-router-dom';

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const users = [{ email: 'admin1234@gmail.com', password: 'admin1234' }];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('All fields are required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (isLogin) {
      const user = users.find((user) => user.email === email && user.password === password);
      console.log(user) //email and pass of user who can login
      if (user) {
        setSuccess('Login successful');
       
      } else {
        setError('Invalid email or password');
      }
    } else {
      setSuccess('Signup successful. You can now login.');
    }
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div className="container mt-5 p-4 rounded " style={{backgroundColor:"#66be48"}}>
      <h2 className="text-center mb-4">{isLogin ? 'Login' : 'Signup'}</h2>
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {!isLogin && (
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        )}

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <Link  to="/admin" className="alert alert-success">{success}</Link>}


        <button type="submit" className="btn btn-primary btn-block">
          {isLogin ? 'Login' : 'Signup'}
        </button>

      </form>

      <div className="text-center mt-3">
        {isLogin ? (
          <p>
            Don't have an account?{' '}
            <button className="btn btn-link" onClick={() => setIsLogin(false)}>
              Signup here
            </button>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <button className="btn btn-link" onClick={() => setIsLogin(true)}>
              Login here
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;

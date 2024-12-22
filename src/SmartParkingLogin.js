import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation, Navigate,Outlet } from 'react-router-dom'; 
import './SmartParkingLogin.css'


const api = axios.create({ baseURL: 'http://localhost:3001' });


export const UserPrivateRoute = () => {
  const token = localStorage.getItem('token'); // Authentication token

  if (!token) {
    // Redirect to login page with an optional message
    return <Navigate to="/" replace />;
  }
  const userRole = localStorage.getItem('role');
  if (userRole !== 'user') {
    return <Navigate to="/" replace />;
  }

  // If authenticated, render child routes
  return <Outlet />;
};

export const AdminPrivateRoute = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/" replace />;
  }
  const userRole = localStorage.getItem('role');
  if (userRole !== 'admin') {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}; 

export const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { message } = location.state || {};
    const [isSignUp, setIsSignUp] = useState(false);
    const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8; // Password should be at least 8 characters
  };

    const handleSignInSubmit = async (e) => {
      e.preventDefault();
      setError(null); // Clear existing errors

      let isValid = true;
  
      if (!validateEmail(email)) {
        setEmailError('Please enter a valid email address.');
        isValid = false;
      } else {
        setEmailError('');
      }
  
      if (!validatePassword(password)) {
        setPasswordError('Password must be at least 8 characters.');
        isValid = false;
      } else {
        setPasswordError('');
      }
  
      if (isValid) {
        // Proceed with form submission (e.g., API call)
        console.log('Form submitted:', { email, password });
      }
      setLoading(true);
      try {
        const response = await api.post('/api/signin', { email, password });
    const token = response.data.token;
    const role = response.data.role;
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    if (role === 'admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/private/home');
    }
       } catch (error) {
        setError(error.response?.data?.message || 'Sign In failed. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  
    const handleSignUpSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        setLoading(false);
        return;
      }
     
      try {
        const response = await api.post('/api/signup', { fullName, email, password });
        const token = response.data.token;
        localStorage.setItem('token', token);
        navigate('/private/home');
      } catch (error) {
        setError(error.response?.data?.message || 'Sign Up failed. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  
    // axios.interceptors.request.use((config) => {
    //   const token = localStorage.getItem('token');
    //   if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    //   }
    //   return config;
    // });
  
  
    return (
     
      <div className="page-container login-page">
        
        <div className="left-section">
        <div class="left-side">
        
          <h1>Smart Parking System</h1>
          <div class="decorative-line"></div>
          <div class="tagline">Effortless Parking, Just a Tap Away</div>
        </div>
        </div>
  
       
        <div className="right-section">
          <div className="login-form-container">
          
            <div className="auth-toggle">
            <a
                href="#"
                onClick={() => setIsSignUp(false)}
                className={!isSignUp ? 'active' : ''}
              >
                Sign In
              </a>
              <a
                href="#"
                onClick={() => setIsSignUp(true)}
                className={isSignUp ? 'active' : ''} 
              >
                Sign Up
              </a>
            </div>
  
          
            {!isSignUp ? (
              <form onSubmit={handleSignInSubmit} className="sign-in-form">
                <div className="form-group">
                  <input type="email" id="email" placeholder="Email" required 
                  value={email} onChange={(e)=> setEmail(e.target.value)} className={emailError ? 'error_l' : ''}/>
                   {emailError && <p className="error-message_l">{emailError}</p>}
                </div>
                <div className="form-group">
                  <input type="password" id="password" placeholder="Password" required 
                  value={password} onChange={(e)=> setPassword(e.target.value)} className={passwordError ? 'error_l' : ''}/>
                  {emailError && <p className="error-message_l">{passwordError}</p>}
                </div>
                <button type="submit" className="btn-sign-in">Sign In</button>
                <a href="#" className="forgot-password">Forgot Password?</a>
                {error && <p style={{ color: 'red', textAlign: 'center', marginTop:'13px' }}>{error}</p>}
              </form>
            ) : (
              // Sign Up Form
              <form onSubmit={handleSignUpSubmit} className="sign-up-form">
                <div className="form-group">
                  <input type="text" id="fullName" placeholder="Full Name" required 
                  value={fullName} onChange={(e)=> setFullName(e.target.value)}/>
                </div>
                <div className="form-group">
                  <input type="email" id="email" placeholder="Email" required
                  value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                  <input type="password" id="password" placeholder="Password" required 
                  value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                  <input type="password" id="confirmPassword" placeholder="Confirm Password" required 
                  value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn-sign-up">Sign Up</button>
                {error && <p style={{ color: 'red', textAlign:'center', marginTop:'13px' }}>{error}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
     
    );
  };






// src/Login.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // Create this CSS file for custom styles
import Logo from '../Images/Logo.png'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="row g-0 shadow login-card1">
        <div className="col-md-6">
          <img src={Logo} alt="Login" className="img-fluid" />
        </div>
        <div className="col-md-6 p-5 bg-white rounded login-card">
          <h2 className="form-title text-center mb-4 text-primary">Login to VitalTrends</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
          <br/>
          <p className="text-center">Don't have an account? </p>
          <div className="text-center"> <Link to="/signup" className="btn btn-secondary w-100"> Sign Up</Link> </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

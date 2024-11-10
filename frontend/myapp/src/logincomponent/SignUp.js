// src/Signup.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css'; // Create this CSS file for custom styles
import Logo from '../Images/Logo.png'
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="row g-0 shadow signupcard">
        <div className="col-md-6">
          <img src={Logo} alt="Signup" className="img-fluid" />
        </div>
        <div className="col-md-6 p-5 bg-white rounded">
          <h2 className="form-title text-center mb-4 text-primary">Sign Up for VitalTrends</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Username" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <div className="mb-3">
              <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="confirm-password" placeholder="Confirm Password" />
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
          </form>
          <p className="text-center">have an account? </p>
          <div className="text-center"> <Link to="/" className="btn btn-secondary w-100"> Login</Link> </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

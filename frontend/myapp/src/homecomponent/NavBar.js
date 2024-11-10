// src/NavBar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'; // Create this CSS file for custom styles
import { Link } from 'react-router-dom';
import Logo from '../Images/Logo.png'; // Adjust the path according to your project structure

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/landingpage">
          <img src={Logo} alt="VitalTrends logo" width="40" height="40" className="me-2" />
          <span className="brand-name">VitalTrends</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            
            
            <li className="nav-item">
              <Link className="nav-link" to="/home">Products</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

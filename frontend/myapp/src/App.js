// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './logincomponent/Login';
import Signup from './logincomponent/SignUp';
import Home from './homecomponent/Home';
import LandingPage from './homecomponent/Landingpage';

function App() {
  return ( 
  <Router> 
    <Routes> 
      <Route path="/" element={<Login />} /> 
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/landingpage" element={<LandingPage />} />
    </Routes> 
  </Router> 
  );
}

export default App;

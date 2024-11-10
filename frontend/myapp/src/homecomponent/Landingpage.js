import React from 'react'
import NavBar from './NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Home.css';
import Cr from './Cr';
import About from './About';
import Contact from './Contact';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <div>
      <NavBar/>
     
      <Cr/>
      <div className='card'>
        <Link to='/home'>
        <button className='btn btn-primary'>Go to Products</button>
        </Link>
      </div>
     
     
      
        <About/>

        <Contact/>

    

    </div>
  )
}

export default Landingpage

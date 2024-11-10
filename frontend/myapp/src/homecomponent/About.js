// src/About.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; // Create this CSS file for custom styles

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row text-center mb-4">
          <div className="col">
            <h2 className="section-title">About VitalTrends</h2>
            <p className="section-description">
              VitalTrends is your go-to destination for the latest and greatest in fashion and electronics. Our mission is to provide top-quality products and an exceptional shopping experience for our valued customers.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                
                <h5 className="card-title">Our Story</h5>
                <p className="card-text">
                  Founded in 2021, VitalTrends started as a small online store and has grown into a leading e-commerce platform. We are committed to bringing you the best products at competitive prices.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
             
                <h5 className="card-title">Our Team</h5>
                <p className="card-text">
                  Our dedicated team of professionals works tirelessly to source the best products, ensure quality, and provide top-notch customer service. We believe in teamwork and excellence.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                
                <h5 className="card-title">Customer Satisfaction</h5>
                <p className="card-text">
                  Customer satisfaction is our top priority. We strive to create a seamless shopping experience, from browsing to delivery, ensuring our customers are happy with their purchases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

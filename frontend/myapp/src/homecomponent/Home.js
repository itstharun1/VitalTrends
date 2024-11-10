// src/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Create this CSS file for custom styles
import NavBar from './NavBar';

function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Fetch products from the fake API
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const filteredProducts = products.filter(product => 
    (filter === 'all' || product.category === filter) &&
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
   <div>
    <NavBar />
     <div className="container mt-5">
        
        <div className="row mb-4">
         
          <div className="col-md-6">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search Products" 
              value={searchTerm} 
              onChange={handleSearch} 
            />
          </div>
          <div className="col-md-6">
            <select className="form-select" value={filter} onChange={handleFilter}>
              <option value="all">All Categories</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>
          </div>
        </div>
        <div className="row">
          {filteredProducts.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
   </div>
  );
}

export default Home;

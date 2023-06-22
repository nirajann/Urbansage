import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import productService from '../../services/productServices';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditProductPage = () => {
    const navigate = useNavigate()
  const { state: { product, productId } } = useLocation();
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [cheapestPrice, setCheapestPrice] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    
    setName(product.name);
    setDesc(product.desc);
    setCheapestPrice(product.cheapestPrice);
    setAddress(product.address);
  }, [product]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const handleCheapestPriceChange = (event) => {
    setCheapestPrice(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = async () => {
    
    try {
        
      axios.put(`http://localhost:4000/hostel/${productId}`, {
        name,
        description: desc,
        cheapestPrice,
        address
      }
      
      ).then(() => {
        navigate("/AdminproductPage");
      }).catch((err) => console.log(err));


    } catch (error) {
      console.log(error);
      // handle error
    }
    
  };

  return (
    <div className='container'>
      <h2 className='text-center'>Edit Hostel</h2>
      <form onSubmit={handleSubmit} to="/AdminproductPage">
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='desc' className='form-label'>
            Description
          </label>
          <textarea
            className='form-control'
            id='desc'
            rows='3'
            value={desc}
            onChange={handleDescChange}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='cheapestPrice' className='form-label'>
            Cheapest Price
          </label>
          <input
            type='text'
            className='form-control'
            id='cheapestPrice'
            value={cheapestPrice}
            onChange={handleCheapestPriceChange} />
            </div>
            <div className='mb-3'>
              <label htmlFor='address' className='form-label'>
                Address
              </label>
              <input
                type='text'
                className='form-control'
                id='address'
                value={address}
                onChange={handleAddressChange}
                required
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Save Changes
            </button>
          </form>
        </div>);
    }
    
    export default EditProductPage;

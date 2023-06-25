import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import '../../style/App.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const token = localStorage.getItem('token');
  const siteName = 'UrbanSage';
  const logo = 'https://firebasestorage.googleapis.com/v0/b/passportpal-3d3d5.appspot.com/o/USlogo%2Fus.png?alt=media&token=f3a7c0f5-12d3-490f-9847-aff1360b0f3f';
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const isAdmin = localStorage.getItem('admin'); // Corrected variable name

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="navbar border-bottom navbar-expand-lg rounded homeback">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <div className="d-flex align-items-center">
            <img src={logo} alt="logo" width="40" height="30" className="d-inline-block align-text-top me-2" />
            <h3 className="text-dark fw-bold">
              <span className="text-primary fw-bold">Urban</span>
              <span className="me-1">Sage</span>
            </h3>
          </div>
        </NavLink>

      


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0">
            
        {isAdmin === 'true' && token !== null && (
          <>
            <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
              <li className="nav-item">
                <NavLink className="nav-link active ms-2 fs-5" exact to="/AdminPage" activeClassName="active-link">
                  Dashboard
                </NavLink>
              </li>
            </CSSTransition>
            <CSSTransition in={true} appear={true} timeout={500} classNames="fade" key="about">
              <li className="nav-item">
                <NavLink className="nav-link active ms-2 fs-5" to="/AdminproductPage" activeClassName="active-link">
                  Admin Product
                </NavLink>
              </li>
              
            </CSSTransition>
          </>
        )}
          {isAdmin === null && token == null && (
    <>
            <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
              <li className="nav-item">
                <NavLink className="nav-link active ms-2 fs-5" exact to="/" activeClassName="active-link">
                  Home
                </NavLink>
              </li>
            </CSSTransition>
            <CSSTransition in={true} appear={true} timeout={500} classNames="fade" key="about">
              <li className="nav-item">
                <NavLink className="nav-link active ms-2 fs-5" to="/about" activeClassName="active-link">
                  About
                </NavLink>
              </li>
            </CSSTransition>
            </>
            )}
            {isAdmin === 'false' && token !== null && (
              <>
              <CSSTransition in={true} appear={true} timeout={500} classNames="fade" key="products">
                <li className="nav-item">
                  <NavLink className="nav-link active ms-2 fs-5" to="/products" activeClassName="active-link">
                    Products
                  </NavLink>
                </li>
              </CSSTransition>
              <CSSTransition in={true} appear={true} timeout={500} classNames="fade" key="products">
                <li className="nav-item">
                  <NavLink className="nav-link active ms-2 fs-5" to="/OrderPage" activeClassName="active-link">
                    order
                  </NavLink>
                </li>
              </CSSTransition>
              </>
            )}
  {isAdmin === null && token == null && (
    <>
            <CSSTransition in={true} appear={true} timeout={500} classNames="fade" key="gallery">
              <li className="nav-item">
                <NavLink className="nav-link active ms-2 fs-5" to="/gallery" activeClassName="active-link">
                  Gallery
                </NavLink>
              </li>
            </CSSTransition>
            <CSSTransition in={true} appear={true} timeout={500} classNames="fade" key="contact">
              <li className="nav-item">
                <NavLink className="nav-link active ms-2 fs-5" to="/contact" activeClassName="active-link">
                  Contact
                </NavLink>
              </li>
            </CSSTransition>
            </>
   )}
            {isAdmin === 'false' && token !== null && (
              <CSSTransition in={true} appear={true} timeout={500} classNames="fade" key="cart">
                <li className="nav-item">
                  <NavLink className="nav-link active ms-2 fs-5" to="/CartPage" activeClassName="active-link">
                    Cart
                  </NavLink>
                </li>
              </CSSTransition>
            )}
          </ul>

          <div className="vr ms-2" style={{ width: '3px' }}></div>
          {token !== null ? (
            <>
              <button onClick={handleLogout} className="btn btn-danger ms-2 fw-bold fs-5" type="button">
                Logout
              </button>
              <div className="vr ms-2" style={{ width: '3px' }}></div>
              <a href="/ProfilePage" className="btn text-dark">
                <FontAwesomeIcon icon={faUser} className="me-2" />
                <span className="fw-bold text-uppercase d-none d-md-inline">{username}</span>
              </a>
            </>
          ) : (
            <>
              <NavLink to="/login" className="btn btn-warning ms-2 fw-bold fs-5" type="button">
                Login
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-success ms-2 fw-bold fs-5" type="button">
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;

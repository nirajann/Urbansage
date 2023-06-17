import React from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import '../../style/App.css';

const Header = () => {
  const token = localStorage.getItem('token');
  const siteName = 'UrbanSage';
  const logo = 'https://firebasestorage.googleapis.com/v0/b/passportpal-3d3d5.appspot.com/o/USlogo%2Fus.png?alt=media&token=f3a7c0f5-12d3-490f-9847-aff1360b0f3f';

  const handleLogout = () => {
    localStorage.clear();
    // Add any additional logout logic here
  };

  return (
    <nav className="navbar border-bottom navbar-expand-lg rounded homeback">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <div className="d-flex align-items-center">
            <img src={logo} alt="logo" width="40" height="30" className="d-inline-block align-text-top me-2" />
            <h3 className="text-dark fw-bold">
              <span className="text-white me-1">Urban</span>
              <span className="me-1">Sage</span>
            </h3>
          </div>
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0">
            <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
              <li className="nav-item">
                <NavLink className="nav-link active ms-2 fs-5" exact to="/" activeClassName="active-link">Home</NavLink>
              </li>
            </CSSTransition>
            <CSSTransition in={true} appear={true} timeout={500} classNames="fade" key="about">
              <li className="nav-item">
                <NavLink className="nav-link active ms-2 fs-5" to="/about" activeClassName="active-link">About</NavLink>
              </li>
            </CSSTransition>
            <CSSTransition in={true} appear={true} timeout={500} classNames="fade" key="rooms">
              <li className="nav-item">
                <NavLink className="nav-link active ms-2 fs-5" to="/rooms" activeClassName="active-link">products</NavLink>
              </li>
            </CSSTransition>
            <CSSTransition in={true} appear={true} timeout={500} classNames="fade" key="gallery">
              <li className="nav-item">
                <NavLink className="nav-link active ms-2 fs-5" to="/gallery" activeClassName="active-link">Gallery</NavLink>
              </li>
            </CSSTransition>
            <CSSTransition in={true} appear={true} timeout={500} classNames="fade" key="contact">
              <li className="nav-item">
                <NavLink className="nav-link active ms-2 fs-5" to="/contact" activeClassName="active-link">Contact</NavLink>
              </li>
            </CSSTransition>
            {token !== null && (
              <CSSTransition in={true} appear={true} timeout={500} classNames="fade" key="cart">
                <li className="nav-item">
                  <NavLink className="nav-link active ms-2 fs-5" to="/cart" activeClassName="active-link">Cart</NavLink>
                </li>
              </CSSTransition>
            )}
          </ul>

          <div className="vr ms-2" style={{ width: '3px' }}></div>
          {token !== null ? (
            <>
              <button onClick={handleLogout} className="btn btn-danger ms-2 fw-bold fs-5" type="button">Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="btn btn-warning ms-2 fw-bold fs-5" type="button">Login</NavLink>
              <NavLink to="/register" className="btn btn-outline-success ms-2 fw-bold fs-5" type="button">Sign Up</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;

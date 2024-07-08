import React from 'react';
import { Link } from 'react-router-dom';
import amazonLogo from '../images/Amazon-logo-meaning.jpg'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import CarouselComponent from './CarouselComponent'; 
import Category from './Category';
import LogoutIcon from '@mui/icons-material/Logout';

function NavBar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <div className="row w-100 align-items-center">
            <div className="col-auto d-flex justify-content-start">
              <a className="navbar-brand" href="#">
                <img src={amazonLogo} alt="Amazon Logo" width="60" height="30" />
              </a>
            </div>
            <div className="col d-flex justify-content-center">
              <form className="d-flex w-100" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ flexGrow: 1 }} />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
            <div className="col-auto d-flex align-items-center">
              <Link to="/signin" className="btn btn-outline-primary me-2">
                Sign In/Register
              </Link>
              <Link to="/" className="btn btn-outline-secondary me-2">
                <LogoutIcon className="me-1" />
                Logout
              </Link>
              <Link to="/cart" className="btn btn-outline-secondary">
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <CarouselComponent />
      <Category />
    </div>
  );
}

export default NavBar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import '../style/nav.css';


const Navbar = () => {
  const state = useSelector( (state) => state.cart);
  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-1 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">SHAWNGYM</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-center navForRWD"     id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            
              
            </ul>
            <div className="button d-flex navForRWD ">
              <NavLink to="/login" className='btn btn-outline-dark m-2'>
                Login
              </NavLink>
              <NavLink to="/register" className='btn btn-outline-dark m-2'>
                Register
              </NavLink>
              <NavLink to="/cart" className='btn btn-outline-dark m-2'>
               category
               {/* category({state.length}) */}
               
              </NavLink>
            </div>

          </div>
        </div>
      </nav>
    </div>

  )
}

export default Navbar
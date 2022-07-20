import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';
import { useNavigate } from "react-router-dom";
// import AuthService from "../services/auth.service";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faBars } from '@fortawesome/free-solid-svg-icons'
import {Card, Container, Row, Col, Carousel }from 'react-bootstrap';

import "../style/style.css"
import { useSelector } from 'react-redux';



function Navbar(props) {
  const state = useSelector((state) => state.handleCart);
  let {currentUser, setCurrentUser} =props;
  const navigate = useNavigate();
  
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  

  const handleLogout = () => {
    // AuthService.logout();
    window.alert("Logout Successfully, now you are redirect to the homepage.");
    setCurrentUser(null);
    navigate("/");
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    
      <nav className='navbar p-0'>
        <div className='navbar-container '>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            JIMGYM
          </Link>
          <div className='menu-icon' onClick={handleClick}>
          <FontAwesomeIcon className='text-light' icon={click ? faTimes : faBars} />
          </div>


          <ul className={click ? 'nav-menu active d-flex justify-content-center' : 'nav-menu  '}>

            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                首頁
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                好物推薦
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/myclass'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                推薦課程
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/trainMySelf'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                訓練清單
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/myticket'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                我的票券
              </Link>
            </li>
            
            {/* {currentUser && (<li className='nav-item'>
              <Link
                to='/myTicket'
                className='nav-links'
                onClick={closeMobileMenu}
                
              >
                我的票券
              </Link>
            </li>)}   */}




          

              <li className='nav-links p-0 my-0 me-1'>
                <Link
                  to='/register'
                  className='nav-links sbtn text-light '
                  onClick={closeMobileMenu}
                >
                  註冊
                </Link>
              </li>  

              <li className='nav-links  my-0 me-1'>
                <Link
                  to='/login'
                  className='nav-links sbtn text-light '
                  onClick={closeMobileMenu}
                >
                  登入
                </Link>
              </li> 

              <li className='nav-links p-0 my-0 me-1'>
                <Link
                  to='/cart'
                  className='nav-links cartbtn text-light '
                  onClick={closeMobileMenu}
                >
                  購物車({state.length})
                </Link>
              </li> 


            {currentUser && (<li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                // onClick={closeMobileMenu, handleLogout}
                
              >
                登出
              </Link>
            </li>)}




          </ul>

          

          

          
        </div>
      </nav>
    
  );
}

export default Navbar;

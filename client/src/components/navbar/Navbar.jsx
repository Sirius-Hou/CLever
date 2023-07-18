import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';

import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#Home">Home</a></p>
    <p><a href="#Wclever">What is CLever?</a></p>
    <p><a href="#features">Features</a></p>
    <p><a href="#blog">Examples</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="clever_navbar">
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links-container">
          <p><a href="#home">Home</a></p>
          <p><a href="#Wclever">What is CLever</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#blog">Examples</a></p>
          <p><a href="#main">Cover Letter</a></p>
        </div>
      </div>
      <div className="navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="navbar-menu-container scale-up-center">
            <div className="navbar-menu-container-links">
              <Menu />
            </div>
            <div className="navbar-menu-container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
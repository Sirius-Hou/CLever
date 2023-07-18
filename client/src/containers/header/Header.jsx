import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/start');
  }

  return (
    <div className="header">
      <div className="header-content">
      <h1 className='gradient_text'>Welcome to CLever!</h1>
        <p>Description...</p>
        <div className="header-content-input">
          <button className="start-btn" onClick={handleClick}>Get Started</button>
        </div>
      </div>
    </div>
    /* <p></p>
        < div className="header-content-people">
          <img src={people} alt="people" />
          <p>Over 4000 people started access a visit in last 3 hour</p>
        </div> */
  )
}

export default Header;

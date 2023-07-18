import React from 'react'
import { useNavigate } from 'react-router-dom';
import './header.css'
import people from '../../assets/people.png'
import image from '../../assets/image.png'

const Header = () => {
  const navigate = useNavigate(); // get access to the navigate function

  const handleClick = () => {
    navigate('/start'); // navigate to /start when the button is clicked
  }

  return (
    <div className="header section-padding" id="home">
      <div className="header-content">
        <h1 className="gradient_text">Welcome to CLever! </h1>
        <p>Description...<br />
        2nd line<br />
        3rd line<br />
        </p>
        
        <div className="header-content-input">
        <button type="button" className="start-btn" onClick={handleClick}>Get Started</button>
          {/* <input type="data" placeholder="Enter your email" /> */}
          
          {/* <button type="button" className="submit-btn" onClick={handleClick}>Get Started2</button> */}
        </div>
        {/* <div className>
        <button type="button" className="start-btn" onClick={handleClick}>Get Started</button>
        </div> */}
        {/* <p></p>
        < div className="header-content-people">
          <img src={people} alt="people" />
          <p>Over 4000 people started access a visit in last 3 hour</p>
        </div> */}

      </div>
      <div className="header-image">
        <img src={image} alt="image" />
      </div>
    </div>
  )
}

export default Header
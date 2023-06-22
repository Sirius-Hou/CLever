import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];  
    console.log(file);  //Change
};


const handleButtonClick = () => {
    document.getElementById('file-input').click();
};
  return (
    <div className="header section-padding" id="home">
      <div className="header-content">
        <h1 className="gradient_text">Welcome to Clever! </h1>
        <p>Description...</p>

        <div className="header-content-input">
          <input type="data" placeholder="Type your experiences..." />
          <div className="import-button">
            <input type="file" id="file-input" style={{ display: 'none' }} onChange={handleFileChange} />
            <button type="button" className="upload-btn" onClick={handleButtonClick}>
              <i className="fa fa-upload"></i> Upload
            </button>
          </div>
          <button type="button" className="submit-btn">Submit</button>
        </div>

        < div className="header-content-people">
          <img src={people} alt="people" />
          <p>Over 4000 people started access a visit in last 3 hour</p>
        </div>

      </div>
      <div className="header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header
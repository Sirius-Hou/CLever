import React from 'react';
import { useNavigate } from 'react-router-dom';
import './companydetails.css';
// import companyLogo from './companyLogo.png';

const CompanyDetails = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/start/additional'); // replace with your next page route
  }
  const handleBack = () => {
    navigate('/start/resume'); // replace with your next page route
  }

  return (
    // <div className="gradient_bg">
      <div className="content">
        <div className="gradient_bg">
          <div className="left2">
            <h1 className='gradient_text'>Company Details - Required</h1>
            
            <div className="inputclass">
              <p>Company Name</p>
              <input type="data" placeholder="Enter the applying company name..." />
              <p>Position Title</p>
              <input type="data" placeholder="Enter the applying position title..." />
            </div>
            <div className = "buttonclass">
            <button onClick={handleBack}>Back</button>
            </div>
            {/* <div className = "buttonclass2"> */}
            <button onClick={handleNext}>Next</button>
            {/* </div> */}
            
          </div>
          <div className="right2">
          <h1>logo</h1>
            {/* <img src={companyLogo} alt="Company Logo" /> */}
          </div>
          </div>
      </div>
    // </div>
  );
}

export default CompanyDetails;
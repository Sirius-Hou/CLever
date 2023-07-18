import React from 'react';
import { useNavigate } from 'react-router-dom';
import './additionaldetails.css';
// import companyLogo from './companyLogo.png';

const AdditionalDetails = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/start/coverletter'); // replace with your next page route
  }
  const handleBack = () => {
    navigate('/start/company'); // replace with your next page route
  }

  return (
    // <div className="gradient_bg">
      <div className="content">
        <div className="gradient_bg">
          <div className="left3">
            <h1 className='gradient_text'>Additional information - optional</h1>
            <p>Copy and paste the description of the job you wish to apply for (optional, but providing more information can help increase the accuracy of the generated cover letter) </p>
            
            <textarea placeholder="Type your resume information here..."></textarea>
            <div className = "buttonclass">
            <button onClick={handleBack}>Back</button>
            </div>
          
            <button onClick={handleNext}>Next</button>
          </div>
          <div className="right3">
          <h1>logo</h1>
            {/* <img src={companyLogo} alt="Company Logo" /> */}
          </div>
          </div>
      </div>
    // </div>
  );
}

export default AdditionalDetails
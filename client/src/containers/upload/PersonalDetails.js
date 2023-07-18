import React from 'react';
import { useNavigate } from 'react-router-dom';
import './personaldetails.css';
// import companyLogo from './companyLogo.png';

const PersonalDetails = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/start/company'); // replace with your next page route
  }

  return (
    // <div className="gradient_bg">
      <div className="content">
        <div className="gradient_bg">
          <div className="left">
            <h1 className='gradient_text'>Personal Details - Required</h1>
            <p>Upload or type your resume. Include your education, skills, work experiences, internships etc.</p>
            <input type="file" accept=".pdf,.doc,.docx" />
            <textarea placeholder="Type your resume information here..."></textarea>
            <button onClick={handleNext}>Next</button>
          </div>
          <div className="right">
          <h1>logo</h1>
            {/* <img src={companyLogo} alt="Company Logo" /> */}
          </div>
          </div>
      </div>
    // </div>
  );
}

export default PersonalDetails;

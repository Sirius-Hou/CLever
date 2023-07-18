import React from 'react';
import { useNavigate } from 'react-router-dom';
import './success.css';

const Success = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    // download functionality 
  }

  const handleRegenerate = () => {
    navigate('/chat'); // replace with your next page route
  }

  return (
    <div className="gradient_bg">
      <h1 className='gradient_text'>Here's your resume</h1>
      <p>Download your resume and cover letter. You can also regenerate your resume through our chatbot.</p>
      {/* <div className="resume"></div> */}
      <p>resume img</p>
      <div className="button-group1">
        <button onClick={handleDownload}>Download</button>
      </div>
      <div className="button-group2">
      <button onClick={handleRegenerate}>Regenerate</button>
      </div>
      
    </div>
  );
}

export default Success;

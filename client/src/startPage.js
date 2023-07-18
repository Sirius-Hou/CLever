import React from 'react';
import { useNavigate } from 'react-router-dom';

// import logo from './assets/logo.png';


const StartPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/start/resume'); // replace with your next page route
  }

    return (
      <div className="main-page" id="main">
        <div className="gradient_bg">
          <h1 className='gradient_text'>Create your coverletter</h1>

            <p>1. Upload your resume</p>
            <p>2. Tell us your desired company name/position</p>
            <p>3. Any additional information</p>
            <p>4. Generate your coverletter</p>
            <div className="buttonclass">
              <button onClick={handleNext}>Start Now!</button>
            </div>
        </div>
      </div>
    )
}

export default StartPage;
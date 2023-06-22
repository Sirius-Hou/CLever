import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="clever__footer section__padding">
    <div className="clever__footer-heading">
      <h1 className="gradient__text">Get stated with your first cover letter</h1>
    </div>

    <div className="clever__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="clever__footer-links">
      <div className="clever__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Clever Team <br /> All Rights Reserved</p>
      </div>
      <div className="clever__footer-links_div">
        <h4>Links</h4>
        <p>LinkedIn</p>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Contact</p>
      </div>
      <div className="clever__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="clever__footer-links_div">
        <h4>Get in touch</h4>
        <p>Clever Team</p>
        <p>647-xxx-xxx</p>
        <p>xxx@clever.com</p>
      </div>
    </div>

    <div className="clever__footer-copyright">
      <p>@2023 Clever. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
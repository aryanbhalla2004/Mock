import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

export const AuthFooter = () => {
  return (
    <footer className='auth-12-footer'>
      <div className='content-sizing auth-12-footer-content'>
        <p>&copy; 2023 Zoobo Inc. <Link to="/privacy-policy">Privacy Policy</Link> and <Link to="/term-of-services">Terms of Service</Link> apply.</p>
      </div>
    </footer>
  )
}

export default AuthFooter;
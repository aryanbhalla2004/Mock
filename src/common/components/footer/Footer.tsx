import React from 'react'
import "./style.css";
import AuthFooter from '../../../pages/auth/components/footer/AuthFooter';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
      <div className='footer-container-main'>
        <div className='content-sizing footer-main-wrapper'>
          <div className='single-footer-colum about-container-footer'>
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris risus, lobortis a commodo at, varius sit amet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris risus, lobortis a commodo at, varius sit amet ipsum.</p>
            <ul className='list-links-footer'>
              <li><Link to="/"><i className="bi bi-telephone"></i> (431)-373-3690</Link></li>
              <li><Link to="/"><i className="bi bi-envelope"></i> info@zoobo.ca</Link></li>
            </ul>
          </div>
          <div className='single-footer-colum about-container-footer'>
            <h3>Company</h3>
            <ul className='list-links-footer'>
              <li><Link to="/">Our Team</Link></li>
              <li><Link to="/">Job Benifts</Link></li>
              <li><Link to="/">Work Terms</Link></li>
              <li><Link to="/">FAQ</Link></li>
            </ul>
          </div>
          <div className='single-footer-colum about-container-footer'>
            <h3>Support</h3>
            <ul className='list-links-footer'>
              <li><Link to="/">Help center</Link></li>
              <li><Link to="/">Updates</Link></li>
              <li><Link to="/">Documentation</Link></li>
              <li><Link to="/">Terms of Use</Link></li>
            </ul>
          </div>
          <div className='single-footer-colum about-container-footer'>
            <h3>Connect</h3>
            <ul className='list-links-footer'>
              <li><Link to="/"><i className="bi bi-linkedin"></i> Linkedin</Link></li>
              <li><Link to="/"><i className="bi bi-twitter"></i> Twitter</Link></li>
              <li><Link to="/"><i className="bi bi-tiktok"></i> TikTok</Link></li>
              <li><Link to="/"><i className="bi bi-facebook"></i>Facebook</Link></li>
              <li><Link to="/"><i className="bi bi-instagram"></i>Instagram</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <AuthFooter />
    </>
  )
}

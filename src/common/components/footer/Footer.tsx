import React from 'react'
import "./style.css";
import AuthFooter from '../../../pages/auth/components/footer/AuthFooter';
import { Link } from 'react-router-dom';
interface prop {
  sectionRefs: any
}
export const Footer = (props:prop) => {

  const scrollTo = (location: any) => {
    location.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <div className='footer-container-main'>
        <div className='content-sizing footer-main-wrapper'>
          <div className='single-footer-colum about-container-footer'>
            <h3>About Us</h3>
            <p>Join our snow cleaning company and become part of a dedicated team committed to
              excellence. We offer employment opportunities in the snow cleaning industry, where
              teamwork is valued. With a supportive work environment, our company creates a
              fulfilling and dynamic workplace for employees.
            </p>
            <ul className='list-links-footer'>
              <li><Link to="/"><i className="bi bi-telephone"></i> (431)-373-3690</Link></li>
              <li><Link to="/"><i className="bi bi-envelope"></i> info@zoobo.ca</Link></li>
            </ul>
          </div>
          <div className='single-footer-colum about-container-footer'>
            <h3>Company</h3>
            <ul className='list-links-footer'>
              <li><Link to="/" onClick={() => scrollTo(props.sectionRefs.working)}>Our Team</Link></li>
              <li><Link to="/" onClick={() => scrollTo(props.sectionRefs.mission)}>Job Benifts</Link></li>
              <li><Link to="/" onClick={() => scrollTo(props.sectionRefs.benefits)}>Work Terms</Link></li>
              <li><Link to="/" onClick={() => scrollTo(props.sectionRefs.faq)}>FAQ</Link></li>
            </ul>
          </div>
          <div className='single-footer-colum about-container-footer'>
            <h3>Support</h3>
            <ul className='list-links-footer'>
              <li><Link to="/help-center">Help center</Link></li>
              <li><Link to="/">Updates</Link></li>
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

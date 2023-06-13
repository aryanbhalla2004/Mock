import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../assets/logo-green.png";
import "./style.css";
import { GhostLinkBtn } from '../button/Button';
export const Header = () => {
  return (
    <header className='auth-12-header'>
      <div className='content-sizing auth-12-header-wrapper'>
        <div className='left-side-carrer-header'>
          <div className='logo-holder-auth'>
            <Link to="/"><img src={logo} width={150}></img></Link>
          </div>
          <nav className='nav-carrer-header'>
            <ul>
              <li>
                <Link to={''}>Our Team</Link>
              </li>
              <li>
                <Link to="">Benifts</Link>
              </li>
              <li>
                <Link to="">Work Terms</Link>
              </li>
              <li>
                <Link to="">FAQ</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='auth-12-action-btn-work-start'>
          <p>Join the crew at Zoobo!</p>
          <GhostLinkBtn name="Get Started" path={'/auth/sign-up'}/>
        </div>

      </div>
    </header>
  )
}

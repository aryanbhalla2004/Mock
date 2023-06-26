import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../assets/logo-green.png";
import "./style.css";
import { GhostLinkBtn, PrimaryButton } from '../button/Button';
import { AccountContext } from '../../../setup/contexts/AuthContext';
import { Loading } from '../loading/Loading';
export const Header = () => {
  const {isAuthenticated, isLoading, getUser, setIsLogoutEnabled} = useContext(AccountContext);
  const [showDrop, setShowDrop] = useState<boolean>(false);
  const [inBox, setInBox] = useState(false);

  const leavebox = () => {
    setTimeout(() => {
      if(!inBox) {
        setShowDrop(false);
      }
    }, 200);
  }

  const closeDrop = () => {
    setInBox(false);
    setShowDrop(false);
  }
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
                <Link to="">Working at Zoobo</Link>
              </li>
             
              <li>
                <Link to="">Mission & Values</Link>
              </li>
              <li>
                <Link to="">Benifts</Link>
              </li>
              <li>
                <Link to="">FAQ</Link>
              </li>
            </ul>
          </nav>
        </div>


        {!isLoading ? <> {isAuthenticated ? 
          <div className='right-side-auth-user'>
            <div className='border-right'>
              <Link to="/" className='notification-button-auth-header '><i className="bi bi-bell"></i></Link>
            </div>
            <div className='profiled-logged-in' onMouseEnter={() => setShowDrop(true)} onMouseLeave={leavebox}>
              <div className='profile-icon'><i className="bi bi-person-fill"></i></div>
              <div className='user-info-header'>
                <p>{getUser()?.attributes?.email}</p>
                <span>Crew Member</span>
              </div>
              <i className="bi bi-chevron-down"></i>

              <div className={showDrop || inBox ? " show-drop drop-down-account-header" : "hide-drop drop-down-account-header"} onMouseEnter={() => setInBox(true)} onMouseLeave={closeDrop}>
                <ul>
                  <li>
                    <Link to={"/dashboard"}><i className="bi bi-columns-gap"></i>Dashboard</Link>
                  </li>
                  <li>
                    <Link to={"/dashboard"}><i className="bi bi-list-task"></i> My Work</Link>
                  </li>
                  <li>
                    <Link to={"/dashboard"}><i className="bi bi-gear"></i> Settings</Link>
                  </li>
                  <li>
                    <button onClick={() => setIsLogoutEnabled(true)}><i className="bi bi-box-arrow-right"></i> Logout</button>
                  </li>
                </ul>
              </div>
            </div>
           
          </div> :  <div className='auth-12-action-btn-work-start'>
          <p>Join the crew at Zoobo!</p>
          <GhostLinkBtn name="Get Started" path={'/auth/sign-up'}/>
          <p>or</p>
          <GhostLinkBtn name="Login" path={'/auth'}/>
          
        </div>}</> : <div className='center-loading-box-header'><Loading/></div>}

        

      </div>
    </header>
  )
}

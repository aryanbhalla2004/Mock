import React, { useEffect } from 'react'
import "./style.css";
import logo from "../../../../assets/logo-green.png";
import { GhostButton, GhostLinkBtn } from '../../../../common/components/button/Button';
import { useLocation } from 'react-router-dom';

const AuthHeader = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);
  return (
    <header className='auth-12-header'>
      <div className='content-sizing auth-12-header-wrapper'>
        <div className='logo-holder-auth'>
          <img src={logo} width={150}></img>
        </div>
        {location.pathname === "/auth" &&
        <div className='auth-12-action-btn-work-start'>
          <p>Join the crew at Zoobo!</p>
          <GhostLinkBtn name="Create an Account" path={'/auth/sign-up'}/>
        </div>}

        {location.pathname === "/auth/sign-up" &&
        <div className='auth-12-action-btn-work-start'>
          <p>Already a Crew Member at Zoobo?</p>
          <GhostLinkBtn name="Sign In" path={'/auth'}/>
        </div>}
      </div>
    </header>
  )
}

export default AuthHeader;

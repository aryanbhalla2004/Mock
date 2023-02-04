import React from 'react'
import "./style.css";
import logo from "../../../../assets/logo-green.png";
import { GhostButton, GhostLinkBtn } from '../../../../common/ components/button/Button';
const AuthHeader = () => {
  return (
    <header className='auth-12-header'>
      <div className='content-sizing auth-12-header-wrapper'>
        <div className='logo-holder-auth'>
          <img src={logo} width={150}></img>
        </div>
        <div className='auth-12-action-btn-work-start'>
          <p>Join the crew at Zoobo!</p>
          <GhostLinkBtn name="Create an Account" path={'/auth/sign-up'}/>
        </div>
      </div>
    </header>
  )
}

export default AuthHeader;

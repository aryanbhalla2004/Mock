import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthFooter from './components/footer/AuthFooter';
import AuthHeader from './components/header/AuthHeader';
import "./style.css";
const Auth = () => {
  return (
    <div className='auth-main-page'>
      <AuthHeader/>
      <Outlet/>
      <AuthFooter/>
    </div>
  )
}

export default Auth;

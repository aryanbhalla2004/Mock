import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AuthFooter from './components/footer/AuthFooter';
import AuthHeader from './components/header/AuthHeader';
import "./style.css";
import { AccountContext } from '../../setup/contexts/AuthContext';
const Auth = () => {
  
  const {getUser, isAuthenticated} = useContext(AccountContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated)
      navigate('/');
  }, [navigate, getUser]);

  return (
    <div className='auth-main-page'>
      <AuthHeader/>
      <Outlet/>
      <AuthFooter/>
    </div>
  )
}

export default Auth;

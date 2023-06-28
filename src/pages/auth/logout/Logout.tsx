import React, { useContext, useEffect, useState } from 'react'
import "./style.css";
import { useParams, useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../../common/components/button/Button';
import { AccountContext } from '../../../setup/contexts/AuthContext';
import { toast } from 'react-toastify';

export const Logout = () => {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<any>(null);
  const {isLogoutEnabled, setIsLogoutEnabled, logout, isAuthenticated, getUser} = useContext(AccountContext);
  
  useEffect(() => {
    if(!isAuthenticated || getUser() != null) {
      setIsLogoutEnabled(false);
    } else {
      
      setUserInfo(getUser());
    }
  }, []);
  
  const logoutUser = async () => {
    setFormSubmitted(true);
    try {
      await logout("false");
      
      setTimeout(() => {
        setFormSubmitted(false);
        navigate("/auth");
        setIsLogoutEnabled(false);
        toast.success("You have logged out successfully!", {toastId: "LOGOUT_TOAST"});
      }, 1000);

    } catch (e: any) {
      console.log(e);
      setIsLogoutEnabled(false);
      setFormSubmitted(false);
    }
  }
  return (
    <div className={isLogoutEnabled ? "show-box-pop logout-main-container" : "logout-main-container"}>
      <div className='content-box-center-pop-modal logout-popup'>
        <h4>You are attempting to log out of Zoobo</h4>
        <p>Are you Sure?</p>
        <div className="checkboxes__item add-spaceing-around">
          <label className="checkbox style-e">
            <input type="checkbox" name="remember"/>
            <div className="checkbox__checkmark"></div>
            <div className="checkbox__body">Global Logout</div>
          </label>
        </div>
        <div className='logout-pop-button-action'>
          <span>Logged in as {getUser() && getUser().attributes?.given_name} {getUser() && getUser().attributes?.family_name}</span>
          <PrimaryButton name="Logout" width='full' loading={formSubmitted} onClick={() => logoutUser()}/>
        </div>
        <button className='close-button-pop-up' onClick={() => setIsLogoutEnabled(false)}><i className="bi bi-x"></i></button>
      </div>
    </div>
  ) 
}

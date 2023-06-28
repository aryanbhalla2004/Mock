import React from 'react'
import { PrimaryButton } from '../../../common/components/button/Button'
import errorImg from "../../../assets/404Error.svg";
import "./style.css";
import { useNavigate } from 'react-router-dom';
export const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className='error-404-page'>
      <img src={errorImg} alt="Error 404" />
      <h2>OOPS! PAGE NOT BE FOUND</h2>
      <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
      <PrimaryButton name="Back to Home" onClick={() => navigate("/")}/>
    </div>
  )
}

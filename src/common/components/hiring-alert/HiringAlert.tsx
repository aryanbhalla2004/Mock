import React from 'react'
import "./style.css";
import { Link } from 'react-router-dom';

export const HiringAlert = () => {
  return (
    <div className='hiring-alter-container'>
      <p><strong className='strong-class'>#Beta #Hiring:</strong> Join our team for the upcoming season! <Link to="auth/sign-up">Click here</Link> to get started and seize this incredible opportunity.</p>
    </div>
  )
}

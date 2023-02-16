import React from 'react'
import { PrimaryButton, TextLink } from '../../../common/components/button/Button';
import { TextInput } from '../../../common/components/input/Input';
import "./style.css";
const SignIn = () => {
  return (
    <form className='login-form-auth-12'>
      <div className='auth-12-login-header-text'>
        <h2>Employee Portal</h2>
        <h4>Login to View and Manage Your Work Schedule</h4>
      </div>
      <TextInput type="email" name="email" placeholder="mail@example.com" label="Email Address"/>
      <TextInput type="password" name="password" placeholder="Min 8. Characters" label="Password"/>
      <div className='auth-12-check-forgot-link'>
        <div className="checkboxes__item">
          <label className="checkbox style-e">
            <input type="checkbox" name="Saturday"/>
            <div className="checkbox__checkmark"></div>
            <div className="checkbox__body">Remember Me</div>
          </label>
        </div>
        <TextLink name="Forgot Password?" path={`/auth/forgot-password`}/>
      </div>
      <PrimaryButton name="Sign In" type="submit" width="full"/>
    </form>
  )
}

export default SignIn;

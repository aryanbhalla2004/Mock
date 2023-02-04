import React, { useState } from 'react'
import { PrimaryButton } from '../../../common/ components/button/Button';
import { TextInput } from '../../../common/ components/input/Input';
import "./style.css";
const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    // <form className='auth-12-register'>
    //   <div className='auth-12-register-header-text'>
    //     <h2>Join the <span className='primary-text'>Zoobo</span> crew and get started on an adventure of endless fun!</h2>
    //   </div>
    //   <TextInput type="email" name="email" placeholder="mail@example.com" label="Email Address"/>
    //   <p>Please ensure that you enter the correct email address for your Zoobo account. This email will serve as the primary means of communication for important updates and information about your account.</p>
    //   <PrimaryButton name="Next" type="submit" width="full"/>
    // </form>

    // <form className='auth-12-register-step-2'>
    //   <div className='auth-12-register-header-text'>
    //     <h2>Give us a moment to learn more about you by providing us with some personal information.</h2>
    //   </div>
    //   <div className='col-2-form-register'>
    //     <TextInput type="email" name="email" placeholder="John" label="First Name"/>
    //     <TextInput type="email" name="email" placeholder="Smith" label="Last Name"/>
    //   </div>
    //   <p className='note-small-text mt-0 mb-1'>Please only use the names listed in our legal documentation.</p>
    //   <TextInput type="number" name="email" placeholder="+12032322323" label="Phone Number"/>
    //   <TextInput type="date" name="email" placeholder="" label="Date of Birth" note="Must be 16+ to apply"/>
      
    //   <PrimaryButton name="Next" type="submit" width="full"/>
    // </form>   

    // <form className='auth-12-register-step-3'>
    //    <div className='auth-12-register-header-text'>
    //      <h2>The address you provide will assist us in locating jobs near you.</h2>
    //    </div>

    //    <TextInput type="email" name="email" placeholder="123 Street Rd 12345 USA" label="Your Address" note="Please provide your current residential address"/>
    //    <PrimaryButton name="Next" type="submit" width="full"/>
    //  </form>   

    <form className='auth-12-register-step-3'>
      <div className='auth-12-register-header-text'>
        <h2>Whats your avability like?</h2>
      </div>

      <TextInput type="email" name="email" placeholder="123 Street Rd 12345 USA" label="Your Address" note="Please provide your current residential address"/>
      <PrimaryButton name="Next" type="submit" width="full"/>
    </form>   
  )
}

export default SignUp;
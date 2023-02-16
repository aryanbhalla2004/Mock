import { AddressAutofill } from '@mapbox/search-js-react';
import React, { useState } from 'react'
import { IEmployeeSignUpForm } from '../../../common/interfaces/CommonInterfaces';
import { StepFive } from './components/step-five/Step-five';
import StepFour from './components/step-four/Step-four';
import StepOne from './components/step-one/Step-one';
import StepThree from './components/step-three/Step-three';
import StepTwo from './components/step-two/Step-two';
import "./style.css";
const SignUp = () => {
  const [page, setPage] = useState<number>(0);
  const [formData, setFormData] = useState<IEmployeeSignUpForm>({
    fName: "",
    lName: "",
    email: "",
    pNumber: 0,
    dob: "",
    address: {
      address: "",
      unit: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
    },
    availability: {
      Sunday: { isAvailable: true, timing: [{start: "", end: ""}]},
      Monday: { isAvailable: true, timing: [{start: "", end: ""}]},
      Tuesday: { isAvailable: true, timing: [{start: "", end: ""}]},
      Wednesday: { isAvailable: true, timing: [{start: "", end: ""}]},
      Thursday: { isAvailable: true, timing: [{start: "", end: ""}]},
      Friday: { isAvailable: true, timing: [{start: "", end: ""}]},
      Saturday: { isAvailable: true, timing: [{start: "", end: ""}]},
    },
    verified: false,
  });
  
  const nextPage = () => {
    if(page < 7) {
      setPage(prev => prev + 1);
    }
  }

  const backPage = () => {
    if(page > 0) {
      setPage(prev => prev - 1);
    }
  }

  //! Page sets
  switch (page) {
    case 0:
      return <StepOne nextPage={nextPage} backPage={backPage} formData={formData} setFormData={setFormData}/>;
    case 1:
      return <StepTwo nextPage={nextPage} backPage={backPage} formData={formData} setFormData={setFormData}/>;
    case 2:
      return <StepThree nextPage={nextPage} backPage={backPage} formData={formData} setFormData={setFormData}/>;
    case 3:
      return <StepFour nextPage={nextPage} backPage={backPage} formData={formData} setFormData={setFormData}/>;
    case 4:
        return <StepFive nextPage={nextPage} backPage={backPage} formData={formData} setFormData={setFormData}/>;
    default:
      return <StepOne nextPage={nextPage} backPage={backPage} formData={formData} setFormData={setFormData}/>;
  }
}


export default SignUp;
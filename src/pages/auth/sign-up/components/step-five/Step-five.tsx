import { AddressAutofill } from '@mapbox/search-js-react'
import React from 'react'
import { GhostButton, PrimaryButton } from '../../../../../common/components/button/Button'
import { TextInput } from '../../../../../common/components/input/Input'
import { IEmployeeSignUpForm } from '../../../../../common/interfaces/CommonInterfaces'
interface prop {
  nextPage: () => void,
  backPage: () => void,
  formData: IEmployeeSignUpForm | undefined,
  setFormData: (data: IEmployeeSignUpForm) => void,
}

export const StepFive = (props: prop) => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    props.nextPage()
  }
  return (
    <form className='auth-12-register-step-3' onSubmit={onSubmit}>
    <div className='auth-12-register-header-text'>
      <h2>Uploading Proof of Identity/Address</h2>
      <p>Please upload a copy of either your passport or national ID card. We assure you that your personal information and identity documents will be securely stored and handled with the utmost confidentiality.</p>
    </div>
   
    <div className='button-same-level-col'>
      <PrimaryButton name="Next" type="submit" width="full"/>
      <GhostButton name="Back" onClick={props.backPage} type="button" width="full" />
    </div>
  </form>  
  )
}

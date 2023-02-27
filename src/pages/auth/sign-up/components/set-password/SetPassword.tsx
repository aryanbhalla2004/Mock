import React from 'react'
import { TextInput } from '../../../../../common/components/input/Input'
import PasswordStrengthBar from 'react-password-strength-bar';
import { IEmployeeSignUpForm } from '../../../../../common/interfaces/CommonInterfaces';
import { Error } from '../../interface/Error';
interface prop {
  formData: IEmployeeSignUpForm,
  setFormData: (fields: any) => void,
  error: Error
}
export const SetPassword = (props: prop) => {
  const setValue = (field: any) => {
    props.setFormData((prev: any) => {
      return {...prev, ...field}
    })
  }
  return (
    <div className='auth-12-register-step-3 small-width-container mb-1 animate-entry-signup'>
      <div className='auth-12-register-header-text mb-1'>
        <h2 className='mb-0'>Lets Secure your Account.</h2>
        <p className='note-small-text mt-0 mb-1'>The purpose of this form is to ensure the security and protection of the user's account by preventing unauthorized access.</p>
      </div>
      <div className='small-size-password-box'>
        <div className='down-with-small-text mb-3'>
          <TextInput updateValue={setValue} value={props.formData.password} type="password" name="password" placeholder="New Password" label="Password" error={props.error.for} note={props.error.note}/>
          <span>Your password must be 8-20 characters long.</span>
        </div>
        <TextInput updateValue={setValue} value={props.formData.confirm_password} type="password" name="confirm_password" placeholder="New Password" label="Confirm Password" note={props.error.note} error={props.error.for}/>
      </div>
    </div>
  )
}

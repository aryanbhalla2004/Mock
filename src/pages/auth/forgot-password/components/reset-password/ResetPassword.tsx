import React from 'react'
import { MessageBox } from '../../../../../common/components/message-box/MessageBox'
import { TextInput } from '../../../../../common/components/input/Input'
import { PrimaryButton } from '../../../../../common/components/button/Button'


interface messageType {
  message: string,
  type: string,
  header: string,
}

interface prop {
  userEmail: string
  message: messageType,
  formSubmitted: boolean
  onSubmit: (e: React.BaseSyntheticEvent) => void,
  error: any
}


export const ResetPassword = (props: prop) => {

  
  return (
    <form className='login-form-auth-12' onSubmit={props.onSubmit}>
      <div className='content-sizing login-form-auth-12-container auth-12-register-step-2  animate-entry-signup'>
        <div className='auth-12-login-header-text'>
          <h2>Confirm Reset Password</h2>
          <h4>Please Check the inbox of <span className='selective-box'>{props.userEmail}</span> for a 6-digit verification code. More further instruction will be included in the email.</h4>
        </div>
        {props.message.type && <MessageBox type={props.message.type} header={props.message.header} message={props.message.message}/>}
        <TextInput type="number" name="code" placeholder="6-Digit Code" label="Verification Code *" error={props.error.codeError} note={props.error.code}/>
        <TextInput type="password" name="password" placeholder="New Password" label="New Password" error={props.error.passwordError} note={props.error.password}/>
        <TextInput type="password" name="rePassword" placeholder="Confirm New Password" label="Confirm New Password" error={props.error.rePasswordError} note={props.error.rePassword}/>
        <PrimaryButton name="Reset Password" type="submit" width="full" loading={props.formSubmitted}/>
      </div>
    </form>
  )
}

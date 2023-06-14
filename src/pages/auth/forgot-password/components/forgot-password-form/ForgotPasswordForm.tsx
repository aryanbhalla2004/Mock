import React from 'react'
import { PrimaryButton, TextLink } from '../../../../../common/components/button/Button'
import { TextInput } from '../../../../../common/components/input/Input'
import { MessageBox } from '../../../../../common/components/message-box/MessageBox'

interface messageType {
  message: string,
  type: string,
  header: string,
}

interface prop {
  message: messageType,
  formSubmitted: boolean
  onSubmit: (e: React.BaseSyntheticEvent) => void,
  error: any
}

export const ForgotPasswordForm = (props: prop) => {
  return (
    <form className='login-form-auth-12' onSubmit={props.onSubmit}>
      <div className='content-sizing login-form-auth-12-container auth-12-register-step-2  animate-entry-signup'>
        <div className='auth-12-login-header-text'>
          <h2>Forgot password?</h2>
          <h4>If you can't access your account or have forgotten your password, don't get upset. Our "forgotten password" feature can help. Click Reset Password and wait for further information, then enter the email address linked to the account you wish to reset the password for.</h4>
        </div>
        {props.message.type && <MessageBox type={props.message.type} header={props.message.header} message={props.message.message}/>}
        <TextInput type="email" name="email" placeholder="mail@example.com" label="Email Address" error={props.error.emailError} note={props.error.email}/>
        <PrimaryButton name="Forgot Password" type="submit" width="full" loading={props.formSubmitted}/>
      </div>
    </form>
  )
}

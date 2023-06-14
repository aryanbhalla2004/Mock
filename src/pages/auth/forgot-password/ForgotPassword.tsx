import React, { useContext, useState } from 'react'
import { AccountContext } from '../../../setup/contexts/AuthContext';
import { ForgotPasswordForm } from './components/forgot-password-form/ForgotPasswordForm';
import { ResetPassword } from './components/reset-password/ResetPassword';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface messageType {
  message: string,
  type: string,
  header: string,
}

const INITIAL_ERROR = {
  emailError: "",
  email: "",
}

const INITIAL_CODE_ERROR = {
  codeError: "",
  code: "",
  passwordError: "",
  password: "",
  rePasswordError: "",
  rePassword: "",
}

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const {forgotPassword, createNewPassword} = useContext(AccountContext);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [confirmReset, setConfirmReset] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<any>(INITIAL_ERROR);
  const [errorCode, setErrorCode] = useState<any>(INITIAL_CODE_ERROR);
  const [message, setMessage] = useState<messageType>({
    message: "",
    type: "",
    header: "",
  });
  
  const onForgotPassword = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    setErrorEmail(INITIAL_ERROR);
    setFormSubmitted(true);
    
    setMessage({message: "", type: "", header: ""});
    const data = new FormData(e.target);
    const email = Object.fromEntries(data.entries()).email;
    if(email !== "") {
      try {
        await forgotPassword(email);
        setConfirmReset(true);
        setUserEmail(email.toString());
        toast.success(`Email sent successfully to ${email}`, {toastId: "EMAILSENT"});
        e.target.reset();
      } catch (e: any) {  
        if(e.code === "UserNotFoundException") {
          setErrorEmail({ emailError: "email", email: "Invalid Email Address"});
        }

        if(e.code === "LimitExceededException") {
          setMessage({message: e.message, type: "WARNING", header: "Limit Exceeded Warning"});
        }

        if(e.code === "NotAuthorizedException") {
          setMessage({message: e.message, type: "ERROR", header: "Not Authorized Exception"});
        }

      }
    } else {
      setErrorEmail({ emailError: "email", email: "Invalid Email Address",});
    }
    
    setFormSubmitted(false);
  }

  const onResetPassword = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    setErrorCode(INITIAL_CODE_ERROR);
    setFormSubmitted(true);
    setMessage({message: '', type: '', header: ''});
    const data = new FormData(e.target);
    const code = Object.fromEntries(data.entries()).code;
    const password = Object.fromEntries(data.entries()).password;
    const rePassword = Object.fromEntries(data.entries()).rePassword;

    if(code != "" && password != "" && rePassword != "") {
      if(password === rePassword) {
        try {
          const response = await createNewPassword({username: userEmail, code, password});
          if(response === "SUCCESS") {
            navigate('/auth');
            toast.success(`Password for your account has changed successfully. Please login with your new password`, {toastId: "PASSWORD_CHANGE_MESSAGE"});
          }
          console.log(response);
        } catch (e: any) {

          if(e.code === "LimitExceededException") {
            setMessage({message: e.message, type: "ERROR", header: "Limit Exceeded"});
          }
  
          if(e.code === "ExpiredCodeException") {
            setMessage({message: "The code that you entered was expired. Click the resend button to get a new code", type: "WARNING", header: "Expired Code Exception"});
          }

          if(e.code === "CodeMismatchException") {
            setErrorCode((prev:any) => {
              return {...prev, codeError: "code", code: e.message}
            });
          }
  
  
          if(e.code === "InvalidPasswordException") {
            setErrorCode((prev:any) => {
              return {...prev, passwordError: "password", password: e.message}
            });

            setErrorCode((prev:any) => {
              return {...prev, rePasswordError: "rePassword", rePassword: e.message}
            });
          }
          
          console.log(e);
        }
      } else {
        setErrorCode((prev:any) => {
          return {...prev, rePasswordError: "rePassword", rePassword: "Password doesn't match", passwordError: "password", password: "Password doesn't match"}
        });
      }
    } else {
      if(code === "") {
        setErrorCode((prev:any) => {
          return {...prev, codeError: "code", code: "Invalid Code"}
        });

      }

      if(password === "") {
        setErrorCode((prev:any) => {
          return {...prev, passwordError: "password", password: "Invalid New password"}
        });
      }

      if(password === "") {
        setErrorCode((prev:any) => {
          return {...prev, rePasswordError: "rePassword", rePassword: "Invalid Confirm Password"}
        });
      }
    }

    setFormSubmitted(false);
  }
  

  // const timeRun = async () => {
  //   setTimeRunning(true);
  //   setDefaultTime(prev => prev + 30);
  //   try {
  //     await forgotPassword(props.userEmail);
  //     toast.success(`Email sent successfully to ${props.userEmail}`, {toastId: "EMAIL_SENT"});
  //   } catch (e: any) {
  //     if(e.code === 'LimitExceededException') {
  //       setDefaultTime(prev => prev + 300);
  //     }
  //     toast.error(e.message, {toastId: "ERROR_RESEND_EMAIL_TOAST"});
  //   }
  // }

  return (
    <>
      {!confirmReset && <ForgotPasswordForm  onSubmit={onForgotPassword}  message={message} error={errorEmail} formSubmitted={formSubmitted}/>}
      {confirmReset && <ResetPassword error={errorCode} onSubmit={onResetPassword} message={message} userEmail={userEmail} formSubmitted={formSubmitted}/>}
    </>
  )
}

import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TextInput } from '../../../common/components/input/Input';
import { CountDown } from '../../../common/components/count-down/CountDown';
import { PrimaryButton } from '../../../common/components/button/Button';
import OtpInput from 'react-otp-input';
import "./style.css";

interface currentUserInfo{
  userConfirmed: boolean, 
  userSub?: string,
  username: string,
  from: string
}

export const ActivateAccount = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [timeRunning, setTimeRunning] = useState<boolean>(false);
  const [defaultTime, setDefaultTime] = useState<number>(30);
  const [currentUserInfo, setCurrentUserInfo] = useState<currentUserInfo>();
  const [otp, setOtp] = useState('');

  useEffect(() => {
    const onLoad = async () => {
      if(location.state != null) {
        setCurrentUserInfo(location.state);
        if(location.state?.from === "LOGIN") {
          try {
            //await sendMFACode(location.state?.username);
            //toast.success(`Email sent successfully to ${location.state?.username}`, {toastId: "EMAIL_SENT"});
          } catch (e: any) {
            // setMessage((prev) => {
            //   return {...prev, form: e.message, type: "ERROR", header: "Limit Exceeded"}
            // });
          }
        } else {
          // setMessage((prev) => {
          //   return {...prev, form: `Verification code was sent successfully to ${location.state?.username}`, type: "SUCCESS", header: "Email Sent"}
          // });
        }
  
        
      } else {
        navigate("/");
      }
    };

    onLoad();
  }, []);

  const timeRun = async () => {
    setTimeRunning(true);
    setDefaultTime(prev => prev + 30);
    try {
      //await sendMFACode(currentUserInfo?.username);
      //toast.success(`Email sent successfully to ${currentUserInfo?.username}`, {toastId: "EMAIL_SENT"});
    } catch (e: any) {
      if(e.code === 'LimitExceededException') {
        setDefaultTime(prev => prev + 300);
      }
      //toast.error(e.message, {toastId: "ERROR_RESEND_EMAIL_TOAST"});
    }
  }

  const confirmCode = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    // setFormSubmitted(true);
    // setError(INITIAL_ERROR);
    // const data = new FormData(e.target);
    // const code = Object.fromEntries(data.entries()).code;
    // setMessage({ code: '', form: '', type: '', header: ''});
    // if(code !== "") {
    //   try {
    //     const response = await verifyMFACode(currentUserInfo?.username, code);
    //     if(response === 'SUCCESS') {
    //       toast.success(`Your account ${currentUserInfo?.username} was activated successfully`, {toastId: "EMAIL_SENT"});
    //       //! Select Account Types
    //       navigate('/auth');
    //       //navigate("/auth/sign-up/account-setup", {state: {name: currentUserInfo?.username, response: "SUCCESS"}});
    //     }
    //   } catch (e: any) {
    //     if(e.code === "CodeMismatchException") {
    //       setError({for: "code", note: e.message});
    //       // setMessage((prev) => {
    //       //   return {...prev, code: }
    //       // });
    //     }

    //     if(e.code === "ExpiredCodeException") {
    //       setMessage((prev) => {
    //         return {...prev, form: `The code that you entered was expired. Click the resend button to get a new code`, type: "WARNING", header: "Code Expired"}
    //       });
    //     }

    //     if(e.code === "LimitExceededException") {
    //       setMessage((prev) => {
    //         return {...prev, form: e.message, type: "ERROR", header: "Limit Exceeded"}
    //       });
    //     }

    //     if(e.code === "NotAuthorizedException") {
    //       navigate("/");
    //     }
    //     console.log(e);
    //   }
    // }

    // setFormSubmitted(false);
  }

  return (
    <div className='main-form-container-signup'>
       <div className='content-sizing flex-below'>
          <div className='auth-12-register-step-agreement-opt animate-entry-signup'>
            <div className='auth-12-register-header-text'>
              <h2>Enter Verification Code</h2>
              <p className="note-small-text mt-0 mb-1 smaller-text">We have just sent a verification code to {currentUserInfo?.username}. If you can't find it, check your junk/spam folder.</p>
            </div>
            <form onSubmit={confirmCode}>
              <div className='mb-3'>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                containerStyle="otp-container"
                inputStyle="otp-code-field"
                renderInput={(props) => <input  {...props} />}
              />
              </div>
              <p className="text-2 text-dark form-label resend-link-otp">Didn't receive the Code? {!timeRunning ? <Link className="text-link" to="" onClick={timeRun}>Resend Code</Link> : <CountDown seconds={defaultTime} setTimeRunning={setTimeRunning}/>}</p>
              <PrimaryButton name="Verify"/>
            </form>
          </div>
       </div>
    </div>
  )
}

import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TextInput } from '../../../common/components/input/Input';
import { CountDown } from '../../../common/components/count-down/CountDown';
import { PrimaryButton } from '../../../common/components/button/Button';
import OtpInput from 'react-otp-input';
import "./style.css";
import { toast } from 'react-toastify';
import { AccountContext } from '../../../setup/contexts/AuthContext';
import { MessageBox } from '../../../common/components/message-box/MessageBox';

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
  const {sendMFACode, verifyMFACode} = useContext(AccountContext);
  const [currentUserInfo, setCurrentUserInfo] = useState<currentUserInfo>();
  const [otp, setOtp] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState<any>(null);
  const [message, setMessage] = useState({
    message: "",
    type: "",
    header: "",
  });

  useEffect(() => {
    setError(null);
  }, [otp]);

  useEffect(() => {
    const onLoad = async () => {
      if(location.state != null) {
        setCurrentUserInfo(location.state);
        if(location.state?.from === "LOGIN") {
          try {
            await sendMFACode(location.state?.username);
            toast.success(`Email sent successfully to ${location.state?.username}`, {toastId: "EMAIL_SENT"});
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
      await sendMFACode(currentUserInfo?.username);
      toast.success(`Email sent successfully to ${currentUserInfo?.username}`, {toastId: "EMAIL_SENT"});
    } catch (e: any) {
      if(e.code === 'LimitExceededException') {
        setDefaultTime(prev => prev + 300);
      }
      toast.error(e.message, {toastId: "ERROR_RESEND_EMAIL_TOAST"});
    }
  }

  const confirmCode = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setError(null);
    setMessage({message: "", type: "", header: ""});
    if(otp !== "") {
      try {
        const response = await verifyMFACode(currentUserInfo?.username, otp);
        if(response === 'SUCCESS') {
          toast.success(`Your account ${currentUserInfo?.username} was activated successfully. Please login in with your credentials.`, {toastId: "EMAIL_SENT"});
          navigate('/auth');
        }
      } catch (e: any) {
        if(e.code === "CodeMismatchException") {
          setMessage({message: e.message, type: "ERROR", header: "Invalid Verification Code"});
        }

        if(e.code === "ExpiredCodeException") {
          setMessage({message: `The code that you entered was expired. Click the resend button to get a new code`, type: "ERROR", header: "Code Expired"});
        }

        if(e.code === "LimitExceededException") {
          setMessage({message: e.message, type: "WARNING", header: "Limit Exceeded"});
        }

        if(e.code === "NotAuthorizedException") {
          navigate("/");
        }

        console.log(e);
      }
    } else {
      setError("Verification field is empty.");
    }

    setFormSubmitted(false);
  }

  return (
    <div className='main-form-container-signup'>
       <div className='content-sizing flex-below'>
          <div className='auth-12-register-step-agreement-opt animate-entry-signup'>
            <div className='auth-12-register-header-text'>
              <h2>Enter Verification Code</h2>
              <p className="note-small-text mt-0 mb-1 smaller-text">We have just sent a verification code to {currentUserInfo?.username}. If you can't find it, check your junk/spam folder.</p>
            </div>
            {message.type && <MessageBox type={message.type} header={message.header} message={message.message}/>}
            <form onSubmit={confirmCode} className='opt-form'>
              <div className='mb-5 otp-container-of-wrapper'>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  containerStyle="otp-container"
                  inputStyle={error === null ? "otp-code-field" : "otp-code-field error-field"}
                  renderInput={(props) => <input name="code" {...props} />}
                />
                <span className={"note-small-text error-text"}>{error != null && <><i className="bi bi-exclamation-triangle-fill"></i> {error}</>}</span>
              </div>
              
              <PrimaryButton name="Verify" loading={formSubmitted}/>
              <p className="text-2 text-dark form-label resend-link-otp">Didn't receive the Code? {!timeRunning ? <Link className="text-link" to="" onClick={timeRun}>Resend Code</Link> : <CountDown seconds={defaultTime} setTimeRunning={setTimeRunning}/>}</p>
            </form>
          </div>
       </div>
    </div>
  )
}

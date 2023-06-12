import React, {useState, useContext} from 'react'
import { PrimaryButton, TextLink } from '../../../common/components/button/Button';
import { TextInput } from '../../../common/components/input/Input';
import "./style.css";
import { toast } from 'react-toastify';
import { useNavigate} from 'react-router-dom';
import { AccountContext } from '../../../setup/contexts/AuthContext';

const INITIAL_ERROR = {
  for: "",
  secondFor: "",
  note: ""
}

const SignIn = () => {

  const navigate = useNavigate();
  //const [tempUser, setTempUser] = useState<CognitoUser>();
  const [requiredAttr, setRequiredAttr] = useState<any>();
  const [allowResetPass, setAllowResetPass] = useState<boolean>(false);
  //const [userExist, setUserExist] = useState<existingUser>();
  const {login, completeUserPassword, getSession} = useContext(AccountContext);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<any>(INITIAL_ERROR);
  // const [message, setMessage] = useState<messageType>({
  //   email: "", 
  //   password: "",
  //   form: "",
  //   type: "",
  //   header: "",
  //   outside: ""
  // });
  
  const onSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    setError(INITIAL_ERROR);
    setFormSubmitted(true);
    // setMessage({email: "", password: "", form: "", type: "", header: "", outside: ""});
    const data = new FormData(e.target);
    const email = Object.fromEntries(data.entries()).email;
    const password = Object.fromEntries(data.entries()).password;
    const remember = Object.fromEntries(data.entries()).remember;
    
    if(email != "" && password != "") {

      try {
        const response = await login(email, password);
      //   // if(remember === "on" && response.challengeName !== "NEW_PASSWORD_REQUIRED") {
      //   //   localStorage.setItem("user", JSON.stringify({email, fullName: email}));
      //   // }
        
        if(response.challengeName === "NEW_PASSWORD_REQUIRED") {
          const { requiredAttributes } = response.challengeParam;
          setRequiredAttr(requiredAttributes);
          //setTempUser(response);
          setAllowResetPass(true);
        } else {
          getSession();
          //const userAttributes = await Auth.currentUserInfo();
          //props.setUser({ ...response, attributes: userAttributes.attributes});
          //localStorage.setItem('user', JSON.stringify({ ...response, attributes: userAttributes.attributes}));
          navigate('/');
        }

      } catch (e: any) {
        console.log(e.message);
      //   if(e.code === "UserNotFoundException") {
      //     setError({for: "email", secondFor: "", note: e.message})
      //     // setMessage((prev) => {
      //     //   return {...prev, email: e.message}
      //     // });
      //   }

      //   if(e.code === "NotAuthorizedException") {
      //     setError({for: "email", secondFor: "password", note: e.message})
      //   }

        if(e.code === "UserNotConfirmedException") {
          navigate('/auth/sign-up/activate', {state: {username: email, userConfirmed: false, from: "LOGIN"}});
        }
      //   console.log(e);
      }
    } else {
      console.log("field is empty");
    }

    setFormSubmitted(false);
  }

  return (
    <>
      <form className='login-form-auth-12' onSubmit={onSubmit}>
        <div className='content-sizing login-form-auth-12-container animate-entry-signup'>
          <div className='auth-12-login-header-text'>
            <h2>Employee Portal</h2>
            <h4>Login to View and Manage Your Work Schedule</h4>
          </div>
          <TextInput type="email" name="email" placeholder="mail@example.com" label="Email Address"/>
          <TextInput type="password" name="password" placeholder="Min 8. Characters" label="Password"/>
          <div className='auth-12-check-forgot-link'>
            <div className="checkboxes__item">
              <label className="checkbox style-e">
                <input type="checkbox" name="remember"/>
                <div className="checkbox__checkmark"></div>
                <div className="checkbox__body">Remember Me</div>
              </label>
            </div>
            <TextLink name="Forgot Password?" path={`/auth/forgot-password`}/>
          </div>
          <PrimaryButton name="Sign In" type="submit" width="full"/>
        </div>
      </form>
    </>
  )
}

export default SignIn;

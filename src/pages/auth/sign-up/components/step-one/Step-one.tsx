import React, {useContext, useEffect, useState} from 'react'
import { PrimaryButton } from '../../../../../common/components/button/Button';
import { TextInput } from '../../../../../common/components/input/Input';
import { IEmployeeSignUpForm } from '../../../../../common/interfaces/CommonInterfaces';
import { AccountContext } from '../../../../../setup/contexts/AuthContext';
interface prop {
  nextPage: () => void,
  backPage: () => void,
  formData: IEmployeeSignUpForm | undefined,
  setFormData: (data: IEmployeeSignUpForm | any) => void,
}
const StepOne = (props: prop) => {
  const {login} = useContext(AccountContext);
  const [error, setError] = useState({
    note: "",
    for: "",
  });
  
  const onSubmit = async (event: any) => {
    setError({note: "", for: ""});
    event.preventDefault();
    const data = new FormData(event.target);
    const email = Object.fromEntries(data.entries()).email.toString();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.match(mailformat)) {
      try {
        await login(email, "123");
      } catch(e: any) {
        if(e.code === "UserNotFoundException") {
          props.setFormData((prev: IEmployeeSignUpForm | any) => {
            return {...prev, email: email};
          });

          props.nextPage();
        } else {
          setError({
            note: "Email is already in use",
            for: "email",
          })
        }
      }
    } else {
      setError({
        note: "Invalid Email Address",
        for: "email",
      })
    }
  }
  return (
    <form className='auth-12-register' onSubmit={onSubmit}>
      <div className='auth-12-register-header-text'>
        <h2>Join the <span className='primary-text'>Zoobo</span> crew and get started on an adventure of endless fun!</h2>
      </div>
      <TextInput value={props.formData?.email} type="email" name="email" placeholder="mail@example.com" label="Email Address" note={error.note} error={error.for}/>
      <p>Please ensure that you enter the correct email address for your Zoobo account. This email will serve as the primary means of communication for important updates and information about your account.</p>
      <div className='button-same-level-col'>
        <PrimaryButton name="Next" type="submit" width="full"/>
      </div>
    </form>
  )
}

export default StepOne;


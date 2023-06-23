import React, { FormEvent, useContext, useEffect, useState, useRef } from 'react'
import { isValidPhoneNumber } from 'react-phone-number-input';
import { CreateEmployeeInput} from '../../../API';
import { GhostButton, PrimaryButton } from '../../../common/components/button/Button';
import { IEmployeeSignUpForm } from '../../../common/interfaces/CommonInterfaces';
import { AccountContext } from '../../../setup/contexts/AuthContext';
import { DatabaseContext } from '../../../setup/contexts/dbContext';
import { Review } from './components/review/Review';
import { SetPassword } from './components/set-password/SetPassword';
import StepFour from './components/step-four/Step-four';
import StepOne from './components/step-one/Step-one';
import StepThree from './components/step-three/Step-three';
import StepTwo from './components/step-two/Step-two';
import { useMultistepForm } from './hooks/useMultistepForm';
import { Error } from './interface/Error';
import "./style.css";
import { createEmployee } from '../../../graphql/mutations';
import { useNavigate } from 'react-router-dom';
import { ModualPop } from '../../../common/components/module-pop/ModualPop';
import { FinalStep } from './components/loading-final-form/FinalStep';


const INITIAL_DATA: IEmployeeSignUpForm = {
  fName: "",
  lName: "",
  email: "",
  pNumber: "",
  dob: "",
  password: "",
  confirm_password: "",
};

const INITIAL_ERROR: Error = {
  for: "",
  secondFor: "",
  note: ""
}

const SignUp = () => {

  const [signupFormSubmitted, setSignupFormSubmitted] = useState<boolean>(false);
  const [signupDone, setSignupDone] = useState(false);
  const [paramStorage, setParamStorege] = useState<any>(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IEmployeeSignUpForm>(INITIAL_DATA);
  const [error, setError] = useState<Error>(INITIAL_ERROR);
  const [loading, setLoading] = useState<boolean>(false);
  const {login, register} = useContext(AccountContext);
  const {uploadFile, pushDataUserAPI} = useContext(DatabaseContext);
  const [showModal, setShowModal] = useState<boolean>(false);


  const updateFields = (fields: Partial<IEmployeeSignUpForm>) => {
    setFormData(prev => {
      return {...prev, ...fields}
    })
  }

  const {back, next, step, isFirstStep, isLastStep, isReview, currentStepIndex} = useMultistepForm([
    <StepOne formData={formData} updateFields={updateFields} error={error}/>,
    <StepTwo formData={formData} updateFields={updateFields} setFormData={setFormData} error={error}/>,
    <SetPassword formData={formData} setFormData={setFormData} error={error}/>,
    <Review formData={formData}/>
  ]);


  useEffect(() => {
    setError(INITIAL_ERROR);
  }, [currentStepIndex]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(INITIAL_ERROR);
    if(currentStepIndex === 0) {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(formData.email.match(mailformat)) {
        try {
          await login(formData.email, "123");
        } catch(e: any) {
          if(e.code === "UserNotFoundException") {
            next();
          } else {
            setError({
              for: "email",
              note: "Email Address is Already in use."
            });
          }
        }
      } else {
        setError({
          for: "email",
          note: "Invalid Email Address"
        });
      }
    } else if(currentStepIndex === 1) {
      if(formData.fName != "" && formData.lName != "" &&(formData.fName + " " + formData.lName).match(/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/)) {
        console.log(formData);
        if(formData.pNumber != "" && formData.pNumber != undefined) {
          if(isValidPhoneNumber(formData.pNumber)) {
            if(getAge(formData.dob) >= 16) {
                next();
            } else {
              setError({for: "dob", note: "Your below the age for working. Try Again Later"});
            }
          } else {
            setError({for: "pNumber", note: "Invalid Phone Number"});
          }
        } else {
          setError({for: "pNumber", note: "Please Enter a Phone Number"});
        }
      } else {
        setError({for: "fName", secondFor: "lName", note: "Invalid Name"});
      }
    } else if (currentStepIndex === 2) {
      if(formData.password != "" && formData.confirm_password != "") {
        if(formData.password === formData.confirm_password) {
          if(getPasswordStrength(formData.password)) {
            next();
          } else {
            setError({for: "password",note: "Week password"});
          }
        } else {
          setError({for: "confirm_password", note: "Password doesn't match"});
        }
      } else {
        if(formData.password === "") {
          setError({for: "password",note: "Invalid Password entry."});
        } else {
          setError({for: "confirm_password",note: "Invalid Password entry."});
        }
      }
    } else if (currentStepIndex === 3) {
      next();
      finishSignUp();
    } 
    setLoading(false);
  }

  const getPasswordStrength = (password: string) => {
    let containsUpper = false;
    let containsLower = false;
    let containsDigit = false;
    if(/[A-Z]/.test(password)) {
      containsUpper = true;
    }
    if(/[a-z]/.test(password)) {
      containsLower = true;
    }

    if(/\d/.test(password)) {
      containsDigit = true;
    }
    
    return containsUpper && containsLower && containsDigit;
  }

  const getAge = (date: string) => {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  //! Avability Function
  // const onSubmitAddInterval = (e: any) => {
  //   e.preventDefault();
  //   const data = new FormData(e.target);
  //   const email = Object.fromEntries(data.entries());
  //   const start = Object.fromEntries(data.entries()).start;
  //   const end = Object.fromEntries(data.entries()).end;
  //   const target = Object.fromEntries(data.entries()).targetDay.toString();
  //   if(Object.entries(email).length == 3) {
  //     if(target === "All Days") {
  //       Object.entries(formData.availability).map((item) => {
  //         setFormData((prev: any) => {
  //           return {...prev, availability: {...prev.availability, [item[0]]: [{start: start, end: end}]}}
  //         });
  //       });
  //     } else {
  //       setFormData((prev: any) => {
  //         return {...prev, availability: {...prev.availability, [target]: [{start: start, end: end}]}}
  //       });
  //     }
  //   } else {
  //     const start1 = Object.fromEntries(data.entries()).start1;
  //     const end1 = Object.fromEntries(data.entries()).end1;
  //     if(target === "All Days") {
  //       Object.entries(formData.availability).map((item) => {
  //         setFormData((prev: any) => {
  //           return {...prev, availability: {...prev.availability, [item[0]]: [{start: start, end: end}, {start: start1, end: end1}]}}
  //         });
  //       });
  //     } else {
  //       setFormData((prev: any) => {
  //         return {...prev, availability: {...prev.availability, [target]: [{start: start, end: end}, {start: start1, end: end1}]}}
  //       });
  //     }
  //   }
  //   console.log(Object.entries(email).length);
  //   setShowModal(false);
  // }



  const finishSignUp = async () => {
    setSignupFormSubmitted(true);
    const userAttributes = {email: formData.email, password: formData.password, fName: formData.fName, lName: formData.lName, phone: formData.pNumber, dob: formData.dob};
    try {
      const user = await register(userAttributes);
      //! Now Push the Uploaded files to the database
      const redirectPassedState = {
        userConfirmed: user.userConfirmed, 
        userSub: user.userSub,
        username: user.user.username,
        from: "SIGNUP"
      }
      
      // //? Activate
      if(user != undefined) {
        setParamStorege(redirectPassedState);
        setSignupDone(true);
      }
      // const fileOneExtension = formData.proof.addressDocument?.name.split('.').pop();
      // const fileTwoExtension = formData.proof.mainDocument?.name.split('.').pop();
      // const url1 = await uploadFile(`${formData.proof.addressType}.${fileOneExtension}`, formData.proof.addressDocument, "public" );
      // const url2 = await uploadFile(`${formData.proof.mainType}.${fileTwoExtension}`, formData.proof.mainDocument, "protected" );
      
      //console.log(uploadDataEmployee);
      //console.log(employeeProfile);
      //! Then create a employee
    } catch(e: any) {
      setSignupFormSubmitted(false);
      console.log(e);
    }
  }

  const navaiteToActivate = () => {
    console.log('sds');
    navigate("/auth/sign-up/activate", {state: paramStorage});
  }

  return (
    <>
      {/* <form id="getUserHours" onSubmit={onSubmitAddInterval}  /> */}
      <form onSubmit={onSubmit} className="main-form-container-signup">
        <div className='content-sizing flex-below'>
          {step}
          <div className='button-same-level-col'>
            <PrimaryButton loading={loading} name={isReview ? "Review" : isLastStep ? "Finish" :  "Next"} type="submit" width="full"/>
            {!isFirstStep && <GhostButton type="button" onClick={back} name="Back" width="full" />}
          </div>
        </div>
      </form>

      <ModualPop show={signupFormSubmitted} child={<FinalStep activateFunction={navaiteToActivate} isLoading={!signupDone}/>}/>
    </>
  )
}


export default SignUp;
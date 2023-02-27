import { AddressAutofill } from '@mapbox/search-js-react';
import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { isValidPhoneNumber } from 'react-phone-number-input';
import { GhostButton, PrimaryButton } from '../../../common/components/button/Button';
import { IEmployeeSignUpForm } from '../../../common/interfaces/CommonInterfaces';
import { AccountContext } from '../../../setup/contexts/AuthContext';
import { SetPassword } from './components/set-password/SetPassword';
import { StepFive } from './components/step-five/Step-five';
import StepFour from './components/step-four/Step-four';
import StepOne from './components/step-one/Step-one';
import { StepSeven } from './components/step-seven/Step-seven';
import { StepSix } from './components/step-six/Step-six';
import StepThree from './components/step-three/Step-three';
import StepTwo from './components/step-two/Step-two';
import { useMultistepForm } from './hooks/useMultistepForm';
import { Error } from './interface/Error';
import "./style.css";

const INITIAL_DATA: IEmployeeSignUpForm = {
  fName: "",
  lName: "",
  email: "",
  pNumber: "",
  dob: "",
  password: "",
  confirm_password: "",
  address: {
    address: "",
    unit: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  },
  availability: {
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  },
  WorkingStatus: "",
  verified: false,
  proof: {
    addressType: "",
    addressDocument: null,
    mainType: "",
    mainDocument: null,
  }

};

const INITIAL_ERROR: Error = {
  for: "",
  secondFor: "",
  note: ""
}

const SignUp = () => {
  const [formData, setFormData] = useState<IEmployeeSignUpForm>(INITIAL_DATA);
  const [error, setError] = useState<Error>(INITIAL_ERROR);
  const [loading, setLoading] = useState<boolean>(false);
  const {login} = useContext(AccountContext);
  const [showModal, setShowModal] = useState(false);

  const updateFields = (fields: Partial<IEmployeeSignUpForm>) => {
    setFormData(prev => {
      return {...prev, ...fields}
    })
  }

  const {back, next, step, isFirstStep, isLastStep, currentStepIndex} = useMultistepForm([
    <StepOne formData={formData} updateFields={updateFields} error={error}/>,
    <StepTwo formData={formData} updateFields={updateFields} setFormData={setFormData} error={error}/>,
    <StepThree formData={formData} setFormData={setFormData} error={error}/>,
    <SetPassword formData={formData} setFormData={setFormData} error={error}/>,
    <StepFour formData={formData} updateFields={updateFields} setFormData={setFormData} showModal={showModal} setShowModal={setShowModal}/>,
    <StepFive formData={formData} setFormData={setFormData} error={error}/>,
    <StepSix formData={formData} setFormData={setFormData} error={error}/>,
    <StepSeven formData={formData} setFormData={setFormData}/>
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
    } else if(currentStepIndex === 2) {
      if(formData.address.address != "") {
        if(formData.address.city != "") {
          if(formData.address.state != "") {
            if(formData.address.country != "") {
              if(formData.address.postalCode != "") {
                next();
              } else {
                setError({for: "postalCode", note: "Invalid Postal Code"});
              }
            } else {
              setError({for: "country", note: "Invalid Country"});
            }
           } else {
            setError({for: "state", note: "Invalid State/Province"});
          }
        } else {
          setError({for: "city", note: "Invalid City"});
        }
      } else {
        setError({for: "address", note: "Invalid Address"});
      }
      
    } else if (currentStepIndex === 3) {
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
    } else if (currentStepIndex === 4) {
      //! Shifts do checks here SAINI
      next();
    } else if (currentStepIndex === 5) {
      if(formData.WorkingStatus != "") {
        next();
      } else {
        setError({for: "WorkingStatus", note: "Please make a selection before pressing next."});
      }
    } else if (currentStepIndex === 6) {
      if(formData.proof.addressType !== "" && formData.proof.mainType !== "") {
        if(formData.proof.addressDocument != null && formData.proof.mainDocument != null) {
          next();
        } else {
          setError({for: "ProofUpload", note: "Unable to proceed. No document has been upload. Please upload a valid document type and try again."});
        }
      } else {
        setError({for: "ProofUpload", note: "Unable to proceed. No document type has been selected for upload. Please select a valid document type and try again."});
      }
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

  const onSubmitAddInterval = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = Object.fromEntries(data.entries());
    const start = Object.fromEntries(data.entries()).start;
    const end = Object.fromEntries(data.entries()).end;
    const target = Object.fromEntries(data.entries()).targetDay.toString();
    if(Object.entries(email).length == 3) {
      if(target === "All Days") {
        Object.entries(formData.availability).map((item) => {
          setFormData((prev: any) => {
            return {...prev, availability: {...prev.availability, [item[0]]: [{start: start, end: end}]}}
          });
        });
      } else {
        setFormData((prev: any) => {
          return {...prev, availability: {...prev.availability, [target]: [{start: start, end: end}]}}
        });
      }
    } else {
      const start1 = Object.fromEntries(data.entries()).start1;
      const end1 = Object.fromEntries(data.entries()).end1;
      if(target === "All Days") {
        Object.entries(formData.availability).map((item) => {
          setFormData((prev: any) => {
            return {...prev, availability: {...prev.availability, [item[0]]: [{start: start, end: end}, {start: start1, end: end1}]}}
          });
        });
      } else {
        setFormData((prev: any) => {
          return {...prev, availability: {...prev.availability, [target]: [{start: start, end: end}, {start: start1, end: end1}]}}
        });
      }
    }
    console.log(Object.entries(email).length);
    setShowModal(false);
  }

  return (
    <>
      <form id="getUserHours" onSubmit={onSubmitAddInterval}  />
      <form onSubmit={onSubmit} className="main-form-container-signup">
        <div className='content-sizing flex-below'>
          {step}
          <div className='button-same-level-col'>
            <PrimaryButton loading={loading} name={isLastStep ? "Finish" : "Next"} type="submit" width="full"/>
            {!isFirstStep && <GhostButton type="button" onClick={back} name="Back" width="full" />}
          </div>
        </div>
      </form>
    </>
  )
}


export default SignUp;
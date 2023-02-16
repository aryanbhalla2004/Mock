import React, {useEffect, useState} from 'react'
import { GhostButton, PrimaryButton } from '../../../../../common/components/button/Button';
import { PhoneInputCustom, TextInput } from '../../../../../common/components/input/Input';
import { IEmployeeSignUpForm } from '../../../../../common/interfaces/CommonInterfaces';
import { isValidPhoneNumber } from 'react-phone-number-input'
interface prop {
  nextPage: () => void,
  backPage: () => void,
  formData: IEmployeeSignUpForm | undefined,
  setFormData: (data: IEmployeeSignUpForm | any) => void,
}
const StepTwo = (props: prop) => {
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const [error, setError] = useState({
    for: "",
    forSecond: "",
    note: "",
  });

  useEffect(() => {
    setPhoneNumber(props.formData?.pNumber.toString());
  }, []);
  const onSubmit = (e: any) => {
    e.preventDefault();
    setError({for: "", forSecond: "", note: "",});
    const data = new FormData(e.target);
    const fName = Object.fromEntries(data.entries()).fName.toString();
    const lName = Object.fromEntries(data.entries()).lName.toString();
    const dob = Object.fromEntries(data.entries()).dob.toString();
    if(fName != "" && lName != "" &&(fName + " " + lName).match(/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/)) {
      if(phoneNumber != null) {
        if(isValidPhoneNumber(phoneNumber)) {
            if(getAge(dob) >= 16) {
              props.setFormData((prev: IEmployeeSignUpForm | any) => {
                return {...prev, fName: fName, lName: lName, pNumber: phoneNumber, dob: dob};
              });
              props.nextPage();
            } else {
              setError({for: "dob", forSecond: "", note: "Please Enter a Valid Birthdate",});
            }
        } else {
          setError({for: "pNumber", forSecond: "", note: "Invalid Phone Number",});
        }
      } else {
        setError({for: "pNumber", forSecond: "", note: "Phone Number is Empty",});
      }
    } else {
      setError({for: "fName", forSecond: "lName", note: "Invalid Name"});
    }
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

  const runme = () => {
    props.backPage()
  }
  return (
    <form className='auth-12-register-step-2' onSubmit={onSubmit}>
      <div className='auth-12-register-header-text header-flex-with-icon mb-1'>
        <h2>Give us a moment to learn more about you by providing us with some personal information.</h2>
      </div>
      <div className='col-2-form-register mb-3'>
        <TextInput value={props.formData?.fName} type="text" name="fName" placeholder="John" label="First Name" error={error.for}/>
        <TextInput value={props.formData?.lName} type="text" name="lName" placeholder="Smith" label="Last Name" error={error.forSecond}/>
      </div>
      <p className='note-small-text mt-0 mb-1'>Please only use the names listed in our legal documentation.</p>
      <PhoneInputCustom type="text" label="Phone Number" value={phoneNumber} note={error.note} error={error.for} setValue={setPhoneNumber} placeholder='+1 (XXX)-XXX-XXXX' name="pNumber"/>
      <TextInput type="date" name="dob" placeholder="" label="Date of Birth" note={error.note} error={error.for}/>
      
      <div className='button-same-level-col'>
        <PrimaryButton name="Next" type="submit" width="full"/>
        <GhostButton name="Back" onClick={props.backPage} type="button" width="full" />
      </div>
     </form>   
  )
}

export default StepTwo;
import { PhoneInputCustom, TextInput } from '../../../../../common/components/input/Input';
import { IEmployeeSignUpForm } from '../../../../../common/interfaces/CommonInterfaces';
import { Error } from '../../interface/Error';

interface prop {
  formData: IEmployeeSignUpForm,
  setFormData: (fields: any) => void,
  updateFields: (fields: Partial<IEmployeeSignUpForm>) => void,
  error: Error
}

const StepTwo = (props: prop) => {
  const getInputPhoneNumber = (field: any) => {
    if(field.pNumber != undefined) {
      props.setFormData((prev: any) => {
        return {...prev, ...field}
      });
    }
    
  }
  return (
    <div className='auth-12-register-step-2 animate-entry-signup'>
      <div className='auth-12-register-header-text header-flex-with-icon mb-1'>
        <h2>Give us a moment to learn more about you by providing us with some personal information.</h2>
      </div>
      <div className='col-2-form-register mb-3'>
        <TextInput updateValue={props.updateFields} value={props.formData.fName} type="text" name="fName" placeholder="John" label="First Name" error={props.error.for} note={props.error.note}/>
        <TextInput updateValue={props.updateFields} value={props.formData.lName} type="text" name="lName" placeholder="Smith" label="Last Name" error={props.error.secondFor}  note={props.error.note}/>
      </div>
      <p className='note-small-text mt-0 mb-1'>Please only use the names listed in our legal documentation.</p>
      <PhoneInputCustom value={props.formData.pNumber != undefined && props.formData.pNumber} updateValue={getInputPhoneNumber} type="text" label="Phone Number" note={props.error.note} error={props.error.for} placeholder='+1 (XXX)-XXX-XXXX' name="pNumber"/>
      <TextInput value={props.formData.dob} updateValue={props.updateFields} type="date" name="dob" placeholder="" label="Date of Birth" note={props.error.note} error={props.error.for}/>
   </div>   
  )
}

export default StepTwo;
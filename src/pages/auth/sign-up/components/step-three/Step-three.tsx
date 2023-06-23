import { AddressAutofill } from '@mapbox/search-js-react'
import { TextInput } from '../../../../../common/components/input/Input';
import { IEmployeeSignUpForm } from '../../../../../common/interfaces/CommonInterfaces';
import { Error } from '../../interface/Error';

interface prop {
  formData: IEmployeeSignUpForm,
  setFormData: (fields: any) => void,
  error: Error
}

const StepThree = (props: prop) => {
  const inputValue = (field: any) => {
    props.setFormData((prev: any) => {
      return {...prev, address: {...prev.address, ...field}}
    });
  }
  return (
    <h1>sds</h1>
    // <div className='auth-12-register-step-3 animate-entry-signup'>
    //   <div className='auth-12-register-header-text'>
    //     <h2>The address you provide will assist us in locating jobs around you.</h2>
    //     <p className='note-small-text mt-0 mb-1'>Please make sure to enter your valid address. As your address will be matched with the documents you upload</p>
    //   </div>
    //   <div className='employee-address-section-box'>
    //     <button className="btn-general primary-button"><i className="bi bi-geo-alt"></i> Use My Current Location</button>
    //     <h1><div className='line-inside-text'></div>OR<div className='line-inside-text'></div></h1>
    //     <div className='address-form-signup-container'>
    //       <div className="items2-1-big-1-small">
    //         <AddressAutofill accessToken="pk.eyJ1IjoiYXJ5YW5iaGFsbGEiLCJhIjoiY2ttbWMxYjN0MG4zNzJ2b2RzenNtNHloeCJ9.D28HxdUCUpf7YpvsQZ26AQ">
    //           <TextInput value={props.formData.address.address} updateValue={inputValue} type="text" autoComplete="address-line1" name="address" placeholder="123 Street Rd 12345 USA" label="Your Address" error={props.error.for} note={props.error.note}/>
    //         </AddressAutofill>
    //         <TextInput value={props.formData.address.postalCode} updateValue={inputValue} name="postalCode" placeholder="Postcode" type="text" autoComplete="postal-code" label="Postal Code" error={props.error.for} note={props.error.note}/>
    //       </div>
    //       <div className='col-2-form-register mb-1'>
    //         <TextInput value={props.formData.address.city} updateValue={inputValue} name="city" placeholder="City" type="text" autoComplete="address-level2" label="City" error={props.error.for} note={props.error.note}/>
    //         <TextInput value={props.formData.address.state} updateValue={inputValue} name="state" placeholder="State" type="text" autoComplete="address-level1" label="State / Province" error={props.error.for} note={props.error.note}/>
    //         <div className='contry-code-captial'>
    //           <TextInput value={props.formData.address.country} updateValue={inputValue} name="country" placeholder="Country" type="text" autoComplete="country" label="Country" error={props.error.for} note={props.error.note}/>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>   
  )
}

export default StepThree;
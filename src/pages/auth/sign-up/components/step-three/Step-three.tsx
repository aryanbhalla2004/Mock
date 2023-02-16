import { AddressAutofill } from '@mapbox/search-js-react'
import React from 'react'
import { GhostButton, PrimaryButton } from '../../../../../common/components/button/Button'
import { TextInput } from '../../../../../common/components/input/Input'
import { IEmployeeSignUpForm } from '../../../../../common/interfaces/CommonInterfaces'
interface prop {
  nextPage: () => void,
  backPage: () => void,
  formData: IEmployeeSignUpForm | undefined,
  setFormData: (data: IEmployeeSignUpForm) => void,
}
const StepThree = (props: prop) => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    //props.nextPage()
  }
  return (
    <form className='auth-12-register-step-3' onSubmit={onSubmit}>
      <div className='auth-12-register-header-text'>
        <h2>The address you provide will assist us in locating jobs near you.</h2>
      </div>
      <div className="items2-1-big-1-small">
        <AddressAutofill accessToken="pk.eyJ1IjoiYXJ5YW5iaGFsbGEiLCJhIjoiY2ttbWMxYjN0MG4zNzJ2b2RzenNtNHloeCJ9.D28HxdUCUpf7YpvsQZ26AQ">
          <TextInput type="text" autoComplete="address-line1" name="address" placeholder="123 Street Rd 12345 USA" label="Your Address" note="Please provide your current residential address"/>
        </AddressAutofill>
        <TextInput type="text" autoComplete="address-line2" name="apartment" placeholder="Unit 123" label="Unit #"/>
      </div>
      <div className='col-2-form-register mb-1'>
        <TextInput name="city" placeholder="City" type="text" autoComplete="address-level2" label="City"/>
        <TextInput name="state" placeholder="State" type="text" autoComplete="address-level1" label="State / Province"/>
        <TextInput name="country" placeholder="Country" type="text" autoComplete="country" label="Country"/>
        <TextInput name="postcode" placeholder="Postcode" type="text" autoComplete="postal-code" label="Postal Code"/>
      </div>
      <div className='button-same-level-col'>
        <PrimaryButton name="Next" type="submit" width="full"/>
        <GhostButton name="Back" onClick={props.backPage} type="button" width="full" />
      </div>
    </form>   
  )
}

export default StepThree;
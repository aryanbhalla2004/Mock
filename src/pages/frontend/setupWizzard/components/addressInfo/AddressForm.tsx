import { AddressAutofill } from '@mapbox/search-js-react'
import React, { useState } from 'react'
import { TextInput } from '../../../../../common/components/input/Input'
import { GhostButton, PrimaryButton } from '../../../../../common/components/button/Button'

interface prop {
  formData: any,
  setFormData: (fields: any) => void,
  next: () => void,
  
}

export const AddressForm = (props: prop) => {
  const [error, setError] = useState<any>("");
  
  // const inputValue = (field: any) => {
  //   props.setFormData((prev: any) => {
  //     return {...prev, address: {...prev.address, ...field}}
  //   });
  // } 
  
  const submit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    setError("");
    // setFormSubmitted(true);
    // setMessage({message: "", type: "", header: ""});
    const data = new FormData(e.target);
    const address = Object.fromEntries(data.entries()).address;
    const city = Object.fromEntries(data.entries()).city;
    const country = Object.fromEntries(data.entries()).country;
    const postalCode = Object.fromEntries(data.entries()).postalCode;
    const province = Object.fromEntries(data.entries()).province;

    if(address != "" && country != "" && postalCode != "" && city != "" && province != "") {
      props.setFormData((prev: any) => {
        return {...prev, address: {address: address, city: city, country: country, postalCode: postalCode, province: province}}
      });
      props.next();
    } else {
      setError("Invalid Address Field, Make sure to fill out all the data");
    }
  }

  return (
    <div className='auth-12-register-step-3 animate-entry-signup'>
      <div className='auth-12-register-header-text'>
        <h2>The address you provide will assist us in locating jobs around you.</h2>
        <p className='note-small-text mt-0 mb-1'>Please make sure to enter your valid address. As your address will be matched with the documents you upload</p>
      </div>
      <form onSubmit={submit}>
        <div className='employee-address-section-box'>
          {/* <button className="btn-general primary-button"><i className="bi bi-geo-alt"></i> Use My Current Location</button>
          <h1><div className='line-inside-text'></div>OR<div className='line-inside-text'></div></h1> */}
          <div className='address-form-signup-container address-form-container-setupWizzared'>
            <div className="items2-1-big-1-small">
              <div className='col-2-fields'>
                <AddressAutofill accessToken="pk.eyJ1IjoiYXJ5YW5iaGFsbGEiLCJhIjoiY2ttbWMxYjN0MG4zNzJ2b2RzenNtNHloeCJ9.D28HxdUCUpf7YpvsQZ26AQ">
                  <TextInput type="text" autoComplete="address-line1" name="address" placeholder="123 Street Rd 12345 USA" label="Your Address" error={""} note={""}/>
                </AddressAutofill>
                <TextInput name="postalCode" placeholder="Postcode" type="text" autoComplete="postal-code" label="Postal Code" error={""} note={""}/>
              </div>
              <div className='col-2-form-register mb-1 flex-box-container'>
                <TextInput name="city" placeholder="City" type="text" autoComplete="address-level2" label="City" error={""} note={""}/>
                <TextInput name="province" placeholder="province" type="text" autoComplete="address-level1" label="State / Province" error={""} note={""}/>
                <div className='contry-code-captial'>
                  <TextInput name="country" placeholder="CA" type="text" autoComplete="country" label="Country" error={""} note={""}/>
                </div>
              </div>
            </div>
          </div>
          { error && <p className="note-small-text error-text"><i className="bi bi-exclamation-triangle-fill"></i> {error}</p>}
        </div>  
      
        <div className='button-action-setup-wizzard'>       
          <PrimaryButton name="Next" type="submit"/>
        </div>
      </form>
    </div>
  )
}

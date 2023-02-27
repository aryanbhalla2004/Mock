import { AddressAutofill } from '@mapbox/search-js-react'
import React, {useState} from 'react'
import { GhostButton, PrimaryButton } from '../../../../../common/components/button/Button'
import { TextInput } from '../../../../../common/components/input/Input'
import { IEmployeeSignUpForm } from '../../../../../common/interfaces/CommonInterfaces';
import { Error } from '../../interface/Error';

interface prop {
  formData: IEmployeeSignUpForm,
  setFormData: (data: any) => void,
  error: Error
}

export const StepFive = (props: prop) => {
  const setFileType = (value: string) => {
    if(value === "WORK") {
      props.setFormData((prev: any) => {
        return {...prev, WorkingStatus: value, proof: {mainType: "Work Permit", addressType: "", mainDocument: null, addressDocument: null}}
      });
    } else {
      props.setFormData((prev: any) => {
        return {...prev, WorkingStatus: value, proof: {mainType: "", addressType: "", mainDocument: null, addressDocument: null}}
      });
    }
  }
  return (
    <div className='auth-12-register-step-3 animate-entry-signup'>
      <div className='auth-12-register-header-text'>
        <h2>Instruction to Select the Appropriate Status.</h2>
        <p className='note-small-text mt-0 mb-1'>Please select the option below that best describes your current status. After making your selection, we may request that you provide supporting documents as evidence of the status you have indicated.</p>
        <ul className='profile-select-tab'>
          <li className={props.formData.WorkingStatus === "CANADIAN" ? "active-selection-proof" : ""} onClick={e => setFileType("CANADIAN")}><i className="bi bi-flag"></i> Canadian citizen or Permanent resident?</li>
          <li className={props.formData.WorkingStatus === "WORK" ? "active-selection-proof" : ""} onClick={e => setFileType("WORK")}><i className="bi bi-person-vcard"></i> In Canada on work permit?</li>
          {props.error.for === "WorkingStatus" && <p className="note-small-text error-text"><i className="bi bi-exclamation-triangle-fill"></i> {props.error.note}</p>}
        </ul>
      </div>
    </div>  
  )
}

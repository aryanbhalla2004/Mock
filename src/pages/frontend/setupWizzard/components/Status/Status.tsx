
import React, {useState} from 'react'
import { GhostButton, PrimaryButton } from '../../../../../common/components/button/Button'
import { TextInput } from '../../../../../common/components/input/Input'
// import { Error } from '../../interface/Error';

interface prop {
  formData: any,
  setFormData: (data: any) => void,
  next: () => void,
}

export const Status = (props: prop) => {
  const [error, setError] = useState<any>("");
  const submit = () => {
    if(props.formData.WorkingStatus != "") {
      props.next();
    } else {
      setError("Invalid Selection, Make a selection before continuting");
    }
  }

  const setFileType = (value: string) => {
    setError("");
    if(value === "WORKPERMIT") {
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
        <h2>Let's start by selecting a Appropriate Status.</h2>
        <p className='note-small-text mt-0 mb-1'>Please select the option below that best describes your current status. After making your selection, we may request that you provide supporting documents as evidence of the status you have indicated.</p>
        <ul className='profile-select-tab'>
          <li className={props.formData.WorkingStatus === "RESIDENT" ? "active-selection-proof" : ""} onClick={e => setFileType("RESIDENT")}><i className="bi bi-flag"></i> Canadian citizen or Permanent resident</li>
          <li className={props.formData.WorkingStatus === "WORKPERMIT" ? "active-selection-proof" : ""} onClick={e => setFileType("WORKPERMIT")}><i className="bi bi-person-vcard"></i> In Canada on work permit / student visa</li>
          { error && <p className="note-small-text error-text"><i className="bi bi-exclamation-triangle-fill"></i> {error}</p>}
        </ul>
        <div className='button-action-setup-wizzard'>
          <PrimaryButton name="Next" onClick={submit}/>
        </div>
      </div>
    </div>  
  )
}

import React, { FormEvent } from 'react'
import { TextInput } from '../../../../../common/components/input/Input'
import { IEmployeeSignUpForm } from '../../../../../common/interfaces/CommonInterfaces'
import { Error } from '../../interface/Error'

interface prop {
  formData: IEmployeeSignUpForm,
  setFormData: (data: any) => void,
  error: Error
}

export const StepSix = (props: prop) => {

  const documentType = (e: any) => {
    props.setFormData((prev: any) => {
      return {...prev, proof: {...prev.proof, [e.target.name]: e.target.value}}
    })
  }

  const fileUploadToState = (e: any) => {
    const file = e.target.files[0];
    console.log(e.target.name);
    props.setFormData((prev: any) => {
      return {...prev, proof: {...prev.proof, [e.target.name]: file}}
    });
  }

  const deleteFile = (name: string) => {
    props.setFormData((prev: any) => {
      return {...prev, proof: {...prev.proof, [name]: null}}
    });
  }

  return (
    <div className='auth-12-register-step-3 animate-entry-signup'>
      <div className='auth-12-register-header-text'>
        <h2>Uploading Proof of Identity/Address</h2>
        <p className='note-small-text mt-0 mb-1'>We assure you that your personal information and identity documents will be securely stored and handled with the utmost confidentiality.</p>
        
        {/* <div className='proof-container-sign-up'>
          <ul className='address-proof-document'>
            {props.formData.WorkingStatus === "RESIDENT" && <li>
              <span className='absolute-postion-box'>required</span>
              <i className="bi bi-flag"></i>
              <h3>Citizenship or Permanent Residency</h3>
              <p>Please upload a document as proof of your citizenship or permanent residency.</p>
              {props.formData.proof.mainDocument === null && 
              <>
                <select name='mainType' onChange={documentType} value={props.formData.proof.mainType}>
                  <option value="" selected disabled>Select Document Type</option>
                  <option value="Passport">Passport</option>
                  <option value="Citizenship Certificates">Citizenship Certificates</option>
                  <option value="Birth Certificate">Birth Certificate</option>
                </select>
                {props.formData.proof.mainType != "" && 
                <>
                  <input type="file" accept=".doc,.docx,.pdf" id="fileID" name="mainDocument" className='upload-field-button' onChange={fileUploadToState}/>
                </>
                }
              </>}
              {props.formData.proof.mainDocument !== null && <div className='file-uploaded-conformation new-file-button' onClick={() => deleteFile("mainDocument")}><span><i className="bi bi-check-circle-fill"></i>File Uploaded</span> <i className="bi bi-trash3"></i></div>}
            </li> }

            

            {props.formData.WorkingStatus === "WORKPERMIT" && <li>
              <span className='absolute-postion-box'>required</span>
              <i className="bi bi-person-vcard"></i>
              <h3>Work Permit</h3>
              <p>Please upload a document as proof of your work permit issued by the government.</p>
              {props.formData.proof.mainDocument === null && props.formData.proof.mainType != "" && <>
                <input type="file" accept=".doc,.docx,.pdf" id="fileID" name="mainDocument" className='upload-field-button' onChange={fileUploadToState}/>
              </>}
              {props.formData.proof.mainDocument !== null && <div className='file-uploaded-conformation new-file-button' onClick={() => deleteFile("mainDocument")}><span><i className="bi bi-check-circle-fill"></i>File Uploaded</span> <i className="bi bi-trash3"></i></div>}
            </li> }

            <li>
              <span className='absolute-postion-box'>required</span>
              <i className="bi bi-geo-alt"></i>
              <h3>Address Proof</h3>
              <p>Please provide a document confirming your previously entered address.</p>
              {props.formData.proof.addressDocument === null && 
              <>
              <select name='addressType' onChange={documentType} value={props.formData.proof.addressType}>
                <option value="" selected disabled>Select Document Type</option>
                <option value="Driving Licence">Driving Licence</option>
                <option value="Utility Bill">Utility Bill</option>
                <option value="Bank Statement">Bank Statement</option>
              </select> 
              {props.formData.proof.addressType != "" && 
              <>
                <input type="file" accept=".doc,.docx,.pdf" id="fileID" name="addressDocument" className='upload-field-button' onChange={fileUploadToState}/>
              </>
              }
              </>}
              {props.formData.proof.addressDocument !== null && <div className='file-uploaded-conformation new-file-button' onClick={() => deleteFile("addressDocument")}><span><i className="bi bi-check-circle-fill"></i>File Uploaded</span> <i className="bi bi-trash3"></i></div>}
            </li>
          </ul>
          {props.error.for === "ProofUpload" && <p className="note-small-text error-text mt-1"><i className="bi bi-exclamation-triangle-fill"></i> {props.error.note}</p>}
        </div> */}
      </div>
    </div>
  )
}

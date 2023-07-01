import React, { FormEvent, useState } from 'react'
import { TextInput } from '../../../../../common/components/input/Input'
import { IEmployeeSignUpForm } from '../../../../../common/interfaces/CommonInterfaces'
import { GhostButton, PrimaryButton } from '../../../../../common/components/button/Button'
// import { createScanner } from 'clamav.js';

interface prop {
  formData: any,
  setFormData: (data: any) => void,
  next: () => void,
  back: () => void,
}

export const FileUpload = (props: prop) => {
  const [error, setError] = useState<any>("");

  const documentType = (e: any) => {
    props.setFormData((prev: any) => {
      return {...prev, proof: {...prev.proof, [e.target.name]: e.target.value}}
    })
  }

  const fileUploadToState = (e: any) => {
    const file = e.target.files[0];
     // Initialize ClamAV scanner
    // const clamscan = createScanner(3310, "localhost");
     
    // clamscan.scan(file)
    //   .then((result: ClamScanResults) => {
    //     console.log('Scan result:', result);
       
    //   })
    //   .catch((error: Error) => {
    //     console.error('Error scanning file:', error);
    //   });

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

  const submit = () => {
    if(props.formData.proof.mainDocument != null && props.formData.proof.addressDocument != null) {
      props.next();
    } else {
      setError("Please make sure to upload both documents before continuning")
    }
  }

  return (
    <div className='auth-12-register-step-3 animate-entry-signup'>
      <div className='auth-12-register-header-text'>
        <h2>Uploading Proof of Identity/Address</h2>
        <p className='note-small-text mt-0 mb-1'>We assure you that your personal information and identity documents will be securely stored and handled with the utmost confidentiality.</p>
        
        <div className='proof-container-sign-up align-item-center'>
          <ul className='address-proof-document'>
            <li>
              <span className='absolute-postion-box'>required</span>
              <i className="bi bi-person-vcard"></i>
              <h3>Identification</h3>
              <p>Please upload a document as proof of your driving license or any Government ID.</p>

                {props.formData.proof.mainDocument === null && 
                <>
                  <input type="file" accept=".doc,.docx,.pdf" id="fileID" name="mainDocument" className='upload-field-button' onChange={fileUploadToState}/>
                </>
                }

              {props.formData.proof.mainDocument !== null && <div className='file-uploaded-conformation new-file-button snow-show' onClick={() => deleteFile("mainDocument")}><span><i className="bi bi-check-circle-fill"></i>File Uploaded</span> <i className="bi bi-trash3"></i></div>}
            </li>

            

            {/* {props.formData.WorkingStatus === "WORKPERMIT" && <li>
              <span className='absolute-postion-box'>required</span>
              <i className="bi bi-person-vcard"></i>
              <h3>Work Permit</h3>
              <p>Please upload a document as proof of your work permit issued by the government.</p>
              {props.formData.proof.mainDocument === null && props.formData.proof.mainType != "" && <>
                <input type="file" accept=".doc,.docx,.pdf" id="fileID" name="mainDocument" className='upload-field-button' onChange={fileUploadToState}/>
              </>}
              {props.formData.proof.mainDocument !== null && <div className='file-uploaded-conformation new-file-button' onClick={() => deleteFile("mainDocument")}><span><i className="bi bi-check-circle-fill"></i>File Uploaded</span> <i className="bi bi-trash3"></i></div>}
            </li> } */}

            <li>
              <span className='absolute-postion-box'>required</span>
              <i className="bi bi-person-square"></i>
              <h3>Face Photo</h3>
              <p>Please provide a passport size person photo with clear background</p>

              {props.formData.proof.addressDocument === null && 
              <>
                <input type="file" accept=".doc,.docx,.pdf" id="fileID" name="addressDocument" className='upload-field-button' onChange={fileUploadToState}/>
              </>
              }
              {props.formData.proof.addressDocument !== null && <div className='file-uploaded-conformation new-file-button' onClick={() => deleteFile("addressDocument")}><span><i className="bi bi-check-circle-fill"></i>File Uploaded</span> <i className="bi bi-trash3"></i></div>}
            </li>
          </ul>
          {error && <p className="note-small-text error-text mt-1"><i className="bi bi-exclamation-triangle-fill"></i> {error}</p>}
        </div>
        <div className='button-action-setup-wizzard'>
          <GhostButton name="Back" onClick={props.back}/>
          <PrimaryButton name="Next" onClick={submit}/>
        </div>
      </div>
    </div>
  )
}

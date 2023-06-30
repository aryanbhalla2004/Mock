import React, { useState, useRef, useEffect } from 'react'
import SignatureCanvas from 'react-signature-canvas';
import { PrimaryButton, GhostButton} from '../../../../../common/components/button/Button';
import { IEmployeeSignUpForm } from '../../../../../common/interfaces/CommonInterfaces';
import { print } from '../../../../../common/util/html2PDF';
import { EmployeementAgreementPDF } from './EmployeementAgreement';
interface prop {
  formData: any,
  signatureData: any,
  setSignatureData: (data: any) => void,
  setFormData: (data: any) => void,
  next: () => void,
  back: () => void,
  onSubmit: () => void,
}
export const Agreement = (props: prop) => {
  const EmployeeAgreement = useRef<any>();
  const [showSign, setShowSign] = useState(false);
  
  const download = (from: string) => {
    let linkSource;
    let fileName;
    if(from === "oneFile") {
      linkSource = `data:application/pdf;base64,${props.signatureData.oneFile}`;
      fileName = "Zoobo_Employment_Agreement.pdf";
    } else {
      linkSource = `data:application/pdf;base64,${props.signatureData.twoFile}`;
      fileName = "Zoobo_Terms_and_Privacy.pdf";
    }
    
    const downloadLink = document.createElement("a");
    
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  const [viewAgreement, setViewAgreement] = useState("");

  const clear = () => {
    if(viewAgreement === "EMPLOYEE") {
      props.signatureData.oneRef.current.clear();
    } else {
      props.signatureData.twoRef.current.clear();
    }
  }

  const saveSiganture = async () => {
    if(viewAgreement === "EMPLOYEE") {
      const data = props.signatureData.oneRef.current.toDataURL();
      props.setSignatureData((prev: any) => {
        return {...prev, oneCode: data}
      });
    } else {
      const data = props.signatureData.twoRef.current.toDataURL();
      props.setSignatureData((prev: any) => {
        return {...prev, twoCode: data}
      });
    }
  }

  const finish = async () => {

    try {
      const data = await print();

      if(viewAgreement === "EMPLOYEE") {
        props.setSignatureData((prev: any) => {
          return {...prev, oneFile: data}
        });
      } else {
        props.setSignatureData((prev: any) => {
          return {...prev, twoFile: data}
        });
      }

      closePortal();
      setShowSign(false);
      
    } catch(err: any) {
      
    }
  }

  const closePortal = () => {
    setViewAgreement("");
  }

  const deleteSignature = () => {
    if(viewAgreement === "EMPLOYEE") { 
      props.setSignatureData((prev: any) => {
        return {...prev, oneCode: "", oneFile: ""}
      });
    } else {
      props.setSignatureData((prev: any) => {
        return {...prev, twoCode: "", twoFile: ""}
      });
    }
  }

  return (
    <>
    <div className='auth-12-register-step-agreement animate-entry-signup'>
      <div className='auth-12-register-header-text'>
        <h2>Term of Service and Agreement</h2>
        <p className='note-small-text mt-0 mb-1'>Please select the option below that best describes your current status. After making your selection, we may request that you provide supporting documents as evidence of the status you have indicated.</p>
        <ul className='agreement-container-signup'>
          <li>
            <div className='agreement-info-wraper-inside'>
              <h2>Employment Agreement</h2>
              <p>By clicking the sign button, you agree to the terms and conditions outlined in the Employment Agreement, which establishes the rights and responsibilities of both the employer and the employee.</p>
            </div>
            
            {props.signatureData.oneFile === "" && <button onClick={e => setViewAgreement("EMPLOYEE")} type='button' className='btn-general ghost-button'><i className="bi bi-pencil-square"></i> Sign Agreement</button>}
            {props.signatureData.oneFile !== "" && <div className='signed-colm-container'>
            <button onClick={e => download("oneFile")} type='button' className='btn-general dark-button'><i className="bi bi-file-earmark-arrow-down"></i> Download a Copy</button>
            <button onClick={e => setViewAgreement("EMPLOYEE")} type='button' className='btn-general primary-button'><i className="bi bi-check-circle"></i> View Sign</button>
            </div>
            }
          </li>
        </ul>
        <div className='button-action-setup-wizzard'>
          <GhostButton name="Back" onClick={props.back}/>
          <PrimaryButton name="Finish" onClick={props.onSubmit}/>
        </div> 
      </div>
    </div>
        <div className={viewAgreement !== "" ? "show-agreement aggrement-slide-absolute" : "aggrement-slide-absolute"}>
          <div className={viewAgreement !== "" ? "show-agreement aggrement-data-container-pop" : "aggrement-data-container-pop" } id="printable-aggreement">
            {viewAgreement === "EMPLOYEE" && <EmployeementAgreementPDF/>}

            {viewAgreement === "EMPLOYEE" && <div className='signature-holder-agrement-container'>
              {!showSign && props.signatureData.oneCode === "" && <div className='sign-box' onClick={e => setShowSign(true)}><i className="bi bi-pen-fill"></i> Sign Here</div>}
              {showSign && props.signatureData.oneCode === "" && <SignatureCanvas ref={props.signatureData.oneRef} penColor='green' canvasProps={{width: 300, height: 100, className: 'sigCanvas'}} />}
              {props.signatureData.oneCode !== "" && <img src={props.signatureData.oneCode} width="250" height={70}/>}
              <p>{props.formData.lName}, {props.formData.fName} <div>{props.signatureData.oneCode === "" && <><button onClick={saveSiganture}>Save</button><button onClick={clear}>Clear</button></>}{props.signatureData.oneCode !== "" && <button onClick={deleteSignature}>Delete Signature</button>}</div></p>
            </div>}

            <div className='sign-concent-name'>
              <p><input placeholder="Your Name"/>, I hereby acknowledge that I have read, fully understand, and agree to comply with all the terms, conditions, and obligations outlined in the agreement.</p>
              <div>
                <GhostButton name="Close" onClick={closePortal}/>
                <PrimaryButton name="Finish" type="button" onClick={finish}/>
              </div>
            </div>
            {/* <object data={"data:application/pdf;base64, " + signatureData.oneFile} type="application/pdf" width="100%" height="600px">
              <p>Sorry, your browser doesn't support embedded PDFs.</p>
            </object>  */}
          </div> 
        </div>
    </>
    
  )
}

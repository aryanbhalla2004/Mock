import React, { useState, useRef, useEffect } from 'react'
import SignatureCanvas from 'react-signature-canvas';
import { PrimaryButton, GhostButton} from '../../../../../common/components/button/Button';
import { IEmployeeSignUpForm } from '../../../../../common/interfaces/CommonInterfaces';
import { print } from '../../../../../common/util/html2PDF';
interface prop {
  formData: IEmployeeSignUpForm,
  setFormData: (data: any) => void,
}
export const StepSeven = (props: prop) => {
  const EmployeeAgreement = useRef<any>();
  const [showSign, setShowSign] = useState(false);
  const [signatureData, setSignatureData] = useState({
    oneRef: useRef<any>(),
    twoRef: useRef<any>(),
    oneCode: "",
    twoCode: "",
    oneFile: "",
    twoFile: "",
    one: [],
    two: [],
  });
  
  const download = () => {
    print();
  }

  const [viewAgreement, setViewAgreement] = useState("");

  const clear = () => {
    signatureData.oneRef.current.clear();
  }

  const saveSiganture = async () => {
    const data = signatureData.oneRef.current.toDataURL();
    setSignatureData(prev => {
      return {...prev, oneCode: data}
    });
  }

  const finish = async () => {
    const data = signatureData.oneRef.current.toDataURL();
    // console.log(data);
    // let tempY = 0;
    // let tempX = 0;
    // for(let i = 1; i < data[0].length - 1; i++) {
    //   tempX = data[0][i].x;
    //   tempY = data[0][i].y;
    // }
    

    try {
      const da = await print();
      console.log(da);
      setSignatureData(prev => {
        return {...prev, oneFile: da}
      });
    } catch(err: any) {
      
    }
  }

  const closePortal = () => {
    setViewAgreement("");
  }

  const deleteSignature = () => {
    setSignatureData(prev => {
      return {...prev, oneCode: "", oneFile: ""}
    });
  }

  return (
    <>
    <div className='auth-12-register-step-3 animate-entry-signup'>
      <div className='auth-12-register-header-text'>
        <h2>Term of Service and Agreement</h2>
        <p className='note-small-text mt-0 mb-1'>Please select the option below that best describes your current status. After making your selection, we may request that you provide supporting documents as evidence of the status you have indicated.</p>
        <ul className='agreement-container-signup'>
          <li>
            <div className='agreement-info-wraper-inside'>
              <h2>Employment Agreement</h2>
              <p>By clicking the sign button, you agree to the terms and conditions outlined in the Employment Agreement, which establishes the rights and responsibilities of both the employer and the employee.</p>
            </div>
            
            <button onClick={e => setViewAgreement("EMPLOYEE")} type='button'><i className="bi bi-pencil-square"></i> Sign Agreement</button>
          </li>
          <li>
            <div className='agreement-info-wraper-inside'>
              <h2>Term and Privacy Policy</h2>
              <p>By clicking the sign button, you acknowledge that you have read and agree to our Terms and Conditions and Privacy Policy, which outline how we collect, use, and protect your personal information.</p>
            </div>
            <button onClick={e => setViewAgreement("TERMS")} type='button'><i className="bi bi-pencil-square"></i> Sign Agreement</button>
          </li>
        </ul>
      </div>
    </div>
    {viewAgreement !== "" &&
        <div className='modal-popup-data'>
          <div className='aggrement-data-container-pop' id="printable-aggreement">
            <h2>Employment Agreement</h2>
            <p>Name: {props.formData.lName}, {props.formData.fName}</p>
            <p>Birthdate: {props.formData.dob}</p>
            <p>Phone Number: {props.formData.pNumber}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore recusandae accusamus repudiandae nihil eligendi ut optio obcaecati reiciendis voluptate quae aperiam nam facilis laudantium ipsa excepturi, doloremque vel nisi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore recusandae accusamus repudiandae nihil eligendi ut optio obcaecati reiciendis voluptate quae aperiam nam facilis laudantium ipsa excepturi, doloremque vel nisi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore recusandae accusamus repudiandae nihil eligendi ut optio obcaecati reiciendis voluptate quae aperiam nam facilis laudantium ipsa excepturi, doloremque vel nisi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore recusandae accusamus repudiandae nihil eligendi ut optio obcaecati reiciendis voluptate quae aperiam nam facilis laudantium ipsa excepturi, doloremque vel nisi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore recusandae accusamus repudiandae nihil eligendi ut optio obcaecati reiciendis voluptate quae aperiam nam facilis laudantium ipsa excepturi, doloremque vel nisi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore recusandae accusamus repudiandae nihil eligendi ut optio obcaecati reiciendis voluptate quae aperiam nam facilis laudantium ipsa excepturi, doloremque vel nisi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore recusandae accusamus repudiandae nihil eligendi ut optio obcaecati reiciendis voluptate quae aperiam nam facilis laudantium ipsa excepturi, doloremque vel nisi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore recusandae accusamus repudiandae nihil eligendi ut optio obcaecati reiciendis voluptate quae aperiam nam facilis laudantium ipsa excepturi, doloremque vel nisi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore recusandae accusamus repudiandae nihil eligendi ut optio obcaecati reiciendis voluptate quae aperiam nam facilis laudantium ipsa excepturi, doloremque vel nisi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore recusandae accusamus repudiandae nihil eligendi ut optio obcaecati reiciendis voluptate quae aperiam nam facilis laudantium ipsa excepturi, doloremque vel nisi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore recusandae accusamus repudiandae nihil eligendi ut optio obcaecati reiciendis voluptate quae aperiam nam facilis laudantium ipsa excepturi, doloremque vel nisi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore recusandae accusamus repudiandae nihil eligendi ut optio obcaecati reiciendis voluptate quae aperiam nam facilis laudantium ipsa excepturi, doloremque vel nisi!</p>
            <div className='signature-holder-agrement-container'>
              {!showSign && <div className='sign-box' onClick={e => setShowSign(true)}><i className="bi bi-pen-fill"></i> Sign Here</div>}
              {showSign && signatureData.oneCode === "" && <SignatureCanvas ref={signatureData.oneRef} penColor='green' canvasProps={{width: 300, height: 100, className: 'sigCanvas'}} />}
              {signatureData.oneCode !== "" && <img src={signatureData.oneCode} width="250" height={70}/>}
              <p>{props.formData.lName}, {props.formData.fName} <div>{signatureData.oneCode === "" && <><button onClick={saveSiganture}>Save</button><button onClick={clear}>Clear</button></>}{signatureData.oneCode !== "" && <button onClick={deleteSignature}>Delete Signature</button>}</div></p>
            </div>
          
            <div className='sign-concent-name'>
              <p><input placeholder="Your Name"/>, I hereby acknowledge that I have read, fully understand, and agree to comply with all the terms, conditions, and obligations outlined in the agreement.</p>
              <div>
                <GhostButton name="Close" onClick={closePortal}/>
                <PrimaryButton name="Finish" type="button" onClick={finish}/>
              </div>
            </div>
            <img srcSet={signatureData.oneFile} width="800"/> 
          </div> 
        </div>
      }
    </>
  )
}

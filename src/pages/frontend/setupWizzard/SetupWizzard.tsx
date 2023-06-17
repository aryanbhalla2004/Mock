import React, { useRef, useState } from 'react'
import "./style.css";
import { useMultistepForm } from './hooks/useMultistepForm';
import { WelcomePage } from './components/Welcome-box/WelcomePage';
import { Status } from './components/Status/Status';
import { FileUpload } from './components/file-upload/FileUpload';
import { PreferedPayment } from './components/prefered-payment/PreferedPayment';
import { Agreement } from './components/agreement/Agreement';

export const SetupWizzard = () => {
  const [formData, setFormData] = useState({
    WorkingStatus: "",
    proof: {
      addressType: "",
      addressDocument: null,
      mainType: "",
      mainDocument: null,
    },
    paymentType: "",
  });

  const [signatureData, setSignatureData] = useState<any>({
    oneRef: useRef<any>(),
    twoRef: useRef<any>(),
    oneCode: "",
    twoCode: "",
    oneFile: "",
    twoFile: "",
    one: [],
    two: [],
  });

  const nextPage = () => {
    next();
  }
  
  const backPage = () => {
    back();
  }

  const {back, next, step, isFirstStep, isLastStep, isReview, currentStepIndex} = useMultistepForm([
    <WelcomePage next={nextPage}/>,
    <Status next={nextPage} formData={formData} setFormData={setFormData}/>,
    <FileUpload back={backPage} next={nextPage} formData={formData} setFormData={setFormData}/>,
    <PreferedPayment back={backPage} next={nextPage} formData={formData} setFormData={setFormData}/>,
    <Agreement back={backPage} next={nextPage} formData={formData} signatureData={signatureData} setFormData={setFormData} setSignatureData={setSignatureData}/>
  ]);

  const onSubmit = (e: any) => {
    e.preventDefault();
  }

  return (
    <div className='setup-wizzard-container-for-all-elements'>
      {step}

      {/* <div className='button-same-level-col'>
            <PrimaryButton loading={loading} name={isReview ? "Review" : isLastStep ? "Finish" :  "Next"} type="submit" width="full"/>
            {!isFirstStep && <GhostButton type="button" onClick={back} name="Back" width="full" />}
      </div> */}
    </div>
  )
}

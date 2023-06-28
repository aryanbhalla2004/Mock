import React, { useContext, useRef, useState } from 'react'
import "./style.css";
import { useMultistepForm } from './hooks/useMultistepForm';
import { WelcomePage } from './components/Welcome-box/WelcomePage';
import { Status } from './components/Status/Status';
import { FileUpload } from './components/file-upload/FileUpload';
import { PreferedPayment } from './components/prefered-payment/PreferedPayment';
import { Agreement } from './components/agreement/Agreement';
import { AddressInput, CreateEmployeeInput, CreateEmployeeProfileInput, DocumentInput, Employee, PaymentInfoInput } from '../../../API';
import { AddressForm } from './components/addressInfo/AddressForm';
import { AccountContext } from '../../../setup/contexts/AuthContext';
import { DatabaseContext } from '../../../setup/contexts/dbContext';
import { createEmployee, createEmployeeProfile } from '../../../graphql/mutations';
import { Auth } from 'aws-amplify';

export const SetupWizzard = () => {
  const {getUser, setIsSignUpInComplete} = useContext(AccountContext);
  const {pushDataUserReturn, updateAttribute, uploadFile} = useContext(DatabaseContext);
  const [formData, setFormData] = useState({
    WorkingStatus: "",
    proof: {
      addressDocument: null,
      mainDocument: null,
    },
    paymentType: "",
    payoutInfo: {
      email: "",
    },
    address: {
      country: "",
      postalCode: "",
      city: "",
      province: "",
      address: ""
    }
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

  
  const getFileExtension = (file: File) => {
    const fileName = file.name;
    const extension = fileName.split('.').pop();
    return extension;
  }

  const onSubmit = async () => {
    console.log(formData.proof.mainDocument);
    try {
      const userInfo = await getUser();
      let mainDoc, profileDoc;

      if(formData.proof.mainDocument != null && formData.proof.addressDocument != null) {
        const mainExtension = getFileExtension(formData.proof.mainDocument);
        const addressExtension = getFileExtension(formData.proof.addressDocument);
        mainDoc = await uploadFile(`mainDocument.${mainExtension}`,formData.proof.mainDocument, "protected");
        profileDoc = await uploadFile(`profileDocument.${addressExtension}`,formData.proof.addressDocument, "protected");
      }

      const mainDocument: DocumentInput = {
        type: "Identification",
        document: mainDoc
      }
      const profileDocument: DocumentInput = {
        type: "Profile Picture",
        document: profileDoc
      }

      const addressEmployee: AddressInput = {
        address: formData.address.address,
        postalCode: formData.address.postalCode,
        country: formData.address.country,
        state: formData.address.province,
        city: formData.address.city,
      }

      const paymentEmployee: PaymentInfoInput = {
        type: formData.paymentType,
        ...formData.payoutInfo
      }

      const employee : CreateEmployeeInput = {
        cognitoUser: userInfo.username,
        address: addressEmployee,
        workingStatus: formData.WorkingStatus,
        documents: [mainDocument, profileDocument],
        // agreement?: Array< DocumentInput > | null,
        systemRating: 5,
        payment: paymentEmployee,
        employeeEmployeeProfileId: userInfo.username,
      }

      const employeeProfile:CreateEmployeeProfileInput = {
        id: userInfo.username,
        firstName: userInfo.attributes['given_name'],
        lastName: userInfo.attributes['family_name'],
        phoneNumber: userInfo.attributes['custom:phoneNumber'],
        dob: userInfo.attributes['custom:DateOfBirth'],
      }



      const employeePush = await pushDataUserReturn(createEmployee, employee);
      //console.log(employeePush);

      const employeeProfilePush = await pushDataUserReturn(createEmployeeProfile, employeeProfile);
      //console.log(employeeProfilePush);

      // const updateWizzared = await updateAttributes();
      //setIsSignUpInComplete(false);

    } catch (e) {

    }
  }

  const updateAttributes = async () => {
    return Auth.currentAuthenticatedUser().then(item => {
      Auth.updateUserAttributes(item, {
        'custom:signup_status': '1'
      });
    })
   
  }

  const {back, next, step, isFirstStep, isLastStep, isReview, currentStepIndex} = useMultistepForm([
    <WelcomePage next={nextPage}/>,
    <AddressForm formData={formData} setFormData={setFormData} next={nextPage}/>,
    <Status next={nextPage} back={backPage} formData={formData} setFormData={setFormData}/>,
    <FileUpload back={backPage} next={nextPage} formData={formData} setFormData={setFormData}/>,
    <PreferedPayment back={backPage} next={nextPage} formData={formData} setFormData={setFormData}/>,
    <Agreement back={backPage} next={nextPage} formData={formData} signatureData={signatureData} setFormData={setFormData} setSignatureData={setSignatureData} onSubmit={onSubmit}/>
  ]);

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

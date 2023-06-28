import React, { useState } from 'react'
import { GhostButton, PrimaryButton } from '../../../../../common/components/button/Button'
import "./style.css";
import directDeposit from "../../../../../assets/direct-debit.png";
import { TextInput } from '../../../../../common/components/input/Input';
interface prop {
  next: () => void,
  back: () => void,
  formData: any,
  setFormData: (data: any) => void,
}


export const PreferedPayment = (props: prop) => {
  const [selectedPaymentType, setSelectedPaymentType] = useState<any>(null);
  const [showSelection, setShowSelection] = useState<any>(true);
  const [error, setError] = useState("");

  const submit = () => {
    setError("");
    if(props.formData.paymentType != "") {
      if(props.formData.paymentType === "interac") {
        if(props.formData.payoutInfo.email != undefined && props.formData.payoutInfo.email != "") {
          props.next();
        } else {
          setError("Invalid Input, Please Enter Your Email");
        }
      } else {
        if(props.formData.payoutInfo.accountNum != "" && props.formData.payoutInfo.accountNum != undefined && props.formData.payoutInfo.fin != undefined && props.formData.payoutInfo.branchNum != undefined && props.formData.payoutInfo.fin != "" && props.formData.payoutInfo.branchNum != "" && props.formData.payoutInfo.accountName != undefined && props.formData.payoutInfo.accountName != "") {
          props.next();
        } else {
          setError("Invalid Input, Please Complete before continuing");
        }
      }
      
    } else {
      setError("Invalid Selection, Make a selection before continuting");
    }
  }

  const setPayment = (value: string) => {
    setError("");
    props.setFormData((prev: any) => {
      return {...prev, payoutInfo: {}}
    });
    props.setFormData((prev: any) => {
      return {...prev, paymentType: value}
    });
  }


  const inputValue = (field: any) => {
    props.setFormData((prev: any) => {
      return {...prev, payoutInfo: {...prev.payoutInfo, ...field}}
    });
  } 

  return (
    <div className='auth-12-register-step-3 animate-entry-signup'>
      <div className='auth-12-register-header-text'>
        <h2>Select Payment Receiving Method</h2>
        <p className='note-small-text mt-0 mb-1'>We assure you that your personal information and identity documents will be securely stored and handled with the utmost confidentiality.</p>
        <div className='content-payout-container'>
          {showSelection && <ul className='paymeny-selection-type'>
            <li className={props.formData.paymentType === "directDeposit" ? "active-selected-payment" : ""} onClick={() => setPayment("directDeposit")}>
              <img src={directDeposit} width={30}/>
              <h4>Direct Deposit (Bank Transfer)</h4>
            </li>
            <li className={props.formData.paymentType === "interac" ? "active-selected-payment" : ""} onClick={() => setPayment("interac")}>
              <img src={"https://upload.wikimedia.org/wikipedia/commons/3/31/InteracLogo.svg"} width={30}/>
              <h4>Interac (E-Transfer)</h4>
            </li>
          </ul>}

          <div className={props.formData.paymentType === "" ? "form-data-payout" : "show-payout form-data-payout"}>
            {props.formData.paymentType === "interac" && <div className={props.formData.paymentType === "interac" ? "show-payout e-trander" : "e-trander"}>
              <TextInput value={props.formData.payoutInfo.email} label="Email Address (For Receving Payout)" updateValue={inputValue} name="email" type="email" placeholder='example@mail.com'/>
            </div>}

            {props.formData.paymentType === "directDeposit" && <div className={props.formData.paymentType === "directDeposit" ? "show-payout form-direct-deposti-form" : "form-direct-deposti-form"}>
              <div>
                <TextInput value={props.formData.payoutInfo.accountNum} label="Account No." name="accountNum" type="number" updateValue={inputValue} placeholder='XXXXXXXXXXXX'/>  
                <TextInput value={props.formData.payoutInfo.fin} label="Financial Institution No" name="fin" updateValue={inputValue} type="number" placeholder='XXX'/> 
              </div>
              <div>
                     
                <TextInput value={props.formData.payoutInfo.branchNum} label="Branch No" name="branchNum" type="number" updateValue={inputValue} placeholder='XXXXX'/>     
                <TextInput value={props.formData.payoutInfo.accountName} label="Name(s) of Account Holder(s)" name="accountName" updateValue={inputValue} type="text" placeholder='James Smith'/>
              </div>
            </div>}
          </div>
          { error && <p className="note-small-text error-text"><i className="bi bi-exclamation-triangle-fill"></i> {error}</p>}
        </div>

        
       
        <div className='button-action-setup-wizzard'>
          <GhostButton name="Back" onClick={props.back}/>
          <PrimaryButton name="Next" onClick={submit}/>
        </div> 
      </div>
    </div>
  )
}

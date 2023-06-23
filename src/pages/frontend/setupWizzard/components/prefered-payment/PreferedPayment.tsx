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
      props.next();
    } else {
      setError("Invalid Selection, Make a selection before continuting");
    }
  }

  const setPayment = (value: string) => {
    setError("");
    props.setFormData((prev: any) => {
      return {...prev, paymentType: value}
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
              <TextInput label="Email Address (For Receving Payout)" name="email" type="email" placeholder='example@mail.com'/>
            </div>}

            {props.formData.paymentType === "directDeposit" && <div className={props.formData.paymentType === "directDeposit" ? "show-payout form-direct-deposti-form" : "form-direct-deposti-form"}>
              <div>
                <TextInput label="Account No." name="email" type="email" placeholder='XXXXXXXXXXXX'/>  
                <TextInput label="Financial Institution No" name="email" type="email" placeholder='XXX'/> 
              </div>
              <div>
                     
                <TextInput label="Branch No" name="email" type="email" placeholder='XXXXX'/>     
                <TextInput label="Name(s) of Account Holder(s)" name="email" type="email" placeholder='James Smith'/>
              </div>
            </div>}
          </div>
        </div>

        
        { error && <p className="note-small-text error-text"><i className="bi bi-exclamation-triangle-fill"></i> {error}</p>}
        <div className='button-action-setup-wizzard'>
          <GhostButton name="Back" onClick={props.back}/>
          <PrimaryButton name="Next" onClick={submit}/>
        </div> 
      </div>
    </div>
  )
}

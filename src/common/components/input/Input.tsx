import { useEffect, useState } from "react";
import { HTMLInputTypeAttribute } from "react";
import "./style.css";
import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';

interface prop {
  label: String,
  type: HTMLInputTypeAttribute | undefined;
  placeholder: string | undefined,
  name: string | undefined,
  note?: string,
  autoComplete?: string,
  value?: any,
  setValue?: any,
  error?: string,
  form?: string,
  step?: string,
  updateValue?: (fields: Partial<any>) => void,
}

export const TextInput = (props: prop) => {
  const changeValue = (e: any) => {
    if(props.updateValue) {
      props.updateValue({[e.target.name]: e.target.value});
    }
  }
  return (
    <div className="field-container-comp-input">
      <label className="form-label">{props.label}</label>
      <input step={props.step} form={props.form} onChange={changeValue } name={props.name} value={props.value} type={props.type} placeholder={props.placeholder} autoComplete={props.autoComplete} className={props.error === props.name ? "error-field" : ""}></input>
      <span className={props.error === props.name ? "note-small-text error-text" : "note-small-text"}>{props.error === props.name && props.note && <><i className="bi bi-exclamation-triangle-fill"></i> {props.note}</>}</span>
    </div>
  )
}

export const PhoneInputCustom = (props: prop) => {
  const [number, setNumber] = useState<any>();
  useEffect(() => {
    if(props.updateValue) {
      props.updateValue({pNumber: number});
    }
    // 
  }, [number]);
  return (
    <div className="field-container-comp-input">
      <label className="form-label">{props.label}</label>
      <PhoneInput defaultCountry="CA" placeholder={props.placeholder} value={props.value} className={props.error === props.name ? "error-phoneNumber phoneContainer" : "phoneContainer"} onChange={setNumber}/>
      <span className={props.error === props.name ? "note-small-text error-text" : "note-small-text"}>{props.error === props.name && props.note && <><i className="bi bi-exclamation-triangle-fill"></i> {props.note} </>}</span>
    </div>
  )
}

export const Textarea = () => {
  return (
    <div>
      <label></label>
      <textarea/>
    </div>
  )
}
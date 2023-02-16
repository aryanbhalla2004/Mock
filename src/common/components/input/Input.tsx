import { useState } from "react";
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
  value?: string,
  setValue?: any,
  error?: string
}

export const TextInput = (props: prop) => {
  
  return (
    <div className="field-container-comp-input">
      <label className="form-label">{props.label}</label>
      <input name={props.name} value={props.value} type={props.type} placeholder={props.placeholder} autoComplete={props.autoComplete} className={props.error === props.name ? "error-field" : ""}></input>
      <span className={props.error === props.name ? "note-small-text error-text" : "note-small-text"}>{props.error === props.name && props.note && <i className="bi bi-exclamation-triangle-fill"></i>}{props.note}</span>
    </div>
  )
}

export const PhoneInputCustom = (props: prop) => {
  
  return (
    <div className="field-container-comp-input">
      <label className="form-label">{props.label}</label>
      <PhoneInput defaultCountry="CA" placeholder={props.placeholder} value={props.value} className={props.error === props.name ? "error-phoneNumber phoneContainer" : "phoneContainer"} onChange={props.setValue}/>
      <span className={props.error === props.name ? "note-small-text error-text" : "note-small-text"}>{props.error === props.name && props.note && <i className="bi bi-exclamation-triangle-fill"></i>}{props.note}</span>
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
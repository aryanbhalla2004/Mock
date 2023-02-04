import { HTMLInputTypeAttribute } from "react";
import "./style.css";
interface prop {
  label: String,
  type: HTMLInputTypeAttribute | undefined;
  placeholder: string | undefined,
  name: string | undefined,
  note?: string
}
export const TextInput = (props: prop) => {
  return (
    <div className="field-container-comp-input">
      <label className="form-label">{props.label}</label>
      <input name={props.name} type={props.type} placeholder={props.placeholder} ></input>
      <span className="note-small-text">{props.note}</span>
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
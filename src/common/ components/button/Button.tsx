import { Link } from "react-router-dom";
import "./style.css";

interface prop {
  name: String
  type?: any
  path?: any,
  width?: string
}

export const PrimaryButton = (props: prop) => {
  return (
    <button type={props.type}  style={props.width === "full" ? { width: '100%' } : { width: 'fit-content' }} className="btn-general primary-button">{props.name}</button>
  )
}

export const GhostButton = (props: prop) => {
  return (
    <button type={props.type} style={props.width === "full" ? { width: '100%' } : { width: 'fit-content' }} className="btn-general ghost-button">{props.name}</button>
  )
}

export const PrimaryLinkBtn = (props: prop) => {
  return (
    <Link to={props.path} style={props.width === "full" ? { width: '100%' } : { width: 'fit-content' }} className="btn-general">{props.name}</Link>
  )
}

export const GhostLinkBtn = (props: prop) => {
  return (
    <Link to={props.path} style={props.width === "full" ? { width: '100%' } : { width: 'fit-content' }} className="btn-general ghost-button">{props.name}</Link>
  )
}

export const TextLink = (props: prop) => {
  return (
    <Link to={props.path} className="text-link">{props.name}</Link>
  )
}
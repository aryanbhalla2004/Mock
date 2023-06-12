import React from 'react'
import "./style.css";

interface type {
  message: string,
  type: string,
  header: string,
}

export const MessageBox = (props: type) => {
  return (
    <div className={(props.type === "ERROR" && 'message-box error') || (props.type === "WARNING" && 'message-box warning') ||  (props.type === "SUCCESS" && 'message-box success') || 'message-box'}>
      <div className={(props.type === "ERROR" && 'icon-holder error-bg') || (props.type === "WARNING" && 'icon-holder warning-bg') ||  (props.type === "SUCCESS" && 'icon-holder success-bg') || 'icon-holder'}>
        {props.type === "ERROR" && <i className="bi bi-exclamation-octagon"></i>}
        {props.type === "WARNING" && <i className="bi bi-exclamation-triangle"></i>}
        {props.type === "SUCCESS" && <i className="bi bi-check-circle"></i>}
      </div>
      <div className='message-data'>
        <h2>{props.header}</h2>
        <p>{props.message}</p>
      </div>
    </div>
  )
}
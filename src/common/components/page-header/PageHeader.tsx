import React from 'react'
import "./style.css";
interface prop {
  header: String,
  path: any[]
}
export const PageHeader = (props: prop) => {
  return (
    <div className='page-header-container'>
      <div className='content-sizing page-header-wrapper'>
        <ul>
          {props.path.map((item, index) => (
            <li key={index}>{item} {(props.path.length) !== (index + 1) && <i className="bi bi-chevron-right"></i>}</li>
          ))}
        </ul>
        <h1>{props.header}</h1>
      </div>
    </div>
  )
}

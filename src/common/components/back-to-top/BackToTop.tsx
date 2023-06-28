import React from 'react'
import "./style.css";

interface prop {
  isVisible: boolean
}

export const BackToTop = (props: prop) => {
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={props.isVisible ? "showbacktoTop backto-top" : "backto-top" }><i className="bi bi-chevron-up"></i></button>
  )
}

import React from 'react'
import "./style.css";

interface prop {
  show: boolean,
  child: any
}

export const ModualPop = (props: prop) => {
  return (
    <div className={props.show ? "show-box-pop logout-main-container" : "logout-main-container"}>
      {props.child}
      {/* <div className='content-box-center-pop-modal logout-popup'>
        <h4>You are attempting to log out of Zoobo</h4>
        <p>Are you Sure?</p>
        <div className="checkboxes__item add-spaceing-around">
          <label className="checkbox style-e">
            <input type="checkbox" name="remember"/>
            <div className="checkbox__checkmark"></div>
            <div className="checkbox__body">Global Logout</div>
          </label>
        </div>
        <div className='logout-pop-button-action'>
          <span>Logged in as Aryan Bhalla</span>
          <PrimaryButton name="Logout" width='full' loading={formSubmitted} onClick={() => logoutUser()}/>
        </div>
        <button className='close-button-pop-up' onClick={() => setIsLogoutEnabled(false)}><i className="bi bi-x"></i></button>
      </div> */}
    </div>
  )
}

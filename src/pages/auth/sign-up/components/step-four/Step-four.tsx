import React, { useState } from 'react'
import { GhostButton, PrimaryButton } from '../../../../../common/components/button/Button'
import { TextInput } from '../../../../../common/components/input/Input'
import SignatureCanvas from 'react-signature-canvas';
import { IEmployeeSignUpForm } from '../../../../../common/interfaces/CommonInterfaces';

interface prop {
  nextPage: () => void,
  backPage: () => void,
  formData: IEmployeeSignUpForm | undefined,
  setFormData: (data: IEmployeeSignUpForm) => void,
}

const StepFour = (props: prop) => {
  const [times, setTimes] = useState({
    Monday: {open: true, timeStart: '', timeEnd: ''},
    Tuesday: {open: true, timeStart: '', timeEnd: ''},
    Wednesday: {open: true, timeStart: '', timeEnd: ''},
    Thursday: {open: true, timeStart: '', timeEnd: ''},
    Friday: {open: true, timeStart: '', timeEnd: ''},
    Saturday: {open: true, timeStart: '', timeEnd: ''},
    Sunday: {open: true, timeStart: '', timeEnd: ''},
  });

  const changeOpens = (e: any) => {
    setTimes(prev => {
      return {...prev, [e.target.name]: {open: e.target.checked} }
    });
  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    props.nextPage();
  }


  return (
    <form className='auth-12-register-step-3' onSubmit={onSubmit}>
      <div className='auth-12-register-header-text'>
        <h2>Whats your avability like?</h2>
      </div>

      <ul className='time-picker-container'>
        <li>
          <h4>Sunday</h4>
          <div className="checkboxes__item">
            <label className="checkbox style-e">
              <input type="checkbox" checked={times.Sunday.open} name="Sunday" onChange={changeOpens}/>
              <div className="checkbox__checkmark"></div>
              <div className="checkbox__body">{times.Sunday.open ? "Available" : "Not Available"}</div>
            </label>
          </div>
          <div className='day-time-container'>
          {times.Sunday.open ? <>
              <input type="time" className='form-control'></input>
              <span>TO</span>
              <input type="time" className='form-control'></input>
            </> : <span>Store Closed</span>}
          </div>
        </li>
              <li>
                <h4>Monday</h4>
                <div className="checkboxes__item">
                  <label className="checkbox style-e">
                    <input type="checkbox" checked={times.Monday.open} name="Monday" onChange={changeOpens}/>
                    <div className="checkbox__checkmark"></div>
                    <div className="checkbox__body">{times.Monday.open ? "Open" : "Close"}</div>
                  </label>
                </div>
                <div className='day-time-container'>
                  {times.Monday.open ? <>
                    <input type="time" className='form-control'></input>
                    <span>TO</span>
                    <input type="time" className='form-control'></input>
                  </> : <span>Store Closed</span>}
                </div>
              </li>
              <li>
                <h4>Tuesday</h4>
                <div className="checkboxes__item">
                  <label className="checkbox style-e">
                    <input type="checkbox" checked={times.Tuesday.open} name="Tuesday" onChange={changeOpens}/>
                    <div className="checkbox__checkmark"></div>
                    <div className="checkbox__body">{times.Tuesday.open ? "Open" : "Close"}</div>
                  </label>
                </div>
                <div className='day-time-container'>
                  {times.Tuesday.open ? <>
                    <input type="time" className='form-control'></input>
                    <span>TO</span>
                    <input type="time" className='form-control'></input>
                  </> : <span>Store Closed</span>}
                </div>
              </li>
              <li>
                <h4>Wednesday</h4>
                <div className="checkboxes__item">
                  <label className="checkbox style-e">
                    <input type="checkbox" checked={times.Wednesday.open} name="Wednesday" onChange={changeOpens}/>
                    <div className="checkbox__checkmark"></div>
                    <div className="checkbox__body">{times.Wednesday.open ? "Open" : "Close"}</div>
                  </label>
                </div>
                <div className='day-time-container'>
                  {times.Wednesday.open ? <>
                    <input type="time" className='form-control'></input>
                    <span>TO</span>
                    <input type="time" className='form-control'></input>
                  </> : <span>Store Closed</span>}
                </div>
              </li>
              <li>
                <h4>Thursday</h4>
                <div className="checkboxes__item">
                  <label className="checkbox style-e">
                    <input type="checkbox" checked={times.Thursday.open} name="Thursday" onChange={changeOpens}/>
                    <div className="checkbox__checkmark"></div>
                    <div className="checkbox__body">{times.Thursday.open ? "Open" : "Close"}</div>
                  </label>
                </div>
                <div className='day-time-container'>
                  {times.Thursday.open ? <>
                    <input type="time" className='form-control'></input>
                    <span>TO</span>
                    <input type="time" className='form-control'></input>
                  </> : <span>Store Closed</span>}
                </div>
              </li>
              <li>
                <h4>Friday</h4>
                <div className="checkboxes__item">
                  <label className="checkbox style-e">
                    <input type="checkbox" checked={times.Friday.open} name="Friday" onChange={changeOpens}/>
                    <div className="checkbox__checkmark"></div>
                    <div className="checkbox__body">{times.Friday.open ? "Open" : "Close"}</div>
                  </label>
                </div>
                <div className='day-time-container'>
                  {times.Friday.open ? <>
                    <input type="time" className='form-control'></input>
                    <span>TO</span>
                    <input type="time" className='form-control'></input>
                  </> : <span>Store Closed</span>}
                </div>
              </li>
              <li>
                <h4>Saturday</h4>
                <div className="checkboxes__item">
                  <label className="checkbox style-e">
                    <input type="checkbox" checked={times.Saturday.open} name="Saturday" onChange={changeOpens}/>
                    <div className="checkbox__checkmark"></div>
                    <div className="checkbox__body">{times.Saturday.open ? "Open" : "Close"}</div>
                  </label>
                </div>
                <div className='day-time-container'>
                  {times.Saturday.open ? <>
                    <input type="time" className='form-control'></input>
                    <span>TO</span>
                    <input type="time" className='form-control'></input>
                  </> : <span>Store Closed</span>}
                </div>
              </li>
            </ul>
      <div className='button-same-level-col'>
        <PrimaryButton name="Next" type="submit" width="full"/>
        <GhostButton name="Back" onClick={props.backPage} type="button" width="full" />
      </div>
     </form>   
  )
}

export default StepFour;
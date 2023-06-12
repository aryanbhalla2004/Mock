import {useState } from 'react';
import { PrimaryButton } from '../../../../../common/components/button/Button';
import { TextInput } from '../../../../../common/components/input/Input';
import { IEmployeeSignUpForm, timing} from '../../../../../common/interfaces/CommonInterfaces';

interface prop {
  formData: IEmployeeSignUpForm,
  updateFields: (fields: Partial<IEmployeeSignUpForm>) => void,
  setFormData: (item: any) => void,
  showModal: boolean,
  setShowModal: (val: boolean) => void,
}

const StepFour = (props: prop) => {
  const [showSecondInterval, setShowSecondInterval] = useState(false);
  
  const clearSingleInterval = (location: string) => {
    props.setFormData((prev: any) => {
      return {...prev, availability: {...prev.availability, [location]: []}}
    });
  }

  const removeSingleInterval = (interval: timing, day: any) => {
    props.setFormData((prev: any) => {
      return {...prev, availability: {...prev.availability, [day]: [...prev.availability[day].filter((item: any) => item != interval)]}}
    });
  }
  
  return (
    <>
    <div className='auth-12-register-step-3-greater mb-1 animate-entry-signup'>
      <div className='auth-12-register-header-text mb-1'>
        <h2 className='mb-0'>Whats your availability like?</h2>
        <p className='note-small-text mt-0 mb-1'>It's important to be available at the given time, otherwise there's a risk of being banned.</p>
      </div>
      <div className='current-schudel-holder'>
        <table>
          <thead>
            <th>Weekdays</th>
            <th>Working Hours</th>
            <th>Total Hours</th>
            <th></th>
          </thead>
          <tbody>
            {/* {Object.entries(props.formData?.availability).map((item: any, index) => (
              <tr className={item[1].length <= 0 ? "two-item-class" : ""}>
              <td>{item[0]}</td>
              {item[1].length > 0 ? <>
                <td>
                  {item[1].map((element: any) => (
                    <div onClick={e => removeSingleInterval(element, item[0])} className='timing-frame'>{element.start} - {element.end} <i className="bi bi-x"></i> </div>
                  ))}
                </td>
                <td>{item[1].length > 0 && "5 Hours"}</td>
                <td>{item[1].length > 0 && <button className='clear-button-avability' type='button' onClick={e => clearSingleInterval(item[0])}><i className="bi bi-calendar2-x"></i> Clear</button>}</td>
                </> : <td><button onClick={e => props.setShowModal(true)} type="button"><i className="bi bi-plus-circle-dotted"></i> Add Hours</button></td>}
            </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>   
    {props.showModal && <div className='modal-popup-data'>
    <div className='container-box-wrapper'>
      <h2>Add Availability</h2>
      <button className='close-portal' type='button' onClick={e => props.setShowModal(false)}><i className="bi bi-x"></i></button>
      <ul className='day-time-container'>
        <li>
          <TextInput form="getUserHours" name="start" label="From" type="time" placeholder='Time' step="1800"/>
          <span>TO</span>
          <TextInput form="getUserHours" name="end" label="To" type="time" placeholder='Time' step="1800"/>
        </li>

        {showSecondInterval && <li>
          <TextInput form="getUserHours" name="start1" label="From" type="time" placeholder='Time'/>
          <span>TO</span>
          <TextInput form="getUserHours" name="end1" label="To" type="time" placeholder='Time'/>
        </li>}
        <button type='button' className='add-interva-small' onClick={e => setShowSecondInterval(!showSecondInterval)}>{!showSecondInterval ? <> <i className="bi bi-plus"></i> Add Another Interval </> : <> <i className="bi bi-dash-lg"></i> Remove Second Interval </>}</button>
      </ul>

      <div className='action-container-sechudel-container'>
        <div className="field-container-comp-input">
          <label className="form-label">Applies to:</label>
          <select form='getUserHours' name="targetDay">
            <option>All Days</option>
            <option>Sunday</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
          </select>
        </div>
        
        <PrimaryButton form='getUserHours' type='submit' name="Add"></PrimaryButton>
      </div>
    </div>
  </div>}
  </>
  )
}

export default StepFour;
import React from 'react'
import "./style.css";
import { PrimaryButton } from '../../../../../common/components/button/Button';
import { Loading } from '../../../../../common/components/loading/Loading';
interface prop {
  isLoading: boolean,
  activateFunction: () => void
}
export const FinalStep = (props: prop) => {
  return (
    <div className='content-box-loading-item-finish-auth'>

      <div className={props.isLoading ? "hide-box content-box-data" : "content-box-data"}>
        <i className="bi bi-check2-circle"></i>
        <h2>You're All Set!</h2>
        <p>Your registration for <span className='primary-text'>Zoobo</span> is complete, and you are now ready to start using our platform to its fullest potential.</p>
        <p className='emphaise-text'> - Lets start by Activating your account!</p>
        <PrimaryButton onClick={props.activateFunction} name="Activate Account"/>
      </div>

      {props.isLoading && 
        <div className='load-item-finsih-auth'>
          <Loading />
          <p>Initializing account settings...</p>
        </div>
      }
    </div>
  )
}

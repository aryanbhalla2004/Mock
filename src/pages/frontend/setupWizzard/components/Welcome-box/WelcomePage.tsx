import React from 'react'
import "./style.css";
import welcomeImg from "../../../../../assets/welcome.svg";
import celebrate from "../../../../../assets/confetti-svgrepo-com.svg";
interface prop {
  next: () => void,
}
export const WelcomePage = (props: prop) => {
  return (
    <div className='welcome-modal-setup-wizzard'>
      <h2>Welcome on Board! <img src={celebrate} /></h2>
      <p>We're excited to have you join us at Zoobo! We just need a little more information from you before you can dive into working with our crew. We can't wait to see you on the road! ~ <span className='primary-text'>Zoobo</span></p>
      <button onClick={() => props.next()}>Get Started <i className="bi bi-arrow-right"></i></button>
    </div>
  )
}

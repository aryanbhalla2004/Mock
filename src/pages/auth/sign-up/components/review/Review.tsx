import React from 'react'
import { IEmployeeSignUpForm } from '../../../../../common/interfaces/CommonInterfaces';
import "./style.css";

interface prop {
  formData: IEmployeeSignUpForm
}
export const Review = (props: prop) => {
  return (
    <div className='auth-12-register-step-agreement animate-entry-signup'>
      <div className='auth-12-register-header-text'>
        <h2>Terms and Conditions Agreement</h2>
        <p className='note-small-text mt-0 mb-1'>Please select the option below that best describes your current status. After making your selection, we may request that you provide supporting documents as evidence of the status you have indicated.</p>
        {/* <div className='mb-3'>
          <div className='dividing-line'>
            <div className='line-small'/>
              <span>Personal Information</span>
            <div className='line-big'/>
          </div>
          <div className='mt-3 single-row-2'>
            <div className="mb-3 col-md-6">
              <label htmlFor="emailAddress" className="form-label review-form-lable">First Name *</label>
              <p>{props.formData.fName}</p>
            </div>
            <div className="mb-3 col-md-6 ">
              <label htmlFor="emailAddress" className="form-label review-form-lable">Last Number *</label>
              <p>{props.formData.lName}</p>
            </div>
          </div>
          <div className="d-flex mt-3 single-row-2">
            <div className="mb-3">
              <label htmlFor="emailAddress" className="form-label review-form-lable">Phone Number *</label>
              <p>{props.formData.pNumber}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="emailAddress" className="form-label review-form-lable">Email Address *</label>
              <p>{props.formData.email}</p>
            </div>
          </div>
          <div className='d-flex mt-3 single-row'>
            <div className="mb-3 col-md-6 rm-padding-left box-container-field">
              <label htmlFor="emailAddress" className="form-label review-form-lable">Address *</label>
              <p>{props.formData.address.address} {props.formData.address.unit}, {props.formData.address.city} {props.formData.address.state}, {props.formData.address.country} {props.formData.address.postalCode}</p>
            </div>
            <div className="mb-3 col-md-6 rm-padding-left box-container-field">
              <label htmlFor="emailAddress" className="form-label review-form-lable">Date of Birth</label>
              <p>{props.formData.dob}</p>
            </div>
          </div>
          <div className='dividing-line'>
            <div className='line-small'/>
              <span>Availability</span>
            <div className='line-big'/>
          </div>
          <div className='mt-3 single-row-2'>
            <div className="mb-3 col-md-6">
              <label htmlFor="emailAddress" className="form-label review-form-lable">{props.formData.proof.addressType}</label>
              <p>Uploaded</p>
            </div>
            <div className="mb-3 col-md-6 ">
              <label htmlFor="emailAddress" className="form-label review-form-lable">{props.formData.proof.mainType}</label>
              <p>Uploaded</p>
            </div>
          </div>
          <div className='dividing-line'>
            <div className='line-small'/>
              <span>Government Status</span>
            <div className='line-big'/>
          </div>
          <div className='mt-3 single-row-2'>
            <div className="mb-3 col-md-6">
              <label htmlFor="emailAddress" className="form-label review-form-lable">{props.formData.proof.addressType}</label>
              <p>Uploaded</p>
            </div>
            <div className="mb-3 col-md-6 ">
              <label htmlFor="emailAddress" className="form-label review-form-lable">{props.formData.proof.mainType}</label>
              <p>Uploaded</p>
            </div>
          </div>
        </div> */}
        <div className="agreement-section-review-tab">
          <input type='checkbox'/>
          <p>I Agree with the Terms & Conditions</p>
        </div>
      </div>
    </div>
  )
}

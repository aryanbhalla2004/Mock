import React, { useEffect } from 'react'
import { PageHeader } from '../../../common/components/page-header/PageHeader'
import "./style.css";

export const PrivacyPolicy = () => {
  useEffect(() => {window.scroll(0,0)}, []);
  return (
    <>
      <PageHeader header="Privacy Policy" path={["Home", "Privacy Policy"]}/>
      <div className='privacy-container'>
        <div className='content-sizing privacy-wrapper'>
          <h2>// Jay Code</h2>
        </div>
      </div>
    </>
  )
}

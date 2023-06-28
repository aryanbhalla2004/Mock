import React, { useEffect } from 'react'
import { PageHeader } from '../../../common/components/page-header/PageHeader'
import "./style.css";

export const TermOfServices = () => {
  useEffect(() => {window.scroll(0,0)}, []);
  return (
    <>
      <PageHeader header="Term of Services" path={["Home", "Term of Services"]}/>
      <div className='term-container'>
        <div className='content-sizing term-wrapper'>
          <h2>// Jay Code</h2>
        </div>
      </div>
    </>
  )
}

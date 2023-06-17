import React from 'react'
import { Loading } from '../loading/Loading'
import './style.css';
export const LoadingMain = () => {
  return (
    <div className='main-container-main-loader'>
      <Loading />
      <p>Loading...</p>
    </div>
  )
}

import React from 'react'
import { Header } from '../../../common/components/header/Header'
import { Outlet } from 'react-router-dom'

export const Landing = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

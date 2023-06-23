import React from 'react'
import { Header } from '../../../common/components/header/Header'
import { Outlet } from 'react-router-dom'
import { motion } from "framer-motion";
import { Footer } from '../../../common/components/footer/Footer';

export const Landing = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Header/>
      <Outlet/>
      <Footer />
    </motion.div>
  )
}

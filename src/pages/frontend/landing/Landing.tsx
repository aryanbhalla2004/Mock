import React, {useEffect, useRef, useState} from 'react'
import { Header } from '../../../common/components/header/Header'
import { Outlet } from 'react-router-dom'
import { motion } from "framer-motion";
import { Footer } from '../../../common/components/footer/Footer';
import { BackToTop } from '../../../common/components/back-to-top/BackToTop';

export const Landing = () => {
  const sectionRef = {working: useRef<any>(null), mission: useRef<any>(null), benefits:useRef<any>(null), faq: useRef<any>(null)};
  const [isVisible, setIsVisible] = useState(false);
  
  const handleScroll = () => {
    const isTop = window.scrollY < 300;
    setIsVisible(!isTop);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Header sectionRefs={sectionRef}/>
      <Outlet context={[sectionRef]}/>
      <Footer sectionRefs={sectionRef}/>
      <BackToTop isVisible={isVisible}/>
    </motion.div>
  )
}

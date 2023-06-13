import React from 'react'
import video from '../../../assets/banner.mp4';
import "./style.css";
import { PrimaryButton } from '../../../common/components/button/Button';

export const Homepage = () => {
  return (
    <>
      <section className='banner-slide-main-page'>
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className='overlay-cover-banner'>
          <div className='content-sizing slide-show-content'>
            <h1>Get Started with <span className='primary-text'>Zoobo</span> <br/>and Grow with Us in Canada.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni fugiat dignissimos minima alias, nam facere voluptate sapiente dolor, iste ipsa a. Hic facere nemo aliquid tempora atque provident architecto perferendis.</p>
            <PrimaryButton name="Explore Zoobo"/>
          </div>
        </div>
      </section>

      <section className='about-container'>
        <div className='content-sizing about-section'>
          <span  className='primary-text'>What we do</span>
          <h1>Be part of our crew the next big thing with Zoobo</h1>
          <div className='about-content-data'>
            <p>Founded in 2012, SkipTheDishes is headquartered in the Heart of Canada, Winnipeg, Manitoba – with additional offices in Toronto, Calgary and Saskatoon. Now a division of Just Eat Takeaway.com, our headquarters are the home to over 3900 staff supporting the company across all pillars from customer service and account management to technology and senior leadership. </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quae nulla consequatur, blanditiis fuga commodi deleniti minima eos ducimus dolore nobis eum sed illum temporibus. Minus at perspiciatis asperiores tenetur?</p>
          </div>
        </div>
      </section>
    </>
  )
}

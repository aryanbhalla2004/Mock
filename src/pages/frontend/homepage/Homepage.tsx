import React, { useEffect, useRef, useState } from 'react'
import video from '../../../assets/banner.mp4';
import "./style.css";
import { PrimaryButton, PrimaryLinkBtn } from '../../../common/components/button/Button';
import home1 from "../../../assets/home.jpg";
import home2 from "../../../assets/home2.jpg";
import home3 from "../../../assets/home3.jpg";
import { useOutletContext } from 'react-router-dom';
export const Homepage = () => {
  const [faqOpenSection, setFaqOpenSection] = useState<String>("");
  const [sectionRef] = useOutletContext<any>();

  const openBox = (location: String) => {
    if(faqOpenSection === location) {
      setFaqOpenSection("");
    } else {
      setFaqOpenSection(location);
    }
  }

  return (
    <>
      <section className='banner-slide-main-page'>
        <video autoPlay loop muted>
          <source src="https://mock-storage-760ca2fb231245-dev.s3.ca-central-1.amazonaws.com/public/banner.mp4" type="video/mp4" />
        </video>
        <div className='overlay-cover-banner'>
          <div className='content-sizing slide-show-content'>
            <h1>Get Started with <span className='primary-text'>Zoobo</span> <br/>and Grow with Us in Canada.</h1>
            <p>Our bright and airy offices serve to create an open environment where collaboration is the default, and ideas are freely exchanged to create a culture of inclusivity and innovation.</p>
            <PrimaryButton name="Explore Zoobo"/>
          </div>
        </div>
      </section>

      <section className='about-container' id="work-at-zoobo" ref={sectionRef.working}>
        <div className='content-sizing about-section'>
          <span  className='primary-text'>Working at Zoobo</span>
          <h1>Be part of our crew the next big thing with Zoobo</h1>
          <div className='about-content-data'>
            <p>Founded in 2012, SkipTheDishes is headquartered in the Heart of Canada, Winnipeg, Manitoba – with additional offices in Toronto, Calgary and Saskatoon. Now a division of Just Eat Takeaway.com, our headquarters are the home to over 3900 staff supporting the company across all pillars from customer service and account management to technology and senior leadership. </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quae nulla consequatur, blanditiis fuga commodi deleniti minima eos ducimus dolore nobis eum sed illum temporibus. Minus at perspiciatis asperiores tenetur?</p>
          </div>
        </div>
      </section>

      <section className='working-for-zoobo-home-page' ref={sectionRef.mission}>
        <div className='content-sizing starting-up'>
          <div className='images-item-about-startup'>
            <div>
              <img src={home1}></img>
              <img src={home2}></img>
            </div>
            <img src={home3}></img>
          </div>
          <div className='item-content-startup'>
            <span className='primary-text'>Mission & Values</span>
            <h2>Choose, Care, Get Paid. <i>The Art of Making Wise Choices and Earning Money</i></h2>
            <ul className='list-ul-startup-main-page'>
              <li>
                <div className='number-line-startup'>
                  <div className='number-step-list'>1</div>
                  <div className='line-vertical-main'></div>
                </div>
                <div className='single-step-list-main'>
                  <h2>Search for a house to shovel snow</h2>
                  <p>It is a long established fact that a reader will be distracted.</p>
                </div>
              </li>
              <li>
                <div className='number-line-startup'>
                  <div className='number-step-list'>2</div>
                  <div className='line-vertical-main'></div>
                </div>
                <div className='single-step-list-main'>
                  <h2>Pick & Filter from a homes near your area</h2>
                  <p>It is a long established fact that a reader will be distracted.</p>
                </div>
              </li>
              <li>
                <div className='number-line-startup'>
                  <div className='number-step-list'>3</div>
                </div>
                <div className='single-step-list-main'>
                  <h2>Go through the work order, and make money</h2>
                  <p>It is a long established fact that a reader will be distracted.</p>
                </div>
              </li>
            </ul>
          </div>
        </div> 
      </section>

      <section className='benefits-section-container' ref={sectionRef.benefits}>
        <div className='content-sizing benefits-wrapper'>
          <span className='primary-text'>Benefits</span>
          <h2>The Advantages and Benefits of Choosing to Work with Zoobo</h2>
          <div>
            <ul>
              <li>
                <i className="bi bi-clock-history"></i>
                <h3>Flexible Work</h3>
                <p>Premium medical, dental, and vision insurance plans, including fertility reimbursement. Monthly gym and wellness reimbursement.</p>
              </li>
              <li>
                <i className="bi bi-headset"></i>
                <h3>Live Support</h3>
                <p>Premium medical, dental, and vision insurance plans, including fertility reimbursement. Monthly gym and wellness reimbursement.</p> 
              </li>
              <li>
                <i className="bi bi-wallet2"></i>
                <h3>Any-Time Payment</h3>
                <p>Premium medical, dental, and vision insurance plans, including fertility reimbursement. Monthly gym and wellness reimbursement.</p>   
              </li>
              <li>
                <i className="bi bi-shield-plus"></i>
                <h3>Standby Payment</h3>
                <p>Premium medical, dental, and vision insurance plans, including fertility reimbursement. Monthly gym and wellness reimbursement.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>


      <section className='benefits-section-container top-border-faq' ref={sectionRef.faq}>
        <div className='content-sizing benefits-wrapper'>
          <span className='primary-text'>FAQ</span>
          <h2>Frequently Asked Questions: Your Queries Answered</h2>

          <ul className='faq-list-container-main-page'>
            <li className={faqOpenSection === "one" ? "active faq" : "faq"} onClick={() => openBox("one")}>
              <div className="question">
                <h3>How and when was Civi started?</h3>
                <i className="bi bi-chevron-down"></i>
              </div> 
              <div className="answer">
                <p>Zoobo is a professional snow removal company that provides high-quality services to its customers. Our experienced team of snow removal specialists is dedicated to ensuring that our clients receive prompt, efficient and effective service. We use state-of-the-art equipment and the latest techniques to provide fast and reliable snow removal services.</p>
              </div>
            </li>
            <li className={faqOpenSection === "two" ? "active faq" : "faq"} onClick={() => openBox("two")}>
              <div className="question">
                <h3>How can I join your team?</h3>
                <i className="bi bi-chevron-down"></i>
              </div> 
              <div className="answer">
                <p>Zoobo is a professional snow removal company that provides high-quality services to its customers. Our experienced team of snow removal specialists is dedicated to ensuring that our clients receive prompt, efficient and effective service. We use state-of-the-art equipment and the latest techniques to provide fast and reliable snow removal services.</p>
              </div>
            </li>
            <li className={faqOpenSection === "three" ? "active faq" : "faq"} onClick={() => openBox("three")}>
              <div className="question">
                <h3>How is Civi different from other places to post jobs?</h3>
                <i className="bi bi-chevron-down"></i>
              </div> 
              <div className="answer">
                <p>Zoobo is a professional snow removal company that provides high-quality services to its customers. Our experienced team of snow removal specialists is dedicated to ensuring that our clients receive prompt, efficient and effective service. We use state-of-the-art equipment and the latest techniques to provide fast and reliable snow removal services.</p>
              </div>
            </li>
            <li className={faqOpenSection === "four" ? "active faq" : "faq"} onClick={() => openBox("four")}>
              <div className="question">
                <h3>What types of candidates can I find on Civi?</h3>
                <i className="bi bi-chevron-down"></i>
              </div> 
              <div className="answer">
                <p>Zoobo is a professional snow removal company that provides high-quality services to its customers. Our experienced team of snow removal specialists is dedicated to ensuring that our clients receive prompt, efficient and effective service. We use state-of-the-art equipment and the latest techniques to provide fast and reliable snow removal services.</p>
              </div>
            </li>
          </ul>

          <div className='faq-child-contact-info'>
            <h3>Have a question not covered in the FAQ?</h3>
            <PrimaryLinkBtn name="Contact us" path="help-center"/>
          </div>
          
        </div>
      </section>
    </>
  )
}

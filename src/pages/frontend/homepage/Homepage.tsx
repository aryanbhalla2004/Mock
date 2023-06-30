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
            <p>We are thrilled to offer exciting opportunities in the snow cleaning industry. Join our team and be part of a dynamic workforce dedicated to providing exceptional service, fostering teamwork, and embracing growth.</p>
            <PrimaryButton name="Explore Zoobo"/>
          </div>
        </div>
      </section>

      <section className='about-container' id="work-at-zoobo" ref={sectionRef.working}>
        <div className='content-sizing about-section'>
          <span  className='primary-text'>Working at Zoobo</span>
          <h1>Be part of our crew the next big thing with Zoobo</h1>
          <div className='about-content-data'>
            <p>As a snow remover, your role is crucial in ensuring safe and accessible environments
              during the winter season. You will be responsible for efficiently clearing snow from
              driveways, walkways, and other designated areas, using various tools and equipment.
              Attention to detail, reliability, and the ability to work in cold weather conditions are
              essential to deliver high-quality service and help customers navigate through the winter
              months with peace of mind. 
            </p>
            <p>You can also expect varied workloads as you may get a variety of customers with different residential areas, ranging from small sidewalks to large driveways. We expect that the schedule is flexible as snowfall is unpredictable. Physical demand requires you to have physical strength and endurance while operating machines and other machinery.</p>
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
                <p>Due to weather being unpredictable we ask that you have a flexible schedule so that customers can receive their service.</p>
              </li>
              <li>
                <i className="bi bi-list-check"></i>
                <h3>Job variety</h3>
                <p>this company serve a large number of clients from different residential area, and you will have more exposure and provide employees with a vast amount of job sites.</p> 
              </li>
              <li>
                <i className="bi bi-wallet2"></i>
                <h3>Any-Time Payment</h3>
                <p>Anytime pay as soon as you finish the job you will receive the money that you have earned after 24 hours and before 48 hours.</p>   
              </li>
              <li>
                <i className="bi bi-shield-plus"></i>
                <h3>Standby Payment</h3>
                <p>Even if you can’t find work due to a weather-related incident you will receive a small sum.</p>
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
                <h3>What qualifications or experience do I need to work?</h3>
                <i className="bi bi-chevron-down"></i>
              </div> 
              <div className="answer">
                <p>It is recommended that you have a driver’s license so that it is easier to get from place to place but the license is not required for the job.</p>
              </div>
            </li>
            <li className={faqOpenSection === "two" ? "active faq" : "faq"} onClick={() => openBox("two")}>
              <div className="question">
                <h3>Will the company provide the necessary equipment and gear?</h3>
                <i className="bi bi-chevron-down"></i>
              </div> 
              <div className="answer">
                <p>The company expects employees to bring their own equipment and gear or is needed they can borrow the equipment that can be provided.</p>
              </div>
            </li>
            <li className={faqOpenSection === "three" ? "active faq" : "faq"} onClick={() => openBox("three")}>
              <div className="question">
                <h3>What is the company&#39;s approach to teamwork and collaboration among snow cleaning employees?</h3>
                <i className="bi bi-chevron-down"></i>
              </div> 
              <div className="answer">
                <p>Effective teamwork and collaboration are vital in the snow cleaning business to ensure efficient operations and timely completion of tasks. We do not limit our employees to just ne, if need be they can ask a friend to help them and they can do the job together.</p>
              </div>
            </li>
            <li className={faqOpenSection === "four" ? "active faq" : "faq"} onClick={() => openBox("four")}>
              <div className="question">
                <h3>How does the company handle work assignments for snow cleaning employees?</h3>
                <i className="bi bi-chevron-down"></i>
              </div> 
              <div className="answer">
                <p>we have a well-structured system for handling work assignments for snow- cleaning employees. When it comes to allocating tasks, you will have an app downloaded which will show you all the potential houses that you could work with.</p>
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

import React from 'react'
import "./Pricingad.css"
import pricingad from "../assets/Images/pricingad.png"

const Pricingad = () => {
  return (
    <div>
        <div className='pricingadmain'>
               <div className='pricingadmaindiv'>
                       <div className='pricingadmaindivtop'>
                          <h2>
                          Advisory services to get the most from Jira Align with the help of product and practice experts
                          </h2>
                          <p>To ensure a successful agile transformation and software adoption, our Enterprise Advocate team will work with you to recommend a set of services that best fit your organization’s needs. During this consultation you will be able to more accurately understand pricing, deployment timelines, and specific requirements. </p>
                          
                       </div> 
                       <div className='pricingadmaindivbottom'>
                           <div className='pricingadmaindivbottomleft'>
                           <button className='bg-primary border text-light fw-semibold'>Contact us</button>
                           <button className=' fw-semibold'>Learn more</button>
                           </div>
                           <img src={pricingad} alt="" />
                       </div>
               </div>
        </div>
    </div>
  )
}

export default Pricingad
import React from 'react'
import "./AtlasPricingSecond.css"
import PricingSecond from "../assets/Images/AtlasPricingSecondImage.svg"

const AtlasPricingSecond = () => {
  return (
    <div className='AtlasPricingSecond'>
                 <div className="Pricing">
                     <div className="blue">
                     <div className="Pleft">
                              <h2>Not quite there yet? No problem.</h2> 
                              <p>For customers still early in their agile maturity Atlassian recommends starting with Jira Premium with Advanced Roadmaps. </p>
                              <button><a href="/">Learn more <i class="ri-arrow-right-line"></i></a></button>
                    </div>
                              <div className="Pright"><img src={PricingSecond}  alt="" /></div>
                     </div>
                 </div>
    </div>
  )
}

export default AtlasPricingSecond
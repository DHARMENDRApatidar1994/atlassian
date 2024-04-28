import React from 'react'
import "./PricingAddOns.css"
import AddOnsLogo1 from "../assets/Images/AddOnsLogo1.svg"
import AddOnsLogo2 from "../assets/Images/AddOnsLogo2.svg"
import AddOnsLogo3 from "../assets/Images/AddOnsLogo3.svg"


const PricingAddOns = () => {
  return (
    <div className='PricingAddOns' >
                <div className="AddOns">
                    <div className="AddOnsCards">
                              <h1>Add-ons</h1>
                              <div className="Addonscard">
                              <div className="one">
                                  <img src={AddOnsLogo1} alt="" />   
                                  <h5>Enterprise insights</h5>  
                                  <p>Professional data layer for custom reporting.</p>  
                                  <h6 ><span>Starting at</span> $3,750<span> / month</span></h6>
                              </div>   
                                <div className="one">
                                        <img src={AddOnsLogo2} alt="" />
                                         <h5>Team tool connector</h5>
                                         <p>Free bi-directional connector to your Atlassian tool of choice. (Third-party team connectors will be a $10,000 fee)</p>
                                         <h6 >Free</h6>
                                        </div>        
                                <div className="one">
                                        <img src={AddOnsLogo3} alt="" />
                                        <h5>Hosting options</h5>
                                        <p>Custom deployment options to meet your security needs</p>
                                        <h6  >Custom quote</h6> 
                              </div>             
                              </div>
                    </div>
                </div>
    </div>
  )
}

export default PricingAddOns
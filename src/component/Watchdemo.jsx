import React from 'react'
import "./Watchdemo.css"
import watchdemoimage from "../assets/Images/watchdemoimage.webp"
import watchdemoimage2 from "../assets/Images/watchdemoimage2.webp"

const Watchdemo = () => {
  return (
    <div>
        <div className='watchdemomain'>
            <div className='watchdemoleft'>
                  <img src={watchdemoimage} alt="" /> 
            </div>
            <div className='watchdemoright'>
                    <h6>SEE IT IN ACTION</h6>
                    <h4>Watch the demo</h4>
                    <h5>Learn about the benefits, key features, and use cases for Jira Align.</h5>
                     <button>Watch now</button>
            </div>
        </div>

        <div className='watchdemomain2'>
            <div className='watchdemoleft'>
                  <img src={watchdemoimage2} alt="" /> 
            </div>
            <div className='watchdemoright'>
                    <h6>VIEW OUR ADVISORY SERVICES</h6>
                    <h4>Browse Jira Align Services</h4>
                    <h5>Learn how Onboarding Success, Technical Guidance, and Practice Development accelerate your  journey to scaled agile success.</h5>
                     <button>Browse services</button>
            </div>
        </div>

    </div>
  )
}

export default Watchdemo
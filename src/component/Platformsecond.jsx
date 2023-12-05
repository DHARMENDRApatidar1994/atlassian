import React from 'react'
import "./Platformsecond.css"
import platformimg1 from "../assets/Images/platformimg1.jpg"

const Platformsecond = () => {
  return (
    <div>
        <div className='Platformsecondmain'>
                  <div className='Platformsecond'> 
                       <h2>Visualize, manage and execute work at every level of scale</h2>
                       <h5>Create an integrated view</h5>
                       <p>Break down company silos by creating one source of truth across all teams without disrupting day-to-day operations.</p>
                  </div>

                 <div className='Platformsecondimg'>
                    <img src={platformimg1} alt="" />
                    </div> 
        </div>
    </div>
  )
}

export default Platformsecond
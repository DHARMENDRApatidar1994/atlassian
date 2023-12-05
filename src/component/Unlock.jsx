import React from 'react'
import "./Unlock.css"
import unlockmainimage from "../assets/Images/unlockmainimage.webp"

const Unlock = () => {
  return (
    <div>
        <div className='unlockmain'>
            <div className='unlockleft'>
                <h2>Unlock the agility of your enterprise</h2>
                <h5>Jira Align connects your business strategy to technical execution</h5>
                 <div className='watchdiv'>
                    <button>Watch demo</button>
                    <h6>Attend live demo  <i className="ri-arrow-right-line ms-1"></i> </h6>
                 </div>
            </div>
            <div className='unlockright'>
                  <img src={unlockmainimage} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Unlock
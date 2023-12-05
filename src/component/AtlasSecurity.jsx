import React from 'react'
import "./AtlasSecurity.css"
import AtlassecurityImg from "../assets/images/AtlasSecurity.webp"

const AtlasSecurity = () => {
  return (
    <div className='AtlasSecurity'>
           <div className="security">
                    <div className="securityLeft"><img src={AtlassecurityImg} alt="" /></div>
                    <div className="securityRight">
                              <h1>Trust in Jira Align</h1>
                              <p>Security is built into the fabric of our products. Learn more about our approach.</p>
                              <button>Learn more</button>
                    </div>
                 </div>
    </div>
  )
}

export default AtlasSecurity


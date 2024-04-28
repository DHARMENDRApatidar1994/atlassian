import React from 'react'
import "./Transformation.css"
// import transformation from "../assets/Images/Transformation.webp"
import eyeLogo from "../assets/Images/eyeLogo.webp"
import uerLogo from "../assets/Images/userLogo.webp"
import valueLogo from "../assets/Images/ValueLogo.webp"



const Transformation = () => {
  return (
    <div className='Transformation'>
          <div className="Transform">
                    <div className="ConnectedTeams">
                     <h1>Transformation starts with connected teams<span></span></h1>
                    </div>
                    <div className="Medium">
                        <div className="left">
                              <div className="content">
                                        <img src={eyeLogo} alt="" />
                                        <h1>Get real-time visibility</h1>
                                        <p>Aggregate team-level data to make all work visible across your enterprise in real-time.</p>
                              </div>
                              <div className="content">
                              <img src={uerLogo} alt="" />
                                        <h1>Align every team to strategy</h1>
                                        <p>Get everyone on the same page to determine scope, roadmaps and dependencies teams and portfolios.</p>
                              </div>
                              <div className="content">
                              <img src={valueLogo} alt="" />
                                        <h1>Optimize for customer value</h1>
                                        <p>Connect strategic investments with customer value created to drive outcomes faster and more reliably.</p>
                              </div>
                        </div>
                        {/* <div className="right"><img src={transformation} alt="" /></div> */}
                    </div>
          </div>
    </div>
  )
}

export default Transformation
import React from 'react'
import "./PlateformCards.css"
import PlateformSecurity from "../assets/images/AtlasSecurity.webp"
import PlateformImgOne from "../assets/images/PlateformImageone.svg"

const PlateformCards = () => {
  return (
    <div className='PlateformCards'>
             <div className="Pbox">
                    <div className="box">
            <img src={PlateformImgOne} alt="" />
            <h5>Stay open & integrated</h5>
            <p>Maximize the impact of your current agile and team tools to connect work and move faster. Find out how our connectors and API can unlock visibility across a fragmented tooling landscape.</p>
            <button><a href="/">Learn more <i class="ri-arrow-right-line"></i></a></button>
                    </div>
                    <div className="box">
                    <img src={PlateformSecurity} alt="" />
            <h5>A secure & scalable foundation</h5>
            <p>Our platform’s cloud architecture scales on demand, providing consistent performance and reliability. Customer trust is at the center of what we do and why security is our top priority.</p>
            <button><a href="/">Learn more <i class="ri-arrow-right-line"></i></a></button>      
                    </div>
             </div>
    </div>
  )
}

export default PlateformCards
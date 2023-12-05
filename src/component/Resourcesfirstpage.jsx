import React from 'react'
import "./Resourcesfirstpage.css"
import unlockmainimage from "../assets/Images/unlockmainimage.webp"
import resourcesboximage1 from "../assets/Images/resourcesboximage1.png"
import resourcesboximage2 from "../assets/Images/resourcesboximage2.png"
import resourcesboximage3 from "../assets/Images/resourcesboximage3.png"

const Resourcesfirstpage = () => {
  return (
    <div>
        <div className='Resourcesfirstpagemain'>
            <div className='Resourcesfirstpageleft'>
                <h2>Jira Align resource library</h2>
                <h5>Grow your skills and keep up with industry trends with our ebooks, tip sheets, webinars and more</h5>
            </div>
            <div className='Resourcesfirstpageright'>
                  <img src={unlockmainimage} alt="" />
            </div>
        </div>


<div className='resourcespage'>
</div>         

         <div className='Resourcessecondpage'>
                   <h2>Featured resources</h2>

               <div className='Resourcessecondpagediv'>
                    <div className='Resourcessecondpagebox'>
                         <img src={resourcesboximage1} alt="" /> 
                         <h6>DEMO</h6>
                         <h4>Jira Align demo</h4> 
                         <h5 className='text-primary'>Learn more <i class="ri-arrow-right-line"></i></h5>
                    </div>
                    <div className='Resourcessecondpagebox'>
                         <img src={resourcesboximage2} alt="" /> 
                         <h6>REPORT</h6>
                         <h4>2022 Gartner Magic Quadrant for enterprise agile planning</h4> 
                         <h5 className='text-primary'>Learn more <i class="ri-arrow-right-line"></i></h5>
                    </div>
                    <div className='Resourcessecondpagebox'>
                         <img src={resourcesboximage3} alt="" /> 
                         <h6>WEBINAR</h6>
                         <h4>Remote PI Planning is here to stay</h4> 
                         <h5 className='text-primary'>Learn more <i class="ri-arrow-right-line"></i></h5>
                    </div>
                </div>    
        </div>

    </div>
  )
}

export default Resourcesfirstpage
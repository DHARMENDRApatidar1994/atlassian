import React , {useState} from 'react'
import "./Enterprise.css"
import LeftImg from "../assets/Images/EnterpriseLeft.webp"
import Content1Img from "../assets/Images/content1.png"
import Content2Img from "../assets/Images/content2.webp"
import Content3Img from "../assets/Images/content3.webp"
import Contet4Img from "../assets/Images/contet4.png"
import Contet5Img from "../assets/Images/content5.webp"
import Contet6Img from "../assets/Images/content6.webp"


const Enterprise = () => {

          const [hoveredContent1, setHoveredContent1] = useState(null);
  const [hoveredContent2, setHoveredContent2] = useState(null);

  const handleContentHover1 = (contentNumber) => {
          setHoveredContent1(contentNumber);
        };
      
        const handleContentHover2 = (contentNumber) => {
          setHoveredContent2(contentNumber);
        };
      
  return (
    <div className='Enterprise'>
              <div className="enterprise">
              <div className="enterpriseTop">
                    <p>TOOLS FOR EVERY ROLE<h1>Enterprise teams thrive with Jira Align</h1></p>
               </div>
               <div className="Emedium">
                    <div  className="left shadow">
                    {hoveredContent1 === 1 && (
              <img src={Content1Img} alt="" />
            )}
            {hoveredContent1 === 2 && (
              <img src={Content2Img} alt="" />
            )}
            {hoveredContent1 === 3 && (
              <img src={Content3Img} alt="" />
            )}
            {hoveredContent1 === null && (
              <img src={LeftImg} alt="" />
            )}
                    </div>
                    <div className="right">
                       <div className="content1" onMouseEnter={() => handleContentHover1(1)} onMouseLeave={() => handleContentHover1(null)}>
                              <div className="line"></div>
                              <div className="text">
                                        <h1>Portfolio managers</h1>
                                        <p>Communicate the value of funding strategic initiatives to investors, analysts, and employees</p>
                              </div>
                       </div>
                       <div className="content2" onMouseEnter={() => handleContentHover1(2)} onMouseLeave={() => handleContentHover1(null)}>
                               <div className="line"></div>
                              <div className="text">
                              <h1>Executives</h1>
                              <p>Connect strategy to execution to drive enterprise value of your high-level mission and vision</p>
                              </div>
                       </div>
                       <div className="content3"  onMouseEnter={() => handleContentHover1(3)} onMouseLeave={() => handleContentHover1(null)}>
                              <div className="line"></div>
                              <div className="text">
                              <h1>Delivery teams</h1>
                              <p>Execute against sprint work that tracks back to your company’s high-level strategy</p>
                              </div>
                       </div>
                    </div>
               </div>

               {/* ------------------------------------------------------- */}
               <div className="Emedium2">
                    <div className="left shadow">
                    {hoveredContent2 === 1 && (
              <img src={Contet4Img} alt="" />
            )}
            {hoveredContent2 === 2 && (
              <img src={Contet5Img} alt="" />
            )}
            {hoveredContent2 === 3 && (
              <img src={Contet6Img} alt="" />
            )}
            {hoveredContent2 === null && (
              <img src={Contet4Img} alt="" />
            )}
                    </div>
                    <div className="right">
                       <div className="content1" onMouseEnter={() => handleContentHover2(1)} onMouseLeave={() => handleContentHover2(null)}>
                              <div className="line"></div>
                              <div className="text">
                                        <h1>Program Managers and RTEs</h1>
                                        <p>Ensure programs run smoothly and resources are perfectly allocated for on-time delivery</p>
                              </div>
                       </div>
                       <div className="content2" onMouseEnter={() => handleContentHover2(2)} onMouseLeave={() => handleContentHover2(null)}>
                               <div className="line"></div>
                              <div className="text">
                              <h1>Product managers</h1>
                              <p>Manage idea intake, prioritize the feature backlog, and track progress with real-time roadmaps</p>
                              </div>
                       </div>
                       <div className="content3"  onMouseEnter={() => handleContentHover2(3)} onMouseLeave={() => handleContentHover2(null)}>
                              <div className="line"></div>
                              <div className="text">
                              <h1>Transformation teams</h1>
                              <p>Drive digital transformation with a framework customized to scale agile in your enterprise</p>
                              </div>
                       </div>
                    </div>
               </div>

               
             

    </div>
    </div>
  )
}

export default Enterprise
import React from 'react'
import "./Flexible.css"
import notebook from "../assets/Images/notebook.webp"
import extendheader from "../assets/Images/extendheader.webp"
import extendheaderright from "../assets/Images/extendheaderright.webp"

const Flexible = () => {
  return (
    <div>
        <div className='flexiblemain'>
            <div className='flexibleleft'>
                <h3>Flexible support for agile frameworks</h3>
                <p>The only platform that lets you implement and extend any framework at scale, including hybrid and custom frameworks.</p>
            </div>
            <div className='flexibleright'>
                  <div className='flexiblebox'>
                       <h5>Scaled Agile Framework (SAFe)</h5>
                  </div>
                  <div className='flexiblebox'>
                       <h5>Spotify</h5>
                  </div>
                  <div className='flexiblebox'>
                       <h5>Scrum@Scale</h5>
                  </div>
                  <div className='flexiblebox'>
                       <h5>Disciplined Agile</h5>
                  </div>
                  <div className='flexiblebox'>
                       <h5>Custom or hybrid</h5>
                  </div>
                  <div className='flexiblebox'>
                       <h5>LeSS</h5>
                  </div>
            </div>
        </div>

        <div className='notebookmain'>
                  <div className='notebook'>
                        <img src={notebook} alt="" />
                        <div className='notebookright'>
                        <h2>What are the differences between the top scaling frameworks?</h2>
                        <button>Get the PDF</button>
                        </div>
                        
                  </div>
        </div>


        <div className='extendmain'>
               <div className='extendcontent'>
                     <h6>THE BEST OF TEAM AND ENTERPRISE-LEVEL PLANNING</h6>
                     <h2>Extend the power of teams working in Jira Software</h2>
               </div>

               <div className='extendheader'>
                      <div className='extendheaderleft'>
                          <img src={extendheader} alt="" />
                      </div>
                      <div className='extendheaderright'>
                            <img src={extendheaderright} alt="" />
                            <div className='extendheaderrightcontent'>
                                <h3>A seamless Jira integration</h3>
                                <h5>With Jira Align, keep your teams working in Jira Software while extending coordination and planning to the program, portfolio and enterprise.</h5>
                            </div>
                      </div>
               </div>
        </div>

    </div>
  )
}

export default Flexible
import React from 'react'
import "./PlansAndFeatures.css"

const PlansAndFeatures = () => {
  return (
    <div className='PlansAndFeatures'>
          <div className="Box">
                   <h3>Plans and features</h3>  
                   <div className="Boxes">
                    <div className="text">
                              <h5>Standard plan</h5>
                              <p>This plan gives access to all functionality for collaborative planning, management, execution and analysis/reporting/visualization across Program and/or Team modules.</p>
                    </div>
                    <div className="text">
                              <h5>Enterprise plan</h5>
                              <p>This plan gives access to all functionality of Jira Align Standard plus access to Enterprise, Portfolio, and Solution modules.</p>
                    </div>
                   </div>
          </div>
    </div>
  )
}

export default PlansAndFeatures
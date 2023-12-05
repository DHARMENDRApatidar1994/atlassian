import React from 'react'
import "./AtlasContactUs.css"
import PricingContact from "../assets/images/PricingAtlasContact.svg"

function AtlasContactUs() {
  return (
    <div className='AtlasContactUs'>
           <div className="PRICING">
                     <div className="blue">
                        <div className="Pleft">
                              <h2>Get 4x the number of users!</h2> 
                              <p>Jira Align has two types of users: Full and integrated. Full users have access to all of Jira Align's capabilities, while integrated users are those that perform their work in Jira or another team tool and whose work items are synchronized to Jira. Integrated users only need limited, team-level access to Jira Align.</p>
                              <p>You don't pay for the team-level users. That's right, we give you 4x that number of integrated users for free for each full Jira Align user!</p>
                              <button><a href="/">Contact us <i class="ri-arrow-right-line"></i></a></button>
                          </div>
                              <div className="Pright"><img src={PricingContact}  alt="" /></div>
                     </div>
                 </div>
    </div>
  )
}

export default AtlasContactUs
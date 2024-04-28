import React from 'react'
import "./AtlasLeader.css"
import AtlasleaderImg from "../assets/Images/AtlasLeader.webp"

const AtlasLeader = () => {
  return (
    <div className='AtlasLeader'>
                 <div className="leader">
                    <div className="leaderLeft"><img src={AtlasleaderImg} alt="" /></div>
                    <div className="leaderRight">
                              <h1>Leader in 2022 Gartner Magic Quadrant</h1>
                              <p>Find out why Jira Align was named a Leader in the latest assessment of Enterprise Agile Planning Tools</p>
                              <button>Download report</button>
                    </div>
                 </div>
    </div>
  )
}

export default AtlasLeader
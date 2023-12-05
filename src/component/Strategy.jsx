import React from 'react'
import './Strategy.css'
import strategy from '../assets/Images/strategy1.svg'
import portfolio from '../assets/Images/portfolio1.svg'
import portfolio2 from '../assets/Images/portfolio2.svg'
import portfolio3 from '../assets/Images/portfolio3.svg'
import portfolio4 from '../assets/Images/portfolio4.svg'
import portfolio5 from '../assets/Images/portfolio5.svg'
import portfolio6 from '../assets/Images/portfolio6.svg'
import portfolio7 from '../assets/Images/portfolio7.svg'
import portfolio8 from '../assets/Images/portfolio8.svg'

const Strategy = () => {
    const portfolioimage = [
        {
            img:portfolio,
            title:"Portfolio management",
            para:"Communicate the value of funding strategic initiatives to investors, analysts, and employees.",

        },
        {
            img:portfolio2,
            title:"Product management",
            para:"Manage idea intake, prioritize your feature backlog, and track progress with live roadmaps.",

        },
        {
            img:portfolio3,
            title:"Program management",
            para:"Track and resolve program risks, impediments, and dependencies while keeping everyone informed.",

        },
        {
            img:portfolio4,
            title:"Release train engineers",
            para:"Ensure programs run smoothly and resources are perfectly allocated to nail on-time delivery.",

        },
    
        {
            img:portfolio5,
            title:"Finance",
            para:"Ensure Initiatives maximize value, right-size scope and stay within budget from end to end.",

        },
        {
            img:portfolio6,
            title:"Executives",
            para:"Drive enterprise value of your high-level mission and vision while connecting strategy to execution.",

        },
        {
            img:portfolio7,
            title:"Transformation teams",
            para:"Drive digital transformation with a framework customized to scale agile in your enterprise.",

        },
        {
            img:portfolio8,
            title:"Product delivery teams",
            para:"Execute against sprint work that tracks back to your organization's high-level strategy.",

        },
    ]
  return (
    <div>
        <div className='strategy'>
            <h1>Accelerate strategy and unlock your agile potential</h1>
            <h6>No matter your role, framework, or use case, get all the tools you need for transformational agility in one place.</h6>
            <h3></h3>
            <h2>Solutions for teams at every level</h2>
            <img src={strategy} alt="" />
            
        </div>
        <div className='portfolioimages'>
         {portfolioimage?.map((portfolio,index)=>(
            <div className='portfolioindiv' key={index}>
            <img src={portfolio.img} alt="" /> 
            <h2>{portfolio.title}</h2>  
            <hr />
            <p>{portfolio.para}</p> 
            <h6>Learn more <i class="ri-arrow-right-line"></i></h6>
          </div>
         ))}
               
            </div>
    </div>
  )
}

export default Strategy
import React from 'react'
import agile from "../assets/images/agile.svg"

const Console = () => {
  return (
    <div className='w-100 d-flex flex-wrap justify-content-center align-items-center'>
      <div className='w-75 row d-flex justify-content-center align-items-center  '>
        <div className='col-12 col-lg-4'>
          <h4>Consolidating agile tools?</h4>
          <p >Ready to standardize on Atlassian tools? We can help you move your data and get you going quickly and easily.</p>
          <button className='text-primary border bg-light p-1 px-2 rounded'>Get Started</button>
        </div>
        <div className='col-12 col-lg-6'>
          <img src={agile} alt="" />
        </div>
      </div>
        
   
    </div>
  )
}

export default Console
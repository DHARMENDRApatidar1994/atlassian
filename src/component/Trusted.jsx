import React from 'react'
import './Trusted.css'
import anthem from '../assets/Images/anthem.webp'
import homeland from '../assets/Images/homeland.webp'
import nielsen from '../assets/Images/nielsen.webp'
import dimension from '../assets/Images/dimension.webp'
import ncr from '../assets/Images/ncr.webp'

const Trusted = () => {
  return (
    <div>
        <div className='w-100 d-flex flex-column align-items-center'>
            <div className='w-75 text-center mt-5'>
                <h6 className='fw-bold'>TRUSTED BY CUSTOMERS WORLDWIDE</h6>
            </div>
            <div className='anthem w-75 mt-4'>
               <img src={anthem} alt="" /> 
               <img src={nielsen} alt="" /> 
               <img src={homeland} alt="" /> 
               <img src={dimension} alt="" /> 
               <img src={ncr} alt="" /> 
            </div>
            <div className='w-75 mt-5'>
                <hr />
            </div>
        </div>
    </div>
  )
}

export default Trusted
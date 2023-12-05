import React from 'react'
import collaboration from '../assets/Images/collaboration.jpg'
import sight from '../assets/Images/sight.jpg'
import drive from '../assets/Images/drive.jpg'

const Collaboration = () => {
  return (
    <div className='shadow p-3 mb-5'>
        <div className='container d-flex flex-wrap align-items-center mt-5'>
            <div className='col-12 col-lg-4 p-2'> <h4>Scale up collaboration without slowing teams down</h4>
            <p>Link people, work, and time across every level of the company - from strategy-setting to teams shipping.</p>
            <p>Proactively manage cross-team dependencies to improve your ability to deliver predictably.</p>
            </div>
            <div className='col-12 col-lg-8 p-2'>
                <img src={collaboration} alt="" className='w-100' />
            </div>

        </div>
        <div className='container d-flex flex-lg-row flex-column-reverse align-items-center mt-5'>
        <div className='col-12 col-lg-8 p-2'>
                <img src={sight} alt="" className='w-100' />
            </div>
            <div className='col-12 col-lg-4 p-4'> <h4>Don’t lose sight of your transformation</h4>
            <p>Continuously reinforce agile best practices with embedded training, checklists, framework mapping, and assessments.</p>
            </div>
            

        </div>
        <div className='container d-flex flex-wrap align-items-center mt-5'>
        
            <div className='col-12 col-lg-4 p-2'> <h4>Drive for outcomes, not just outputs</h4>
            <p>Create an environment of continuous improvement through continuous delivery and shortened feedback loops.</p>
            </div>
            <div className='col-12 col-lg-8 p-2'>
                <img src={drive} alt="" className='w-100' />
            </div>
            

        </div>
    </div>
  )
}

export default Collaboration
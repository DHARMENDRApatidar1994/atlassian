import React from 'react'

const Standard = () => {
  return (
    <div>
       <table class="container table table-bordered mt-5">
  <thead>
    <tr className='bg-dark'>
      {/* <th scope="col">#</th> */}
      <th scope="col" className='fs-4 fw-normal'>Features</th>
      <th scope="col"  className='fs-4 fw-normal'>Standard</th>
      <th scope="col"  className='fs-4 fw-normal'>Enterprise</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='fs-5 p-3'>Roadmaps</td>
      <td><i class="ri-check-line fs-2 text-success"></i></td>
      <td><i class="ri-check-line fs-2 text-success"></i></td>
    </tr>
    <tr>
      <td className='fs-5 p-3'>Kanban</td>
      <td><i class="ri-check-line fs-2 text-success"></i></td>
      <td><i class="ri-check-line fs-2 text-success"></i></td>
    </tr>
    <tr>
      <td className='fs-5 p-3'>Objectives</td>
      <td><i class="ri-check-line fs-2 text-success"></i></td>
      <td><i class="ri-check-line fs-2 text-success"></i></td>
    </tr>
    <tr>
      <td className='fs-5 p-3'>Program Board</td>
      <td><i class="ri-check-line fs-2 text-success"></i></td>
      <td><i class="ri-check-line fs-2 text-success"></i></td>
    </tr>
    <tr>
      <td className='fs-5 p-3'>Risks</td>
      <td><i class="ri-check-line fs-2 text-success"></i></td>
      <td><i class="ri-check-line fs-2 text-success"></i></td>
    </tr>
    <tr>
      <td className='fs-5 p-3'>Dependency Maps</td>
      <td><i class="ri-check-line fs-2 text-success"></i></td>
      <td><i class="ri-check-line fs-2 text-success"></i></td>
    </tr>
    <tr>
      <td className='fs-5 p-3'>Work Tree</td>
      <td><i class="ri-check-line fs-2 text-success"></i></td>
      <td><i class="ri-check-line fs-2 text-success"></i></td>
    </tr>
    <tr>
      <td className='fs-5 p-3'>Standard Reports</td>
      <td><i class="ri-check-line fs-2 text-success"></i></td>
      <td><i class="ri-check-line fs-2 text-success"></i></td>
    </tr>
    <tr>
      <td className='fs-5 p-3'>Epic Financials</td>
      <td className='fs-2'>-</td>
      <td><i class="ri-check-line fs-2 text-success"></i></td>
    </tr>
    <tr>
      <td className='fs-5 p-3'>Value Engineering</td>
      <td className='fs-2'>-</td>
      <td><i class="ri-check-line fs-2 text-success"></i></td>
    </tr>
    <tr>
      <td className='fs-5 p-3'>Visioning & Ideation</td>
      <td className='fs-2'>-</td>
      <td><i class="ri-check-line fs-2 text-success"></i></td>
    </tr>
    <tr>
      <td className='fs-5 p-3'>Personas</td>
      <td className='fs-2'>-</td>
      <td><i class="ri-check-line fs-2 text-success"></i></td>
    </tr>
   
    
   
  </tbody>
</table>
<h6 className='container text-primary fs-5 '>Show More</h6>
    </div>
  )
}

export default Standard
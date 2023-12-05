import React from 'react'
import "./AtlasForm.css"

const AtlasForm = () => {
  return (
    <div id='contact'  className='AtlasForm'>
              <div className="Form">
                    <div className="FormTop">
                              <p>READY TO TAKE THE NEXT STEP?</p>
                              <h1>Get in touch to get started</h1>
                    </div>
                    <div className="FormBottom">
                    <form className='AForm w-100 '>
  <div className="form-row d-flex">
    <div className="form-group col-md-6">
      <label for="inputEmail4">First Name*</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder=""  required />
    </div>
    <div className="form-group col-md-6 ms-2">
      <label for="inputPassword4">Last Name*</label>
      <input type="text" className="form-control" id="inputPassword4" placeholder="" required />
    </div>
  </div>
  <div className="form-row d-flex mt-4">
    <div className="form-group col-md-6 " >
      <label for="inputEmail4">Email*</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Please enter your work email." required />
    </div>
    <div className="form-group col-md-6 ms-2">
      <label for="inputPassword4">Company*</label>
      <input type="text" className="form-control" id="inputPassword4" placeholder=""  required/>
    </div>
  </div>
  <div className="form-group mt-4">
    <label for="inputAddress">Work Phone #*</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="" required />
  </div>
    <div className="form-group col-md-4 w-100 mt-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>Ak</option>
        <option>AL</option>
        <option>AR</option>
        <option>Ak</option>
        <option>CA</option>
        <option>CO</option>
        <option>CT</option>
        <option>IA</option>
        <option>ID</option>
      </select>
    </div>
    <div className="form-group col-md-4 w-100 mt-4">
      <label for="inputState">Company size*</label>
      <select id="inputState" className="form-control " required>
        <option selected>Select...</option>
        <option>1-10</option>
        <option>11-50</option>
        <option>51-25</option>
        <option>251-1k</option>
        <option>1k-5k</option>
        <option>5k-10k</option>
        <option>10k-50k</option>
        <option>50k-100k</option>
        <option>100k+</option>
      </select>
    </div>
    <div class="form-group col-md-4 w-100 mt-4">
      <label for="inputState">Request type*</label>
      <select id="inputState" className="form-control">
        <option selected>Select...</option>
        <option>Request a Demo</option>
        <option>Request a Price Quote</option>
        <option>Request More Information</option>
      </select>
    </div>
    
   
    <div class="form-group mt-4">
    <label for="inputAddress">Job Title</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="" />
  </div>

  <div class="form-group mt-4 mb-4">
     <p style={{fontWeight:"bolder"}}>
By signing up on this form, I acknowledge receipt of Atlassian's <a href=""> Privacy Policy.</a></p>
  </div>
  <button style={{padding:"0.5vmax 2vmax", backgroundColor:"blue", fontWeight:"600"}} type="submit" className="btn btn-primary">Submit</button>
</form>

 </div>



          </div>
</div>
   
  )
}

export default AtlasForm
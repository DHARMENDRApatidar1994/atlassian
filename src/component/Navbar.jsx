import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Images/boostuplogo.png'
import "./Navbar.css"




const Navbar = () => {
    return (
        <>
        <div className='w-100 shadow  d-flex justify-content-center align-items-center' style={{position: "fixed", zIndex: "999"}}>
            
            <nav class="w-100 navbar navbar-expand-lg bg-body-tertiary ">
            
                <div class="container-fluid ">
                    <img src={logo} alt="" width={200} height={50} />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-evenly">
                            
                            <li class="nav-item dropdown d-flex justify-content-evenly align-items-center">
                                <Link class="nav-link active text-primary fw-semibold" to="/" role="button"> HOME</Link>
                               
                            </li>
                            <li class="nav-item dropdown d-flex justify-content-evenly align-items-center">
                                <Link class="nav-link active text-primary fw-semibold" to="/solutions" role="button">SOLUTIONS</Link>
                               
                            </li>

                           
                            
                            <li class="nav-item dropdown d-flex justify-content-evenly align-items-center">
                                <Link class="nav-link active text-primary fw-semibold" to="/platform" role="button">PLATFORM</Link>
                               
                            </li>
                            <li class="nav-item dropdown d-flex justify-content-evenly align-items-center">
                                <Link class="nav-link active text-primary fw-semibold" to="/resources" role="button">RESOURSES</Link>
                               
                            </li>
                           
                          
                            <li class=" nav-item dropdown d-flex justify-content-evenly align-items-center  ">
                               
                               
                            <Link class="nav-link active text-primary fw-semibold" to="/" role="button">SERVICES</Link>
                            </li>
                            <li class=" nav-item dropdown d-flex justify-content-evenly align-items-center  ">
                               
                                <Link class="nav-link active text-primary fw-semibold" to="/pricing" role="button">PRICING</Link>
                               
                             
                               </li>
                               <li class="navbutton  nav-item dropdown   ">
                               
                                <Link class="nav-link active" to="/" role="button"><button className='btn btn-primary'>Get in touch</button></Link>
                               
                             
                               </li>
                               


                           

                           

                            


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Navbar
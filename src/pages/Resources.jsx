import React, { useEffect, useRef } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Getintouch from '../component/Getintouch'
import Resourcesfirstpage from '../component/Resourcesfirstpage'
import AtlasResources from '../component/AtlasResources'
// import { useParams } from 'react-router-dom'

const Resources = () => {
  return (
   
    <div>
        <Navbar/>
        <Resourcesfirstpage/>
        <AtlasResources/>
        <Getintouch/>
        <Footer/>
    </div>
  )
}

export default Resources
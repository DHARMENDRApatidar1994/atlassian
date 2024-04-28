import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Unlock from '../component/Unlock'
// import Transformation from '../component/Transformation'
import Watchdemo from '../component/Watchdemo'
import Enterprise from '../component/Enterprise'
import Trusted from '../component/Trusted'
import Flexible from '../component/Flexible'
// import AtlasLeader from '../component/AtlasLeader'
import AtlasSecurity from '../component/AtlasSecurity'
import AtlasForm from '../component/AtlasForm'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Unlock/>
        {/* <Transformation/> */}
        <Watchdemo/>
        <Enterprise/>
        <Flexible/>
        {/* <AtlasLeader/> */}
        <Trusted/>
        <AtlasSecurity/>
        <AtlasForm/>
        <Footer/>
    </div>
  )
}

export default Homepage
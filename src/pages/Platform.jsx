import React from 'react'
import Integrate from '../component/Integrate'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Console from '../component/Console'
import Collaboration from '../component/Collaboration'
import Platformsecond from '../component/Platformsecond'
import PlateformCards from '../component/PlateformCards'

const Platform = () => {
  return (
    <div>
        <Navbar/>
        <Integrate/>
        <Platformsecond/>
         <Collaboration/>
         <PlateformCards/>
        <Console/>
        <Footer/>
    </div>
  )
}

export default Platform
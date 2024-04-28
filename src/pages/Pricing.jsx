import React from 'react'
import Jiraalign from '../component/Jiraalign'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import AtlasPricingSecond from '../component/AtlasPricingSecond'
import Pricingthird from '../component/Pricingthird'
import Frequently from '../component/Frequently'
import PlansAndFeatures from '../component/PlansAndFeatures'
// import AtlasContactUs from '../component/AtlasContactUs'
import Pricingad from '../component/Pricingad'
import PricingAddOns from '../component/PricingAddOns'
import Standard from '../component/Standard'
import AtlasTableTwo from '../component/AtlasTableTwo'

const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <Jiraalign/>
        <AtlasPricingSecond/>
        <Pricingthird/>
        <PlansAndFeatures/>
        <Standard/>
        {/* <AtlasContactUs/> */}
        <AtlasTableTwo/>
        <Pricingad/>
        <PricingAddOns/>
        <Frequently/>
        <Footer/>
    </div>
  )
}

export default Pricing
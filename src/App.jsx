import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Resources from './pages/Resources'
import Solutions from './pages/Solutions'
import Pricing from './pages/Pricing'
import Platform from './pages/Platform'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/solutions' element={<Solutions/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
        <Route path='/platform' element={<Platform/>}/>
      </Routes>
    </div>
  )
}

export default App
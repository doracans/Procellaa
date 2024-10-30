import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import MenuSection from '../components/MenuSection'
import RivewSection from '../components/RivewSection'
import QualitySection from '../components/QualitySection'
import Footer from '../components/Footer'

const LandingPages = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-2 px-6'>
        <Hero/>
        <About/>
        <MenuSection />
        <RivewSection />
        <QualitySection />
        
      </div>
      <Footer/>
    </div>
  )
}

export default LandingPages

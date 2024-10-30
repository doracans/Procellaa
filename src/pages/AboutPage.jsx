import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <>
        <Navbar/>
    <div className='max-w-7xl mx-auto px-6 mb-24'>
        <About/>
      </div>
      <Footer/>
    </>

  )
}

export default AboutPage

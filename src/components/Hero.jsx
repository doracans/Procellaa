import React from 'react'
import background from "../assets/background.png"
import { useNavigate } from 'react-router-dom'


const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className='max-w-[1100px] mx-auto p-9'>
        <div className='max-h-[530px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-black-200 max-h-[530px] bg-white/50 flex flex-col justify-center'>
                <h1 className='text-4xl sm:text-5xl lg:text-7xl text-center tracking-wide font-semibold mt-12'>  Transforming Spaces Crafting Comfort</h1>
                <div className="flex justify-center my-10">
            <button onClick={() => navigate('/Cart')} className="bg-black text-white py-3 px-12 mx-3 rounded-full">
               Shop now
            </button>
            <button onClick={() => navigate('/Nopage')} className="py-2 px-14 mx-3 rounded-full border">
              Learn More
            </button>
        </div>
        
            </div>
            <img className='w-full max-h-[530px] object-cover rounded-[80px]' src={background} alt="" />
        </div>
    </div>
  )
}

export default Hero

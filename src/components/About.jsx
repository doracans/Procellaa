import React from 'react'
import aboutUs from "../assets/aboutUs.png"
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center pt-24">
    <div className="grid lg:grid-cols-2">
        <div>
       <img className="ml-14" src={aboutUs} alt="aboutUs" width={278} height={10} />
       </div>
            <div className='justify-center '>
                <h1 className='mt-2 font-semibold  text-[23px] '>Welcome to Procella, your ultimate <br />destination <br />
                    for transforming spaces and crafting <br /> comfort through <br />
                    high-quality furniture.</h1> <br />
                <p className="pt-12 text-[13px]" >Procella stands out as a trendsetter, offering an extensive
                    range of <br />collections spanning contemporary,
                    classic, and modern styles. Whether it's <br />your living room or bedroom, each Procella piece is designed
                    to seamlessly <br /> integrate into your home, providing a harmonious blend of aesthetics and <br />functionality.</p>
                <div className="pt-9">
                    <button onClick={() => navigate('/Nopage')} className="bg-black text-white py-2 px-6
                      rounded-full drop-shadow-2xl">
                        read more
                    </button>
                </div>
            </div>
    </div>
    </div>
  )
}

export default About

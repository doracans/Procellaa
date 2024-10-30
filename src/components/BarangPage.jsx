import React, { useState } from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import kursikuning from "../assets/kursikuning1.png"
import { Data } from '../data/Data'
import Icons2 from './Icons2'
import { useNavigate } from 'react-router-dom'


const BarangPage = () => {
    const [kursi] = useState(Data)
    const navigate = useNavigate()
    return (
        <div>
            <Navbar />
            <div className="flex justify-center bg-[#FEF8EA] pt-16 pb-16">
                <div className="grid lg:grid-cols-2">
                    <div>
                        <img className="ml-14" src={kursikuning} alt="aboutUs" width={278} height={10} />
                    </div>
                    <div className='justify-center'>
                        <h1 className='font-semibold text-[60px] '>
                            Milberget</h1>
                        <p className="pt-3 text-[13px]" >
                            Natural beauty and comfort in an elegant design. Crafted with premium <br />
                            wood, they add a warm touch to any space. Ergonomic design ensures a <br />
                            perfect balance between aesthetics and comfort. Smooth and durable <br />
                            wood surface. Choose simple beauty and high quality for your space.</p>
                        <p className=" pt-6 text-[23px] text-[#E3BA9C] font-medium">$50.00</p>
                        <div className="pt-28">
                            <button onClick={() => navigate('/Cart')}className="bg-black text-white py-2 px-6
                      rounded-full drop-shadow-2xl">
                                Buy Now
                            </button>
                            <div className='pt-9'>
                            <Icons2/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 lg:grid-cols-3  py-24 bg-white gap-5 px-3'>
      {kursi.map((item, index) => (
        <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-[15px] bg-[#FEF8EA] mx-3'>
          <div className='pl-8 pt-7 font-semibold'>
            <p>{item.name}</p>
          </div>
          <div className='pl-8 py-3'>
            <p>
              {item.price}
            </p>
          </div>
          <div className='flex justify-center'>
            <img src={item.image} alt={item.name} className='rounded-[18px]' />
          </div>
          <div className='flex justify-between px-2 py-4'>
            <p><button onClick={() => navigate('/Cart')} className="bg-white border text-black font-semibold py-2 rounded-full px-10 ml-2 drop-shadow-2xl">Buy</button></p>
            <p>
              <span><button onClick={() => navigate('/Barang2')} className="bg-black text-white font-semibold py-2 rounded-full px-5 mr-2 border drop-shadow-2xl">Lean More</button></span>
            </p>
          </div>
        </div>
      ))}
    </div>
            <Footer />
        </div>

    )
}

export default BarangPage

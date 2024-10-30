import React, { useState } from 'react'
import { Data } from '../data/Data'
import { useNavigate } from 'react-router-dom'

const MenuSection = () => {
  //console.log(Data);
  const [kursi] = useState(Data)
  const navigate = useNavigate()
  return (
    //display kursi

    <div className='grid grid-cols-3 lg:grid-cols-3  py-24 bg-slate-900 mt-20 mb-5 gap-2 px-3'>
      {kursi.map((item, index) => (
        <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-[15px] bg-white mx-3'>
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
              <span><button onClick={() => navigate('/Barang')} className="bg-black text-white font-semibold py-2 rounded-full px-5 mr-2 border drop-shadow-2xl">Lean More</button></span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MenuSection

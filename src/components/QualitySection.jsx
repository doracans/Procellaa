import React, { useState } from 'react'
import { Data2 } from '../data/Data'


const QualitySection = () => {
    //console.log(Data);
    const [centang] = useState(Data2)
    return (
        <div className='py-14 pt-20'>
            <h1 className="text-3xl sm:text-3xl lg:text-3xl text-center font-semibold">Quality Without Compromise</h1>
            <div className="flex justify-center py-32">
                {/* <h1 className="text-3xl sm:text-3xl lg:text-3xl text-center ">Quality Without Compromise</h1> */}
                <div className='grid grid-cols-3 lg:grid-cols-3 gap-5'>
                    {centang.map((item, index) => (
                        <div key={index}>
                            <div className='flex justify-center'>
                                <img src={item.image} alt="" className='rounded-[18px]' />
                            </div>
                            <div className='text-center py-6 text-[25px] font-semibold'>
                                <p>{item.Title}</p>
                            </div>
                            <div className='text-center text-[17px]'>
                                <p>
                                    {item.Deskripsi}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default QualitySection
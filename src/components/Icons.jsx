import React, { useState } from 'react'
import { Data3 } from '../data/Data'

const Icons = () => {
   //console.log(Data);
   const [icon] = useState(Data3)
   return (
     //display kursi
     <div className='grid grid-cols-2 lg:grid-cols-6 gap-5'>
     {icon.map((item, index) => (
        <div key={index}>
            <div>
                <img src={item.image} alt="payment" width={26} />
            </div>
        </div>
     ))}
 </div>
)
}

export default Icons

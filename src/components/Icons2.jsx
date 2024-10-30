import React, { useState } from 'react'
import { Data3 } from '../data/Data'

const Icons2 = () => {
   //console.log(Data);
   const [icon] = useState(Data3)
   return (
     //display kursi
     <div className='grid grid-cols-2 lg:grid-cols-10 gap-2'>
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

export default Icons2

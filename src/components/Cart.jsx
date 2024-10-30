import React, { useState } from 'react'
import { PRODUCTS } from '../data/product'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const navigate = useNavigate()


  const [cartItems, setCartItems] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 })

  const addToCart = (id) => {
    setCartItems(cartItems => ({
      ...cartItems, [id]: cartItems[id] +
        1
    }))
  }

const subFromCart = (id) => {
       setCartItems(cartItems => ({...cartItems, [id]: cartItems[id] - 
       1}))
}
const removeFromCart = (id) => {
  setCartItems(cartItems => ({...cartItems, [id]: cartItems[id] = 
 0}))
}
const totalAmount =() => {
  let amount = 0;
  for(const key in cartItems){
    if(cartItems[key] > 0){
      let productInfo = PRODUCTS.find(product => product.id == Number(key))
      amount += Math.floor(cartItems[key] * productInfo.price)
    }
  }
  return amount;
}

  return (
    <>
    <Navbar/>
    <div className='flex flex-wrap justify-center items-center gap-10 p-8 pr-80'>
      {PRODUCTS.map(product => (
        <div key={product.id} className='border shadow-lg hover:scale-105 duration-300 rounded-[15px]  bg-[#FEF8EA] mx-2'>
          <div className='pl-8 pt-7 font-semibold'>
            <p>{product.productName}</p>
          </div>
          <div className='pl-8 py-3'>
            <p>
              {product.pricee}
            </p>
          </div>
          <div className='flex justify-center'>
            <img src={product.image} alt={product.productName} className='rounded-[18px] w-[200px] mx-5' />
          </div>
          <div className='flex justify-center px-2 py-4'>
            
            <p><button onClick={() => addToCart(product.id)}className="bg-white border text-black font-semibold py-2 rounded-full px-7 ml-2 drop-shadow-2xl ">Buy</button></p>

          </div>
        </div>
      ))}
      <div className='fixed right-0 top-0  bg-[#FEF8EA]  h-screen w-80 overflow-y-scroll rounded-[15px] p-5'>
       <p className='font-medium pt-12 text-[20px]'>Your Cart</p>
        {PRODUCTS.map(product => {
          if (cartItems[product.id] > 0) {
            return <>
             <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                <img className='w-20 h-20 my-4 rounded-[18px]' src={product.image} alt={product.productName} />
                X <p className='text-2xl font-bold pl-2'>{cartItems[product.id]}</p>
              </div>
              <div className='flex flex-col gap-2 font-bold'>
              <button onClick={() => removeFromCart(product.id)} className='text-red-500 bg-red-200 hover:bg-red-500 hover:text-white rounded
              p-2'>Remove</button>
              <button onClick={() => addToCart(product.id)} className='text-green-500 text-2xl hover:text-green-700'>+</button>
              <button onClick={() => subFromCart(product.id)} className='text-red-500 text-2xl hover:text-red-700'>-</button>
              </div>
            </div>
            <div className='flex item-center space-x-4 italic'>
              <p>{product.productName}</p>
              <p>-</p>
              <p>${product.price}</p>
            </div>
            </>
          }
        })

        }
        <div className='flex flex-wrap justify-center items-center gap-4 pt-12'>
        <p className='text-[24px] font-semibold pr-2'>Total:${totalAmount()}</p>
        <button onClick={() => navigate('/Payment')} className="bg-black text-white font-semibold py-2 rounded-full px-3 mr-2 border drop-shadow-2xl">Pay Now</button>
        </div>
         </div>
    </div>
    </>
  )
}

export default Cart

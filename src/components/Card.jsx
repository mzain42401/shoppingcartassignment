import React, { useContext } from 'react'
import { CartContext } from '../store/cartContext'

const Card = ({tittle,discription,price,elem,func ,btnvalue,index}) => {
  // const {cartData,setCartdata} =useContext(CartContext)
  
  // useContext(CartContext)
  return (
    <>
      <div className=' bg-white w-72 m-3 shadow-2xl shadow-gray-400 py-3 px-4 rounded'>
            <div>
              <img className='w-full h-44 rounded' src="https://media.wired.com/photos/5f52a44bb555bc55dbcdf5a8/master/w_2560%2Cc_limit/Gear-Wireless-Bluetooth-1226031847.jpg" alt="" />
            </div>

            <div>
              <h2 className='text-2xl'>{tittle}</h2>
            </div>

            <div>
              <p className='text-gray-400'>
                {discription}
              </p>
            </div>


            <div className='bg-gray-400 mt-2 h-[.5px] w-2/3 m-auto center'>
            </div>


            <div className='flex justify-between mt-4 items-center '>
              <p  >{price}</p>
              <div className='bg-indigo-600 py-1 px-4 rounded-full text-white cursor-pointer ' onClick={()=>func(elem,index)}>{btnvalue}</div>
            </div>
          </div> 
    </>
  )
}

export default Card

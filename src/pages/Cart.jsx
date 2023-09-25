import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { CartContext } from '../store/cartContext'

const Cart = () => {
  const {cartData}=useContext(CartContext)
  console.log(cartData);
  return (
    <>

    <Navbar/>
    <div className=' flex justify-center items-center flex-wrap pt-24'>

    {
      cartData?<></>:null
    }
    </div>
     
    </>
  )
}

export default Cart

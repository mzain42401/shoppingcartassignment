import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { CartContext } from '../store/cartContext'
import Card from '../components/Card'

const Cart = () => {
  const {cartData,setCartdata}=useContext(CartContext)
  const removeFromCartFunc=(elem,index)=>{
cartData.slice(index,1)
setCartdata([...cartData])
  }
  
  return (
    <>

    <Navbar/>
    <div className=' flex justify-center items-center flex-wrap pt-24'>

    {
      cartData?cartData.map((elem)=>{
return <Card key={elem.id} elem={elem} func={removeFromCartFunc} btnvalue={"remove from cart"}  tittle={elem.tittle} discription={elem.discription} price={elem.price}/>
      }) :<h1>Your Cart is empty</h1>
    }
    </div>
     
    </>
  )
}

export default Cart

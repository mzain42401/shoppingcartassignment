import React, { useContext } from 'react'
import myAuth from '../firebase/firebase'
import Card from '../components/Card'
import { CartContext } from '../store/cartContext'
import { ProductContext } from '../store/product/productContext'
import { signOut } from 'firebase/auth'

 const Home = () => {
const {productList}=useContext(ProductContext)
  const {cartData}=useContext(CartContext)
  const addToCartFunc=(elem)=>{
   
  }

 

  const removeFromCartFunc=(elem,index)=>{
   

   }



   const out =()=>{
    signOut(myAuth)
   }
  return (
    <>
    <button onClick={out}>signOut</button>
    <h1>zain</h1>

      <div className='bg-slate-100  w-full h-screen flex justify-center'>
        <div className='mt-32 w-full  flex justify-center flex-wrap  '>
          
 {productList?
  productList.map((elem,index)=>{
return(
  cartData.includes(elem)?
   <Card key={elem.id} elem={elem} index={index} func={removeFromCartFunc} btnvalue={"remove from cart"}  tittle={elem.tittle} discription={elem.discription} price={elem.price}/>:
   <Card key={elem.id} elem={elem} func={addToCartFunc} btnvalue={"Add to cart"} tittle={elem.tittle} discription={elem.discription} price={elem.price}/>
  )}):<h1>No Product is added</h1>
}

        
        </div>
      </div>

    </>
  )
}



export default Home
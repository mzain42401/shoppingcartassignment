import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
// import ProductContext from '../store/product/productContext'
import { ProductContext } from "../store/product/productContext"

export const Home = () => {

  const {productList}=useContext(ProductContext)
console.log(productList);
  return (
    <>

      <Navbar />
      <div className='bg-slate-100  w-full  flex justify-center'>
        <div className='mt-32 w-full p-1 flex justify-center flex-wrap  '>
          
 {productList?
  productList.map((elem)=>{
return <Card key={elem.id} tittle={elem.tittle} discription={elem.discription} price={elem.price}/>
  }):<h1>No Product is added</h1>
}

        
        </div>
      </div>

    </>
  )
}



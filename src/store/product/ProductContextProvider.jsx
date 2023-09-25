import React, { useState } from 'react'
import {ProductContext} from './productContext'

const ProductContextProvider = ({children}) => {
    const [productList,setProductList]=useState('')
  return (
    <>
      <ProductContext.Provider value={{productList,setProductList}}>
        {children}
      </ProductContext.Provider>
    </>
  )
}

export default ProductContextProvider

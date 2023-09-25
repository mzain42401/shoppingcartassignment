import React from 'react'
import { CartContext } from './cartContext'
const CartContextProvider = ({children}) => {
    const [cartData,setCartdata]=React.useState('')
  return (
    <>
    <CartContext.Provider  value={{cartData,setCartdata}}>
        {children}
    </CartContext.Provider>
      
    </>
  )
}

export default CartContextProvider

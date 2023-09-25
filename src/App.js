import React, { useState } from 'react'
import { Home } from './pages/Myhome'
import Cart from './pages/Cart'
import Post from './pages/Post'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartContextProvider from './store/CartContextProvider'
import ProductContextProvider from './store/product/ProductContextProvider';


const App = () => {

  return (
    <ProductContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/post" element={<Post />} />

        </Routes>

      </BrowserRouter>
    </CartContextProvider>
    </ProductContextProvider>

    // <Home/>
  )
}

export default App

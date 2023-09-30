import React, { useState } from 'react'
import Home from './pages/Myhome'
import Cart from './pages/Cart'
import Post from './pages/Post'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartContextProvider from './store/CartContextProvider'
import ProductContextProvider from './store/product/ProductContextProvider';
import Navbar from './components/Navbar'
import Login from './auth/Login'
import Signup from './auth/Signup'


const App = () => {

  return (
    <ProductContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
          <Route index  element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/post" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          </Route>

        </Routes>

      </BrowserRouter>
    </CartContextProvider>
    </ProductContextProvider>

    // <Home/>
  )
}

export default App

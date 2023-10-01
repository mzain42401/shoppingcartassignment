import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Order from './pages/Order';
import Cart from './pages/Cart';
import Allproducts from './pages/Allproducts';
import Dashboard from './pages/admin/Dashboard';
import Mystate from './context/data/mystate';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
const App = () => {
  return (
    <>
      <Mystate>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/order' element={<Order />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/allproducts' element={<Allproducts />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Mystate>
    </>
  )
}

export default App

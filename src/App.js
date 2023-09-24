import React from 'react'
import {Home} from './pages/Myhome'
import Cart from './pages/Cart'
import Post from './pages/Post'
import { BrowserRouter,Route,Routes } from 'react-router-dom'


const App = () => {

  return (

     <BrowserRouter>
<Routes>
  <Route  path="/" element={<Home/>}/>
  <Route  path="/cart" element={<Cart/>}/>
  <Route  path="/post" element={<Post/>}/>

</Routes>

    </BrowserRouter> 
  // <Home/>
  )
}

export default App

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='fixed w-full flex  justify-between bg-indigo-600 h-16 text-white items-center px-3'>
        <div className='text-3xl'>Shopping</div>
<ul className='flex justify-between items-center'>
<Link to='/'> <li className='mx-5'> HOME</li></Link>
<Link to='/cart'><li className='mx-5'>  CART</li></Link>
<Link to='/post'>  <li className='mx-5 text-indigo-600 border-2 border-white border-solid	 bg-white px-6 py-1 rounded-full hover:bg-indigo-600 hover:text-white hover:cursor-pointer'>  PRODUCT </li></Link>
    
</ul>
      </nav>
    </>
  )
}

export default Navbar

import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import './navbar.css'
import { Outlet } from 'react-router-dom';
const Navbar = () => {
  let [initial, setInitial] = useState(true)
  let navRef = useRef()

  const toggleIcons = () => {
    setInitial(!initial)
    showNav()
  }


  const showNav = () => {
    navRef.current.classList.toggle('active')
  }
  return (
    <>
      <nav   className=' navbar fixed w-full flex  justify-between  h-16 text-white items-center px-3'>
        <div className='text-3xl'>Shopping</div>
<ul ref={navRef} className='flex justify-between items-center'>
<Link to='/'> <li className='mx-5'> HOME</li></Link>
<Link to='/cart'><li className='mx-5 relative '>  CART <sup className='absolute top-[-10px] right-[-15px] bg-slate-50 h-4 w-4 rounded-full flex items-center	text-indigo-600 justify-center'>0</sup></li></Link>
<Link to='/login'> <li className='mx-5'> Login</li></Link>
<Link to='/signup'> <li className='mx-5'> Signup</li></Link>

<Link to='/post'>  <li className='mx-5 text-indigo-600 border-2 border-white border-solid	 bg-white px-6 py-1 rounded-full hover:bg-indigo-600 hover:text-white hover:cursor-pointer'>  PRODUCT </li></Link>
    
</ul>
<div className='navToggleBtn' onClick={toggleIcons}>
          {initial ? <MenuOutlined /> : <CloseOutlined />}
        </div>
      </nav>
      
      <Outlet/>
    </>
  )
}

export default Navbar

import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {BsCart} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import {RxCross1} from 'react-icons/rx'
import './navbar.css'
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
      <nav className='fixed z-50 navbar flex w-full bg-[#ff7900] text-white justify-between items-center px-5 h-16'>
        <div className='text-3xl'>Easy-Shopping</div>
        <ul ref={navRef} className='flex justify-between items-center'>
          <li className='mx-8 text-md'><Link to='/'>Home</Link></li>
          <li className='mx-8 text-md'><Link to='/order'>Order</Link></li>
          <li className='mx-8 text-md'><Link to='/allproducts'>all Product</Link></li>
          <li className='mx-8 text-lg relative'><Link to='/cart'><BsCart/> <sup className='absolute right-[-15px] rounded-xl p-[10px] text-white  top-[-15px] bg-[#000] h-4 w-4 flex justify-center items-center'>0</sup> </Link></li>
        </ul>
        
        <div className='navToggleBtn' onClick={toggleIcons}>{initial ? <FaBars/> : <RxCross1 />}</div>
      </nav>
    </>
  )
}

export default Navbar

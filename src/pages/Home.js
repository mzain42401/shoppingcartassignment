import React, { useContext } from 'react'
import Layout from '../components/layout/Layout'
import MyContext from '../context/data/mycontext'
import Image from '../images/landingpageImage.jpg' 
import Search from '../components/search/Search'
import ProductCard from '../components/productCard/ProductCard'
const Home = () => {
  const contextData= useContext(MyContext);
  const {data,color}=contextData
  return (
    <>
    <Layout>
    <div className="pt-8">
      <div className="flex bg-white h-screen container mx-auto">
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
              WELCOME TO <span className="text-[#ff7900]">EASY-SHOPPING</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              Welcome to my Personal website. Here you can get to know About
              me and as well as you can explore the blogs section and get to know
              what sort of things I post here.
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
            <button className="md:mt-0 mt-2 md:mr-0 mr-2 bg-[#ff7900] px-5 py-3 rounded-xl text-sm text-white hover:text-white shadow-xl hover:shadow-xl  hover:bg-[#ff963a]">About us</button> 
              <button className="md:mt-0 mt-2 ml-2 md:mr-0 mr-2 bg-[#ff7900] px-5 py-3 rounded-xl text-sm text-white hover:text-white shadow-xl hover:shadow-xl   hover:bg-[#ff963a]">Shop Now</button> 
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2" style={{clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"}}>
          <div className="h-full object-cover" >
            <img className='h-full object-cover' src={Image} alt="" />
            <div className="h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </div>
    <Search/>
    <ProductCard/>
    </Layout>
    </>
  )
}

export default Home

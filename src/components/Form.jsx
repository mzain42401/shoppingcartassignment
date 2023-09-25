import React, { useContext, useState } from "react"
// import { useNavigate  } from "react-router-dom";
// import database from "../firebase/firebase";
// import { push,ref } from "firebase/database";
// import Swal from 'sweetalert2'\
import { ProductContext } from "../store/product/productContext"

 function Form() {
  const {productList,setProductList}=useContext(ProductContext)
const [tittle,settitle]=useState('')
const [price,setPrice]=useState('')
const [discription,setDiscription]=useState('')


const addToCart=(e)=>{
e.preventDefault()
   let id=Math.random()*2562536752635;
   setProductList([...productList,{tittle,price,discription,id}])
}

//   const navigate = useNavigate();
//    let mykey=key.toFixed()
//    const putData=(e)=>{
//     e.preventDefault()
//     let title=titleRef.current.value;
// let price=priceRef.current.value;
// let discription=discrptionRef.current.value;

//     push(ref(database,'products/' ),{
//       title,
//       price,
//       discription,
//       mykey
//     } )

    
//     Swal.fire({
//       position: 'center',
//       icon: 'success',
//       title: 'Your Product added!  ',
//       showConfirmButton: false,
//       timer: 1500
//     })
//     navigate ('/')
//   }
 

 

 
  
    return (
      <>
       
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            
            <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
           New Product
            </h2>
          </div>
  
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6"  onSubmit={addToCart} >
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Product Title
                </label>
                <div className="">
                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={tittle}
                    onChange={(e)=>settitle(e.target.value)}
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  />
                </div>
              </div>

              

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Product Price
                </label>
                <div className="">
                  <input
                    id="price "
                    name="price"
                    type="number"
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 "
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Product Discription
                </label>
                <div className="">
                  <textarea
                    id="discription"
                    name="discription"
                    rows="4" cols="50"
                    value={discription}
                    onChange={(e)=>setDiscription(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-7.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " 
                  />
                </div>
              </div>

              {/* <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Product Image
                </label>
                <div className="">
                  <input
                    id="file "
                    type="file"
                    name="ImageStyle"
                    required
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}
  
            
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                 Post product
                </button>
              </div>
            </form>
  
            
          </div>
        </div>
      </>
    )
  }
  
  export default Form
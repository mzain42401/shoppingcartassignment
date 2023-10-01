import React, { useContext } from 'react'
import Layout from '../components/layout/Layout'
import MyContext from '../context/data/mycontext';

const Order = () => {
 
  const contextData= useContext(MyContext);
  const {data,color}=contextData
  return (
    <>
    <Layout>
<div>name : {data.name}</div>
<div>roll : {data.roll}</div>

<div>order</div>
    </Layout>
    </>
  )
}

export default Order

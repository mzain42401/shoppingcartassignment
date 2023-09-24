import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

import Card from '../components/Card'

export const Home = () => {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   // const database = firebase.database();
  //   const ref = database.ref("https://shopping-web-app-d8509-default-rtdb.firebaseio.com/");

  //   // Listen for changes in the data
  //   ref.on("value", (snapshot) => {
  //     const newData = snapshot.val();
  //     setData(newData);
  //   });
  // }, []);
  console.log(data);
  return (
    <>

      <Navbar />
      <div className='bg-slate-100 w-full  flex justify-center'>
        <div className='mt-32 w-full p-1 flex justify-center flex-wrap  '>
          


        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
      </div>

    </>
  )
}



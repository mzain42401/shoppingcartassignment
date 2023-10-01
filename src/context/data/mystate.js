import React from 'react'
import MyContext from './mycontext'
const mystate = ({children}) => {
    const data={
      name:'zain',
      roll:10
    }
    const color='red'
  return (
    <>
    <MyContext.Provider value={{data,color}}>
{children}
    </MyContext.Provider>
      
    </>
  )
}

export default mystate

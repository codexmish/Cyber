import React from 'react'
import NewArrival from './NewArrival'
import BestSellers from './BestSellers'

const HomeProducts = () => {
  return (
    <>
    <div className="container">
        <NewArrival/>
        <BestSellers/>
    </div>
    
    </>
  )
}

export default HomeProducts
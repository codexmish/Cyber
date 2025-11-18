import React from 'react'
import Banner from './Components/Banner'
import ProBanners from './Components/ProBanners'
import Catagory from './Components/Catagory'
import HomeProducts from './Components/HomeProducts'

const page = () => {
  return (
    <>
    <Banner/>
    {/* <ProBanners/> */}
    <Catagory/>
    <HomeProducts/>
    
    </>
  )
}

export default page
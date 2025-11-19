import React from 'react'
import Banner from './Components/Banner'
import ProBanners from './Components/ProBanners'
import Catagory from './Components/Catagory'
import HomeProducts from './Components/HomeProducts'
import ShowProduct from './Components/ShowProduct'
import ResShowProducts from './Components/ResShowProducts'
import DiscountProduct from './Components/DiscountProduct'
import SummerSale from './Components/SummerSale'

const page = () => {
  return (
    <>
    <Banner/>
    {/* <ProBanners/> */}
    <Catagory/>
    <HomeProducts/>
    <ShowProduct/>
    <ResShowProducts/>
    <DiscountProduct/>
    <SummerSale/>
    
    </>
  )
}

export default page
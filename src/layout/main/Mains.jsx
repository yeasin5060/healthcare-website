import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const Mains = () => {
  return (
   <>
        <Header/>
        <Navbar/>
            <Outlet/>
        <Footer/>
   </>
  )
}

export default Mains
import React from 'react'
import Header from '../Component/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'
import ScrollToTop from '../Component/ScrollToTop'

const AppLayout = () => {
  return (
    <div>
      <ScrollToTop/>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppLayout
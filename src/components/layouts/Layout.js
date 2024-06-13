import Footer from './Footer'
import Navbar from "./Navbar"
import React from 'react'

function Layout({children}) {
  return (
    <>
    <Navbar/>
     <main>{children}</main>
    <Footer/>
    </>  
  )
}
export default Layout

import Footer from './Footer'
import Navbar from "./Navbar"

function Layout({childern}) {
  return (
    <>
    <Navbar/>
     <main>{childern}</main>
    <Footer/>
    </>  
  )
}
export default Layout

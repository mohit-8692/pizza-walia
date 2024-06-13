import Image from "next/image";
// import useTheme from "next-theme/dist/useTheme";
import Link from "next/link";
// import {useTheme} from "next-themes"
const Navbar = () => {
    // const {theme,setTheme} = useTheme()
  return (
    <header className="text-white-100 stickey top-0 z-50 bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 body-font">
        <div className='container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center'>
            <Link href={"/"}
            className="flex title-font font-extrabold items-center uppercase text-gray-100">
                <Image alt='Navbarlogo' src={"/pizza-img.png"} width={60} height={60} />
            <p className='leading-5 text-xl mx-2'>Pizza Walia</p>
            </Link>

            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link href={"/cart"} className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center">
                    Cart
                    <Image src={'/cart-40.png'} height={40} width={40}/>
                </Link>
                <Link href={"/order"} className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center">
                    My Orders
                    <Image src={'/cart-40.png'} height={40} width={40}/>
                </Link>
                <Link href={"/login"} className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center">
                    Login
                    <Image src={'/login-50.png'} height={40} width={40}/>
                </Link>
                <Link href={"signup"} className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center">
                    Sign up
                    <Image src={'/signup-64.png'} height={40} width={40}/>
                </Link>
            </nav>

            {/* <button onClick={()=>setTheme(theme==="dark"?"light":"dark")} className="text-white bg-black rounded-full p-1 dark:text-black dark:bg-white flex items-center ">
                Dark/Light
            </button> */}
        </div>
    </header>
  )
}
export default Navbar

import Link from "next/link";
import { useState } from "react";

const Login= () => {
const [credentials,setCredentials] = useState({email:"",password:""});

  const handleSubmit =(e)=>{
    e.preventDefault();
  };
  const handleChange = (e)=>{
    setCredentials({...credentials, [e.target.name]:e.target.value});
  };
  return (
    <div style={{
      height:"90vh",
      backgroundColor:"green",
      backgroundSize:"cover"
    }}
    className='flex justify-center items-center'>
      <div className='container w-full max-w-md'>
        <form action="" 
        onSubmit={handleSubmit}
        className='bg-gray-100 dark:bg-gray-900 dark:text-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label htmlFor="email"
            className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2'>
              Username
            </label>
            <input type="text" name='email' placeholder="Enter username" className='shadow appearance-border border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none bg-gray-700' value={credentials.email} onChange={handleChange} />
          </div>

          <div className='mb-4'>
            <label htmlFor="password"
            className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2'>
              Password
            </label>
            <input type="password" placeholder="Enter password" name='password' className='shadow appearance-border border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none bg-gray-700' value={credentials.password} onChange={handleChange}/>
          </div>
          
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="border font-bold text-gray-900 dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 hover:text-gray-100"
            >
              Login
            </button>

            <Link href={'/signup'} style={{all: 'unset'}}>
            <button
            className="border font-bold text-gray-900 dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 hover:text-gray-100"
            >
            New User?
          </button>
          </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login



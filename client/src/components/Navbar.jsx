import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))
const  handleLogout =()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate('/')
}

  return (
    <div className=' h-20 w-full lg:px-20 px-4 pr-6 flex items-center justify-between border-b-1 border-gray-300'>

      <div className=''>
    <img src="/Logo.png" alt="" className='h-28 w-28 ' />
      </div>

      <div className='flex gap-8 md:gap-15 justify-center items-center'>
        
        <h2 className='font-semibold text-lg capitalize text-nowrap'>hyy, {user?.name || "Guest"}</h2>
        <button onClick={handleLogout} className=' px-8 py-2 bg-blue-600 text-white text-lg rounded-xl hover:shadow-lg cursor-pointer'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar

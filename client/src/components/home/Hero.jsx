import React, { useState } from 'react'

import { Link } from "react-router-dom";
 

const Hero = () => {
  const token = localStorage.getItem("token")
   const [menuOpen, setMenuOpen] = useState(false);
  return (
     <section className="font-[Poppins]">
      {/* Navbar */}
      <nav className="z-50 flex items-center justify-between w-full py-1 px-4 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-slate-800 text-sm">
        {/* Logo */}
        
         <img src="/Logo.png" alt="" className='h-26 w-26' />
         
       

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-12 transition duration-500 text-lg">
        <Link to="/" className='hover:text-[#432DD7]'>Home</Link>
        <Link to="/about" className='hover:text-[#432DD7]' >About Us</Link>
       <Link to="/contact" className='hover:text-[#432DD7]'>Contact</Link>
      
       
   
        </div>

         {/* Desktop Button */}

         {!token ? (
             

      <div className='flex items-center justify-center gap-6'>
         
       <Link 
  to="/login"
  className="hidden md:block px-6 py-2.5 text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all rounded-full cursor-pointer"
>
  Log In
</Link>
      <Link 
  to="/register"
  className="hidden md:block px-6 py-2.5 text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all rounded-full cursor-pointer"
>
  Sign Up
</Link>
      </div>

         ) : (
        <Link to='/dashboard' className='hidden md:block bg-[#432DD7] hover:bg-[#3b20e8] py-3 px-8 rounded-4xl text-white text-[16px]'>Dashboard</Link>
         )}


        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden active:scale-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-white/70 text-slate-800 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
     <Link to="/about" onClick={() => setMenuOpen(false)}>
          About Us
        </Link>

         <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
        <button
          onClick={() => setMenuOpen(false)}
          className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-slate-100 hover:bg-slate-200 transition text-black rounded-md flex"
        >
          ✕
        </button>
      </div>

      {/* Hero Section */}
      <main className="flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-10 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Left Text Section */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-center md:text-left text-4xl leading-[46px] md:text-5xl md:leading-[68px] font-semibold max-w-xl text-slate-900">
            Predict Diseases Early with <span className='text-[#432DD7]'>AI-Powered</span> Precision
          </h1>
          <p className="text-center md:text-left text-sm text-slate-700 max-w-lg mt-3">
           Our intelligent health prediction system uses advanced machine learning models to help you detect the risk of Diabetes, Heart Disease, and Parkinson’s with high accuracy — all in one place, instantly.
          </p>

          <div className="flex items-center gap-4 mt-8 text-sm">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 transition rounded-md px-7 h-11">
           {!token?(
             <Link to='/login'>  Get Started</Link>
           ):(
            <Link to='/dashboard'>  Dashboard</Link>
           )}
            </button>
            <button className="flex items-center gap-2 border border-slate-600 active:scale-95 hover:bg-white/10 transition text-slate-600 rounded-md px-6 h-11">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-video"
              >
                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                <rect x="2" y="6" width="14" height="12" rx="2" />
              </svg>
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <img
          src="/landingpageimg.png"
          alt="hero"
          className="max-w-sm sm:max-w-md lg:max-w-lg 2xl:max-w-xl transition-all duration-300"
        />
      </main>
    </section>
  )
}

export default Hero

import React from 'react'
import { Link } from "react-router-dom";
import { MoveLeft } from 'lucide-react'
import Footer from '../components/home/Footer';
const Contact = () => {
  return (
    <>
     <Link to='/'> 
             <div className='flex  items-center justify-center gap-2 text-[20px] border-gray-400 border w-fit px-4 py-3 rounded-xl md:mt-8 mt-12 ml-5 cursor-pointer md:ml-46'>
            
              <MoveLeft/>
              Back to dashboard
            
            </div>
            </Link>
     <form className="mt-20 flex flex-col items-center  text-sm">
            <p className="text-lg text-blue-600 font-medium pb-2 underline">Contact Us</p>
            <h1 className="text-4xl font-semibold text-slate-700 pb-4">Get in touch with us</h1>
            <p className="text-sm text-gray-500 text-center pb-10 md:w-[50%]">We’d love to hear from you! Whether you have questions about our AI-powered disease prediction platform, need technical support, or want to share feedback — our team is always here to help you.</p>
            
            
            <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Your Name</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" required />
                </div>
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Your Email</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="email" required />
                </div>
            </div>
        
            <div className="mt-6 w-[350px] md:w-[700px]">
                <label className="text-black/70" htmlFor="name">Message</label>
                <textarea className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300" required></textarea>
            </div>
        
            <button type="submit" className="mt-5 bg-indigo-600 text-white h-12 w-56 px-4 rounded-xl active:scale-95 transition mb-15 cursor-pointer">Send Message</button>
        </form>
        <Footer/>
    </>
  )
}

export default Contact

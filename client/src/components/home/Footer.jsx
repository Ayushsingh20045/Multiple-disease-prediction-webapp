import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
     <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <footer className="flex items-center justify-evenly w-full   text-black/70 border-t-1 border-gray-300 py-3 px-2 md:p-0 ">
                
               <div>
                 <img src="/Logo.png" alt="" className='w-36 h-36'/>
               </div>

                <div className='flex flex-col items-center justify-center'>
                   
                    <p className=" text-center text-nowrap">Copyright © 2025 All rights reservered.</p>
                <div className="flex items-center gap-6 mt-4 mb-4">

                    <a href="https://www.linkedin.com/feed/"> <Linkedin className='text-[#0077B5]'/></a>
                    <a href="https://github.com/Ayushsingh20045"> <Github className='text-[#171515]'/></a>
                  <a href="https://www.instagram.com/ayushsingh20046/"><Instagram className='text-pink-700'/></a>
                  <a href="mailto:ayush440896@gmail.com"><Mail className='text-[#EA4335]'/></a>
                 
                   
                </div>
                </div>
            </footer>
        </>
  )
}

export default Footer

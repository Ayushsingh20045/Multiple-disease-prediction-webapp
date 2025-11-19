import React from 'react'
import Footer from '../components/home/Footer'
import { Github, Instagram, Linkedin, Mail, MoveLeft } from 'lucide-react'
import { Link } from "react-router-dom";


const About = () => {
  return (
    <>
    
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
        
          <Link to='/'> 
             <div className='flex  items-center justify-center gap-2 text-[20px] border-gray-400 border w-fit px-4 py-3 rounded-xl md:mt-8 mt-12 ml-5 cursor-pointer md:ml-46'>
            
              <MoveLeft/>
              Back to dashboard
            
            </div>
            </Link>

             <section className="mt-15 flex flex-col md:flex-row items-center justify-evenly gap-14 max-md:px-4">
                <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
                    <img className="max-w-md w-full object-cover rounded-2xl"
                        src="/aboutusimg.png"
                        alt="" />
                 
                </div>
                <div className="text-sm text-slate-600 max-w-lg">
                    <h1 className="text-xl uppercase font-semibold text-slate-700">What we do?</h1>
                    <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
                    <p className="mt-8">We use advanced Machine Learning models to analyze health data and detect the early signs of diseases like Diabetes, Heart Disease, and Parkinson’s. Our goal is to make AI-driven medical insights accessible to everyone — from students to healthcare professionals.</p>
                    <p className="mt-4">Every input you provide is processed through trained models that deliver accurate, easy-to-understand results. The system transforms complex medical data into clear predictions, helping you understand your health status instantly.</p>
                    <p className="mt-4">Our platform empowers users to take control of their well-being through technology. With secure, fast, and reliable predictions, you can make informed decisions about your health and take preventive action at the right time.</p>
                
                </div>
            </section>
            
            <h1 className="text-5xl font-medium text-slate-800 text-center mt-20 ">Meet Our Team</h1>
            <p className="text-slate-500 text-center">The people behind the product, passionate about what they do.</p>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 mb-15">
                <div className="max-w-80 bg-black text-white rounded-2xl">
                    <div className="relative -mt-px overflow-hidden rounded-2xl">
                        <img src="/purvaImg.jpg" alt="" className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
                        <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                        
                    </div>
                    <div className="px-4 pb-6 text-center">
                        <p className="mt-4 text-lg">Purva Pardhi</p>
                        <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">ML & Research Coordinator</p>
                        <div className='flex items-center justify-center gap-5 mt-3'>

                        <a href="mailto:purvapardhi288@gmail.com"> <Mail className='size-5 text-red-400'/></a>
                        <a href="https://www.linkedin.com/in/purva-pardhi-4272a8299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <Linkedin className='size-5 text-blue-400'/></a>
                         <a href="https://github.com/Purvaa13"><Github className='size-5 text-white/70'/></a>

                        </div>
                    </div>
                </div>

                <div className="max-w-80 bg-black text-white rounded-2xl">
                    <div className="relative -mt-px overflow-hidden rounded-2xl">
                        <img src="/ayushImg.jpg" alt="" className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
                        <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                    </div>
                    <div className="px-4 pb-6 text-center">
                        <p className="mt-4 text-lg">Ayush Singh</p>
                        <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">Full Stack Developer & ML Integrator</p>
                         <div className='flex items-center justify-center gap-5 mt-3'>

                        <a href="mailto:ayush440896@gmail.com"> <Mail className='size-5 text-red-400'/></a>
                        <a href="https://www.linkedin.com/feed/"> <Linkedin className='size-5 text-blue-400'/></a>
                         <a href="https://github.com/Ayushsingh20045"><Github className='size-5 text-white/70'/></a>

                        </div>
                    </div>
                </div>
              
                <div className="max-w-80 bg-black text-white rounded-2xl">
                    <div className="relative -mt-px overflow-hidden rounded-2xl">
                        <img src="/shrutiImg.jpg" alt="" className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
                        <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                    </div>
                    <div className="px-4 pb-6 text-center ">
                        <p className="mt-4 text-lg">Shruti Nemade</p>
                        <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">ML Developer & Accuracy Tester</p>
                         <div className='flex items-center justify-center gap-5 mt-3'>

                        <a href="mailto:shrutinemade98@gmail.com"> <Mail className='size-5 text-red-400'/></a>
                        <a href="https://www.linkedin.com/in/shruti-nemade-5ba269264"> <Linkedin className='size-5 text-blue-400'/></a>
                         <a href="https://github.com/ShrutiNemade"><Github className='size-5 text-white/70'/></a>

                        </div>
                    </div>
                   
                </div>
                <div className="max-w-80 bg-black text-white rounded-2xl">
                    <div className="relative -mt-px overflow-hidden rounded-2xl">
                        <img src="/gopiImg.jpg" alt="gopiImg" className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
                        <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                    </div>
                    <div className="px-4 pb-6 text-center ">
                        <p className="mt-4 text-lg">Gopeshwari Kurre</p>
                        <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text"> Research Assistant</p>
                         <div className='flex items-center justify-center gap-5 mt-3'>

                        <a href="mailto:sudhakurre0@gmail.com"> <Mail className='size-5 text-red-400'/></a>
                        <a href="https://www.linkedin.com/in/gopeshwari-kurre-407095296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <Linkedin className='size-5 text-blue-400'/></a>
                         <a href="https://github.com/Gopeshwari2"><Github className='size-5 text-white/70'/></a>

                        </div>
                    </div>
                   
                </div>
            </div>
            <Footer/>
        </>
           
  )
}

export default About

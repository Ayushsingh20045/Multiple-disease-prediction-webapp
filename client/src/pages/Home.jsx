import React from 'react'
import Hero from '../components/home/Hero'
import AboutOurApp from '../components/home/AboutOurApp'
import Features from '../components/home/Features'
import CallToAction from '../components/home/CallToAction'
import Testemonials from '../components/home/Testemonials'
import FAQ from '../components/home/FAQ'
import Footer from '../components/home/Footer'





const Home = () => {
  return (
<div className=''>
  
  <Hero/>
  <AboutOurApp/>
<Features/>
<CallToAction/>
<Testemonials/>
<FAQ/>
<Footer/>
</div>
  )
}

export default Home

import React from 'react'
import {  Routes,Route, Form } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Toaster } from 'react-hot-toast'
import FormPage from './pages/FormPage'



const App = () => {
  return (
   <>
  <Toaster/>
    <Routes>
      <Route path='/' element={<Home />}/>
    <Route path='/about' element={<AboutUs />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path="/dashboard/:type" element={<FormPage/>} />
    </Routes>
  
   </>
  )
}

export default App

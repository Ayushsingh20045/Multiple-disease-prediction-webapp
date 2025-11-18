
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../configs/api'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Loader } from 'lucide-react'

const Signup = () => {
  const navigate = useNavigate()

  const [loading, setloading] = useState(false)

  const [formData, setformData] = useState({
    name:'',
    email:'',
    password:''
  })

const handleSubmit = async(e)=>{
  e.preventDefault()
  setloading(true)
  try {
    const {data} = await api.post('/api/users/register',formData);
   
     localStorage.setItem('token',data.token)
     localStorage.setItem('user',JSON.stringify(data.user))

    toast.success(data.message)
    
    navigate('/dashboard')
    
   
    
  } catch (error) {
    toast(error?.response?.data?.message||error.message)
  }finally{
    setloading(false)
  }
 
}

const handleChange = (e) =>{
  const {name,value} = e.target
  setformData(prev =>({...prev , [name]:value}))
}


  return (
  <>
  
  <form onSubmit={handleSubmit} >
    <div className="h-screen w-screen flex items-center justify-center ">
    <div className="flex flex-col border-1 border-gray-600  h-[510px] w-[350px]  rounded-xl px-4">
      <h2 className='text-3xl font-semibold text-center pt-5 pb-2 underline'>Sign Up</h2>
      <p className='text-center text-gray-500 mb-7'>Enter your credentials below</p>
      <label className='text-xl px-2  mb-1' htmlFor="">Name:</label>
       <input type="text" className=' border-1 border-gray-600 rounded-xl outline-none px-3 py-2 text-xl mb-3' placeholder='Enter your name...' required name='name' value={formData.name} onChange={handleChange} />


      <label className='text-xl px-2  mb-1' htmlFor="">Email:</label>
       <input type="email" className=' border-1 border-gray-600 rounded-xl outline-none px-3 py-2 text-xl mb-3' placeholder='Enter your name...' required name='email' value={formData.email} onChange={handleChange}  />


      <label className='text-xl px-2  mb-1' htmlFor="">Password:</label>
       <input type="password" className=' border-1 border-gray-600 rounded-xl outline-none px-3 py-2 text-xl mb-6' placeholder='Enter your name...' required name='password' value={formData.password} onChange={handleChange} />

       <button type='submit' disabled={loading}   className='bg-[#432DD7]  text-white py-3 text-lg font-semibold rounded-xl cursor-pointer mb-1 hover:bg-[#462ee6] flex items-center justify-center gap-5'>
         {loading && <Loader className='size-5 animate-spin'/>}
        {loading?"signing in...":"Sign Up"}
       </button>
   
       <p className='text-sm text-center text-gray-600'>Already have an account <Link to="/login" className='text-[#432DD7] underline'>Login</Link></p>
    </div>
  </div>
  </form>
   </>
  )
}

export default Signup

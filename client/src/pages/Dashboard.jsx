import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import api from '../configs/api';
import { Activity, HeartPulse } from 'lucide-react';


const Dashboard = () => {
   const navigate = useNavigate();
   const [dashboardData, setdashboardData] = useState(null)
   
   useEffect(()=>{
    const token = localStorage.getItem("token")
    if(!token){
      navigate('/login')
     
      return;
    }

const fetchData = async()=>{
  try {
    const {data} = await api.get('/api/users/dashboard',{
      headers:{
        Authorization:`Bearer ${token}`
      },
    });
    
    setdashboardData(data);
   
    
  } catch (error) {
    // Token invalid or expired
    const msg = error?.response?.data?.message || "Unauthorized access";

   console.log(msg)
    toast.error(msg);
    //force logout
    localStorage.removeItem("token")
    navigate('/login')
   
  
  }
};

fetchData();

   },[])

const handlePredict = (type)=>{
  navigate(`/dashboard/${type}`)
}

  return (
   <>
     <Navbar/>
      <div className="text-xl px-12 lg:px-36 py-8 bg-[#F9F9F9]">

        <p className=' text-gray-500 text-center'>Our Multiple Disease Prediction System uses intelligent AI models to accurately detect and predict diseases.
By analyzing key user inputs and medical patterns, the system provides early detection, risk estimation, and helpful insights — allowing users to take action at the right time.
Our aim is to make healthcare easier, smarter, and preventive by helping users understand their health better and get timely guidance for a safer and healthier future.</p>

   <div className="grid grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
  gap-10 
  py-16 
  place-items-center ">

    <div  className="card bg-white transition-all duration-200 rounded-2xl shadow-xl w-92 flex flex-col items-center justify-center px-2 gap-3 py-6 border-1 border-gray-200">
    <img src="/Heart.png" alt="" className='h-38'/>
    <h1 className='font-semibold text-3xl '>Heart Disease</h1>
    <p className= 'text-center text-gray-500'>Prediction of cardiovascular risks based on health data, symptoms, and key medical factors.</p>
    <button onClick={()=> handlePredict("heart")}  className="
    px-16 py-2 
    rounded-3xl 
    text-2xl 
    border-2 
    border-[#0159FE] 
    text-[#0159FE]
    transition-all 
    duration-300 
    hover:bg-[#0159FE] 
    hover:text-white 
    hover:shadow-[0_0_12px_#0159FE]
  ">Predict</button>
    </div>

    <div className="card bg-white transition-all duration-200 rounded-2xl shadow-xl w-92 flex flex-col items-center justify-center px-2 gap-3 py-6 border-1 border-gray-200">
    <img src="/Diabetes.png" alt="" className='h-38'/>
    <h1 className='font-semibold text-3xl '>Diabetes</h1>
    <p className= 'text-center text-gray-500'>Early detection of diabetes risk using important health parameters and medical patterns.</p>
    <button onClick={()=> handlePredict("diabetes")}   className="
    px-16 py-2 
    rounded-3xl 
    text-2xl 
    border-2 
    border-[#0159FE] 
    text-[#0159FE]
    transition-all 
    duration-300 
    hover:bg-[#0159FE] 
    hover:text-white 
    hover:shadow-[0_0_12px_#0159FE]
  ">Predict</button>
    </div>
    
    <div className="card bg-white  transition-all duration-200 rounded-2xl shadow-xl w-92 flex flex-col items-center justify-center px-2 gap-3 py-6 border-1 border-gray-200">
    <img src="/Brain.png" alt="" className='h-38'/>
    <h1 className='font-semibold text-3xl '>Parkinson’s Disease</h1>
    <p className= 'text-center text-gray-500'>Early detection of Parkinson’s symptoms of motor functions, tremors, and behavioral patterns.</p>
   <button
  onClick={() => handlePredict("parkinson")}
  className="
    px-16 py-2 
    rounded-3xl 
    text-2xl 
    border-2 
    border-[#0159FE] 
    text-[#0159FE]
    transition-all 
    duration-300 
    hover:bg-[#0159FE] 
    hover:text-white 
    hover:shadow-[0_0_12px_#0159FE]
  "
>
  Predict
</button>

    </div>

   

    
   
   </div>
      </div>


     </>
  )
}

export default Dashboard


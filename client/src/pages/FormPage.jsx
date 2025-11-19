import React, { useEffect } from 'react'
import DiabetesForm from '../components/formComponents/DiabetesForm'
import { useNavigate, useParams } from 'react-router-dom'
import HeartForm from '../components/formComponents/HeartForm'
import ParkinsonForm from '../components/formComponents/ParkinsonForm'
import diabetes from '../components/formComponents/DiabetesForm'
import Navbar from '../components/Navbar'

const FormPage = () => {

const navigate = useNavigate()

const {type} = useParams();

useEffect(()=>{
const token = localStorage.getItem("token")
if(!token){
  navigate('/login')
}
},[])

  return (
   <>
   <Navbar/>
    <div>
      {type === "heart" && <HeartForm/>}
      {type === "diabetes" && <DiabetesForm/>}
      {type === "parkinson" && <ParkinsonForm/>}
    </div>
   </>
  )
}

export default FormPage

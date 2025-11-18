import { Brain, DropletIcon, HeartPlus } from 'lucide-react'
import React from 'react'

const Features = () => {
  return (
       <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 className="text-3xl font-semibold text-center mx-auto mt-22">Diseases We Predict</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">Predict, track, and improve your health with smart AI-powered precision.</p>
            
            <div className="flex items-center justify-center flex-wrap gap-6 mt-20 px-4 md:px-0">
                <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-violet-200 gap-6 max-w-sm">
                    <div className="p-6 aspect-square bg-violet-100 rounded-full">
                      <DropletIcon className='size-8 text-rose-500'/>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-semibold text-slate-700"> Diabetes Prediction</h3>
                        <p className="text-sm text-slate-600">We help users detect early warning signs and encourage lifestyle adjustments to prevent long-term complications.</p>
                    </div>
                </div>
                <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-green-200 gap-6 max-w-sm">
                    <div className="p-6 aspect-square bg-green-100 rounded-full">
                       
                        <HeartPlus className='size-8 text-red-500'/>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-semibold text-slate-700"> Heart Disease Prediction</h3>
                        <p className="text-sm text-slate-600">Users receive personalized recommendations to manage heart health and reduce risk factors.</p>
                    </div>
                </div>
                <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-orange-200 gap-6 max-w-sm">
                    <div className="p-6 aspect-square bg-orange-100 rounded-full">
                      <Brain className='size-8 text-orange-500'/>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-semibold text-slate-700"> Parkinson’s Disease Prediction</h3>
                        <p className="text-sm text-slate-600">Early awareness allows users to monitor symptoms closely and consult neurologists before major progression.</p>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Features

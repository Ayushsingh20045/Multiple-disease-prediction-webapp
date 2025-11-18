import React from 'react'
import { Gauge, ShieldCheck, Target } from "lucide-react";
const AboutOurApp = () => {
  return (
   <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 className="text-4xl font-semibold text-center mx-auto mt-10">About Our App</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
               Early prediction can save lives — our app brings AI and healthcare together to help you stay informed.
            </p>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12  px-4 md:px-0 py-10">
                <img className="max-w-sm w-full rounded-xl h-auto"
                    src="/AboutPageImg.png"
                    alt="" />
                <div>
                    <h1 className="text-3xl font-semibold">Multiple Disease Prediction</h1>
                    <p className="text-sm text-slate-500 mt-2">
                       It helps users to predict the likelihood of common health conditions such as Diabetes, Heart Disease, and Parkinson’s Disease — all in one platform.
                    </p>
            
                    <div className="flex flex-col gap-10 mt-6">
                        <div className="flex items-center justify-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded flex items-center justify-center">
                                {/* <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" /> */}
                                <Target className="size-5 text-blue-700"/>
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">High Prediction Accuracy:</h3>
                                <p className="text-sm text-slate-500">Trained on reliable medical data for accurate and trusted predictions.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded flex items-center justify-center">
                              
                                <Gauge className='size-5 text-red-700'/>
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Fast and Reliable Results:</h3>
                                <p className="text-sm text-slate-500">Get instant health predictions within seconds.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded flex items-center justify-center">
                               <ShieldCheck className='size-5 text-orange-400'/>
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Secure Data Handling:</h3>
                                <p className="text-sm text-slate-500">User data is safely stored in our database for future reference.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default AboutOurApp

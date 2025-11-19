import React, { useState } from "react";




const DiabetesForm = () => {

const [isLoading, setisLoading] = useState(false)

    const [formData, setformData] = useState({
        pregnancies: "",
        glucose: "",
        bloodPressure: "",
        skinThickness: "",
        insulin: "",
        bmi: "",
        diabetesPedigreeFunction: "",
        age: "",
    });

    const handleChange = (e) => {
        const{name,value} = e.target;
        setformData(prev =>({ ...prev,[name]:value}))
      

     };

    const handleSubmit = async (e) => {
        e.preventDefault();
       
          // Convert all fields to number
  const numericData = {
    pregnancies: Number(formData.pregnancies),
    glucose: Number(formData.glucose),
    bloodPressure: Number(formData.bloodPressure),
    skinThickness: Number(formData.skinThickness),
    insulin: Number(formData.insulin),
    bmi: Number(formData.bmi),
    diabetesPedigreeFunction: Number(formData.diabetesPedigreeFunction),
    age: Number(formData.age),
  };

        console.log(formData)
        console.log(numericData)
        
    };

    return (
        <>
           

            <div className="bg-[#F9F9F9]  py-8">
                <h1 className="text-3xl md:text-4xl font-semibold text-center  ">
                   
                    Diabetes Prediction Form
                </h1>

                <div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col  items-start gap-4 py-8 px-8 md:px-26 lg:items-center "
                    >
                        <input
                            className="px-4 py-2  text-lg bg-white w-full lg:w-2/4 border border-gray-300 rounded-lg outline-none hover:ring transition-all duration-200 hover:ring-blue-500"
                            type="number"
                            placeholder="Number of Pregnancies"
                            name="pregnancies" value={formData.pregnancies} onChange={handleChange}
                             required
                        />

                        <input
                            className="px-4 py-2  text-lg bg-white w-full lg:w-2/4 border border-gray-300 rounded-lg outline-none hover:ring transition-all duration-200 hover:ring-blue-500"
                            type="number"
                            
                            
                            placeholder="Glucose Level"
                            name="glucose" value={formData.glucose} onChange={handleChange}
                             required
                        />
                        <input
                            className="px-4 py-2  text-lg bg-white w-full lg:w-2/4 border border-gray-300 rounded-lg outline-none hover:ring transition-all duration-200 hover:ring-blue-500"
                            type="number"
                            
                            
                            placeholder="Blood Pressure"
                            name="bloodPressure" value={formData.bloodPressure} onChange={handleChange}
                             required
                        />

                        <input
                            className="px-4 py-2  text-lg bg-white w-full lg:w-2/4 border border-gray-300 rounded-lg outline-none hover:ring transition-all duration-200 hover:ring-blue-500"
                            type="number"
                            
                            
                            placeholder="Skin Thickness"
                            name="skinThickness" value={formData.skinThickness} onChange={handleChange}
                             required
                        />

                        <input
                            className="px-4 py-2  text-lg bg-white w-full lg:w-2/4 border border-gray-300 rounded-lg outline-none hover:ring transition-all duration-200 hover:ring-blue-500"
                            type="number"
                                        
                            placeholder="Insulin"
                            name="insulin" value={formData.insulin} onChange={handleChange}
                             required
                        />

                        <input
                            className="px-4 py-2  text-lg bg-white w-full lg:w-2/4 border border-gray-300 rounded-lg outline-none hover:ring transition-all duration-200 hover:ring-blue-500"
                            type="number"
                            
                            
                            placeholder="BMI (Body Mass Index)"
                            name="bmi" value={formData.bmi} onChange={handleChange}
                             required
                        />

                        <input
                            className="px-4 py-2  text-lg bg-white w-full lg:w-2/4 border border-gray-300 rounded-lg outline-none hover:ring transition-all duration-200 hover:ring-blue-500"
                            type="number"
                            
                            
                            placeholder="DiabetesPedigreeFunction"
                            name="diabetesPedigreeFunction" value={formData.diabetesPedigreeFunction} onChange={handleChange}
                             required
                        />

                        <input
                            className="px-4 py-2  text-lg bg-white w-full lg:w-2/4 border border-gray-300 rounded-lg outline-none hover:ring transition-all duration-200 hover:ring-blue-500"
                            type="number"
                                    
                            placeholder="Age"
                            name="age" value={formData.age} onChange={handleChange}
                             required
                        />
                        <p className="px-10 text-sm text-gray-600">Note: Please ensure all values are accurate for the best prediction results.</p>

                        <button type="submit"
                            className=" px-16 py-2 mt-5  rounded-3xl  text-2xl  border-2 border-[#0159FE]  text-white transition-all  duration-300  bg-[#0159FE]  hover:shadow-[0_0_4px_#0159FE] " disabled={isLoading}

                        >
                           Predict
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default DiabetesForm;

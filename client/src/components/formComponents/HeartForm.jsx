import React, { useState } from 'react'

const HeartForm = () => {

    const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    // convert all to numbers
    const numericData = {
      age: Number(formData.age),
      sex: Number(formData.sex),
      cp: Number(formData.cp),
      trestbps: Number(formData.trestbps),
      chol: Number(formData.chol),
      fbs: Number(formData.fbs),
      restecg: Number(formData.restecg),
      thalach: Number(formData.thalach),
      exang: Number(formData.exang),
      oldpeak: Number(formData.oldpeak),
      slope: Number(formData.slope),
      ca: Number(formData.ca),
      thal: Number(formData.thal),
    };

    console.log("Form Data:", formData);
    console.log("Numeric Data:", numericData);

    // Later we will will send numericData to backend here.
  };
  
  return (
  <>
    <div className="bg-[#F9F9F9] py-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          Heart Disease Prediction Form
        </h1>

        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start gap-4 py-8 px-8 md:px-26 lg:items-center"
          >
            {/* All inputs */}
            <input className="input" type="number" placeholder="Age" name="age" value={formData.age} onChange={handleChange} required />

            <input className="input" type="number" placeholder="Sex (1 = Male, 0 = Female)" name="sex" value={formData.sex} onChange={handleChange} required />

            <input className="input" type="number" placeholder="Chest Pain Type (cp)" name="cp" value={formData.cp} onChange={handleChange} required />

            <input className="input" type="number" placeholder="Trestbps (Resting BP)" name="trestbps" value={formData.trestbps} onChange={handleChange} required />

            <input className="input" type="number" placeholder="Cholesterol (chol)" name="chol" value={formData.chol} onChange={handleChange} required />

            <input className="input" type="number" placeholder="Fasting Blood Sugar (fbs)" name="fbs" value={formData.fbs} onChange={handleChange} required />

            <input className="input" type="number" placeholder="Rest ECG" name="restecg" value={formData.restecg} onChange={handleChange} required />

            <input className="input" type="number" placeholder="Thalach (Max HR)" name="thalach" value={formData.thalach} onChange={handleChange} required />

            <input className="input" type="number" placeholder="Exercise Angina (exang)" name="exang" value={formData.exang} onChange={handleChange} required />

            <input className="input" type="number" placeholder="Oldpeak" name="oldpeak" value={formData.oldpeak} onChange={handleChange} required />

            <input className="input" type="number" placeholder="Slope" name="slope" value={formData.slope} onChange={handleChange} required />

            <input className="input" type="number" placeholder="Ca" name="ca" value={formData.ca} onChange={handleChange} required />

            <input className="input" type="number" placeholder="Thal" name="thal" value={formData.thal} onChange={handleChange} required />

            <p className="px-10 text-sm text-gray-600">
              Note: Please ensure all values are accurate for the best prediction results.
            </p>

            <button
              type="submit"
              className="px-16 py-2 mt-5 rounded-3xl text-2xl border-2 border-[#0159FE] text-white transition-all duration-300 bg-[#0159FE] hover:shadow-[0_0_4px_#0159FE]"
              disabled={isLoading}
            >
             Predict
            </button>
          </form>
        </div>
      </div>
  </>
  )
}

export default HeartForm

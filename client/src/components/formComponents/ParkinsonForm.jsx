import React, { useState } from 'react'

const LiverForm = () => {
  
 const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    mdvpFo: "",
    mdvpFhi: "",
    mdvpFlo: "",
    mdvpJitterPercent: "",
    mdvpJitterAbs: "",
    mdvpRAP: "",
    mdvpPPQ: "",
    jitterDDP: "",
    mdvpShimmer: "",
    mdvpShimmerDB: "",
    shimmerAPQ3: "",
    shimmerAPQ5: "",
    mdvpAPQ: "",
    shimmerDDA: "",
    nhr: "",
    hnr: "",
    rpde: "",
    dfa: "",
    spread1: "",
    spread2: "",
    d2: "",
    ppe: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    // Convert all values to numbers
    const numericData = {};
    for (let key in formData) {
      numericData[key] = Number(formData[key]);
    }

    console.log("Numeric Data:", numericData);

    // Later we  will send numericData to backend
  };


  return (
   <>
     <div className="bg-[#F9F9F9] py-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          Parkinson Disease Prediction Form
        </h1>

        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start gap-4 py-8 px-8 md:px-26 lg:items-center"
          >
            {/* Input fields */}
            <input className="input" type="number" placeholder="MDVP:Fo(Hz)" name="mdvpFo" value={formData.mdvpFo} onChange={handleChange} required />

            <input className="input" type="number" placeholder="MDVP:Fhi(Hz)" name="mdvpFhi" value={formData.mdvpFhi} onChange={handleChange} required />

            <input className="input" type="number" placeholder="MDVP:Flo(Hz)" name="mdvpFlo" value={formData.mdvpFlo} onChange={handleChange} required />

            <input className="input" type="number" placeholder="MDVP:Jitter(%)" name="mdvpJitterPercent" value={formData.mdvpJitterPercent} onChange={handleChange} required />

            <input className="input" type="number" placeholder="MDVP:Jitter(Abs)" name="mdvpJitterAbs" value={formData.mdvpJitterAbs} onChange={handleChange} required />

            <input className="input" type="number" placeholder="MDVP:RAP" name="mdvpRAP" value={formData.mdvpRAP} onChange={handleChange} required />

            <input className="input" type="number" placeholder="MDVP:PPQ" name="mdvpPPQ" value={formData.mdvpPPQ} onChange={handleChange} required />

            <input className="input" type="number" placeholder="Jitter:DDP" name="jitterDDP" value={formData.jitterDDP} onChange={handleChange} required />

            <input className="input" type="number" placeholder="MDVP:Shimmer" name="mdvpShimmer" value={formData.mdvpShimmer} onChange={handleChange} required />

            <input className="input" type="number" placeholder="MDVP:Shimmer(dB)" name="mdvpShimmerDB" value={formData.mdvpShimmerDB} onChange={handleChange} required />

            <input className="input" type="number" placeholder="Shimmer:APQ3" name="shimmerAPQ3" value={formData.shimmerAPQ3} onChange={handleChange} required />

            <input className="input" type="number" placeholder="Shimmer:APQ5" name="shimmerAPQ5" value={formData.shimmerAPQ5} onChange={handleChange} required />

            <input className="input" type="number" placeholder="MDVP:APQ" name="mdvpAPQ" value={formData.mdvpAPQ} onChange={handleChange} required />

            <input className="input" type="number" placeholder="Shimmer:DDA" name="shimmerDDA" value={formData.shimmerDDA} onChange={handleChange} required />

            <input className="input" type="number" placeholder="NHR" name="nhr" value={formData.nhr} onChange={handleChange} required />

            <input className="input" type="number" placeholder="HNR" name="hnr" value={formData.hnr} onChange={handleChange} required />

            <input className="input" type="number" placeholder="RPDE" name="rpde" value={formData.rpde} onChange={handleChange} required />

            <input className="input" type="number" placeholder="DFA" name="dfa" value={formData.dfa} onChange={handleChange} required />

            <input className="input" type="number" placeholder="Spread1" name="spread1" value={formData.spread1} onChange={handleChange} required />

            <input className="input" type="number" placeholder="Spread2" name="spread2" value={formData.spread2} onChange={handleChange} required />

            <input className="input" type="number" placeholder="D2" name="d2" value={formData.d2} onChange={handleChange} required />

            <input className="input" type="number" placeholder="PPE" name="ppe" value={formData.ppe} onChange={handleChange} required />

            <p className="px-10 text-sm text-gray-600">
              Note: Please ensure all values are accurate for the best prediction results.
            </p>

            <button
              type="submit"
              disabled={isLoading}
              className="px-16 py-2 mt-5 rounded-3xl text-2xl border-2 border-[#0159FE] text-white transition-all duration-300 bg-[#0159FE] hover:shadow-[0_0_4px_#0159FE]"
            >
             Predict
            </button>
          </form>
        </div>
      </div>
   </>
  )
}

export default LiverForm

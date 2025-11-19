import React from 'react'

const PredictionResultCard = ({data,onClose,onDownload}) => {

const {inputValues , prediction} = data;

  return (
   <>
<div className="mt-8 p-6 bg-white rounded-xl shadow-lg border w-full md:w-2/4 mx-auto">

      <h2 className="text-2xl font-semibold mb-4 text-center">
        Prediction Result
      </h2>

      <div className="mb-3">
        <p className={`text-center font-semibold text-xl ${
          prediction === 1 ? "text-red-600" : "text-green-600"
        }`}>
          {prediction === 1 ? "High Risk Detected" : "No Risk Detected"}
        </p>
      </div>

      <h3 className="font-semibold mt-4 mb-2">Input Summary:</h3>

      <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
        {Object.entries(inputValues).map(([key, value]) => (
          <div key={key} className="p-2 bg-gray-100 rounded-md">
            <strong>{key}:</strong> {value}
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-5">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Re-Predict
        </button>

        <button
          onClick={onDownload}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg"
        >
          Download
        </button>
      </div>

    </div>
   </>
  )
}

export default PredictionResultCard

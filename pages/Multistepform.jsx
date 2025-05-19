import { useState } from 'react';
import ProgressBar from '../components/progressbar';

import BackToHomeButton from '../pages/BackToHomeButton';
import food from '../assets/food2.png';

const MultiStepForm = () => {
  
  const [step, setStep] = useState(1);
 
  
  const nextStep = async () => {
    setStep(step + 1);
  }
  const prevStep = () => {
    setStep(step - 1);
  }

  
    return (
       <div
      className="min-h-screen bg-cover bg-center bg-amber-50 flex items-center justify-center"
      
      >
      < BackToHomeButton />
      
        {step === 1 && (
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex w-[90%] max-w-5xl overflow-hidden">
          {/* Left Side - Form */}
        <div className="w-1/2 p-8">
          <form>
            <h2 className="text-2xl font-bold mb-6 text-center">Bio Data</h2>
            <ProgressBar step={step} totalSteps={4} />
            <div>
              <h3 className="text-xl font-semibold mb-4 text-black">Personal Information</h3>
              <div className="mb-5">
                <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-amber-50 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-amber-50 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-5">
                <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Height (cm)</label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-amber-50 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Weight (kg)</label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-amber-50 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={nextStep}
                  className="text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Next
                </button>
              </div>
            </div>
            {/* End of form fields */}
          </form>
        </div>
        {/* Right Side - Food Image */}
        <div className="w-1/2">
          <img
            src={food} // your food image path
            alt="Food"
            className="h-full w-full object-cover"
          />
        </div>
        </div>
        )}
      
      {step === 2 && (
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex w-[90%] max-w-5xl overflow-hidden">
          {/* Left Side - Form */}
        <div className="w-1/2 p-8">
          <form>
            <h2 className="text-2xl font-bold mb-6 text-center">Bio Data</h2>
            <ProgressBar step={step} totalSteps={4} />
            <div>
              <h3 className="text-xl font-semibold mb-4 text-black">Lifestyle Information</h3>
              <div className="mb-5">
                <label htmlFor="occupationType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Occupation Type</label>
                <select
                  id="occupationType"
                  name="occupationType"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-amber-50 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black"
                >
                  <option value="">Select Occupation</option>
                  <option value="sedentary">Sedentary</option>
                  <option value="moderately active">Moderately Active</option>
                  <option value="highly active">Highly Active</option>
                </select>
              </div>
              <div className="mb-12">
                <label htmlFor="physicalActivity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Physical Activity Level</label>
                <select
                  id="physicalActivity"
                  name="physicalActivity"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-amber-50 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black"
                >
                  <option value="">Select Activity Level</option>
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* Right Side - Food Image */}
        <div className="w-1/2">
          <img
            src={food}
            alt="Food"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    )}
    {step === 3 && (
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex w-[90%] max-w-5xl overflow-hidden">
          {/* Left Side - Form */}
        <div className="w-1/2 p-8">
          <form>
            <h2 className="text-2xl font-bold mb-6 text-center">Bio Data</h2>
            <ProgressBar step={step} totalSteps={4} />
          <div>
            <h3 className="text-xl font-semibold mb-4 text-black">Fitness Goals</h3>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Select Your Fitness Goals:</label>
              <div className="space-y-2">
                {['Weight Loss', 'Muscle Gain', 'Maintenance', 'Endurance', 'Flexibility'].map((goal) => (
                  <div key={goal} className="flex items-center">
                    <input
                      type="checkbox"
                      id={goal}
                      name="fitnessGoals"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-amber-50 dark:border-gray-600  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    />
                    
                    <label htmlFor={goal} className="ms-2 text-sm font-medium text-gray-900 dark:text-black-300">
                      {goal}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-7">
              <button
                type="button"
                onClick={prevStep}
                className="text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Next
              </button>
            </div>
          </div>
          </form>
          </div>
          {/* Right Side - Food Image */}
        <div className="w-1/2">
          <img
            src={food}
            alt="Food"
            className="h-full w-full object-cover"
          />
          </div>
          </div>
        )}
        {step === 4 && (
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex w-[90%] max-w-5xl overflow-hidden">
          {/* Left Side - Form */}
          <div className="w-1/2 p-8">
          <form>
            <h2 className="text-2xl font-bold mb-6 text-center">Bio Data</h2>
            <ProgressBar step={step} totalSteps={4} />
            <div>
            <h3 className="text-xl font-semibold mb-4 text-black">Final Step</h3>
            <p className='text-white'></p>
            <div className="flex justify-between mt-7">
              <button
                type="button"
                onClick={prevStep}
                className="text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Previous
              </button>
              </div>
              <div className="flex justify-between mt-7">
              <button
                type="submit"
                className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Save & Create meal
              </button>

            </div>
            </div>
            </form>
            </div>
            {/* Right Side - Food Image */}
            <div className="w-1/2">
            <img
            src={food}
            alt="Food"
            className="h-full w-full object-cover"
            />
            </div>
            </div>
            )}
  </div>
  );
  }

export default MultiStepForm;
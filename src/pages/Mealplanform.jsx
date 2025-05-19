import { useState } from 'react';
import ProgressBar from '../components/progressbar';

import BackToHomeButton from '../pages/BackToHomeButton';
import food from '../assets/food2.png';

const MealPlanForm = () => {
  
  const [step, setStep] = useState(1);
  const [isLoading] = useState(false);
  
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
            <h2 className="text-2xl font-bold mb-4 text-black text-center mt-5">Meal Plan Creator</h2>
            <ProgressBar step={step} totalSteps={4} />
            <div>
              <h3 className="text-xl font-semibold mb-4 text-black">Dietary Preferences</h3>
              <div className="mb-5">
                <label htmlFor="dietaryPreferences" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Dietary Preferences</label>
                <select
                id="dietaryPreferences"
                name="dietaryPreferences"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-amber-50 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black"
                >
                <option value="">Select Preference</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="pescatarian">Pescatarian</option>
                <option value="omnivore">Omnivore</option>
                </select>
                </div>
                <div className="mb-5">
                  <label htmlFor="allergies" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Allergies or Intolerances</label>
                  <input
                  type="text"
                  id="allergies"
                  name="allergies"
                  placeholder="e.g., gluten, dairy"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-amber-50 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                  type="button"
                  onClick={nextStep}
                  className="text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
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
            <h2 className="text-2xl font-bold mb-4 text-black text-center mt-5">Meal Plan Creator</h2>
            <ProgressBar step={step} totalSteps={4} />
            <div>
              <h3 className="text-xl font-semibold mb-4 text-black">Meal Preferences & Cooking</h3>
              <div className="mb-5">
                <label htmlFor="mealFrequency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Number of Meals per Day</label>
                <select
                id="mealFrequency"
                name="mealFrequency"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-amber-50 dark:border-gray-600 dark:placeholder-gray-800 dark:text-black"
                >
                <option value="">Select Number</option>
                <option value="3">3 meals</option>
                <option value="4">4 meals</option>
                <option value="5">5 meals</option>
                </select>
              </div>
              <div className="mb-5">
              <label htmlFor="cookingTime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Time Available for Cooking</label>
              <input
                type="number"
                id="cookingTime"
                name="cookingTime"
                placeholder="Minutes per meal"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-amber-50 dark:border-gray-600 dark:placeholder-black dark:text-black"
              />
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
                className="text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
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
          src={food} // your food image path
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
            <h2 className="text-2xl font-bold mb-4 text-black text-center mt-5">Meal Plan Creator</h2>
            <ProgressBar step={step} totalSteps={4} />
            <div>
              <h3 className="text-xl font-semibold mb-4 text-black">Grocery & Budget</h3>
              <div className="mb-5">
                <label htmlFor="groceryFrequency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Grocery Shopping Frequency</label>
                <select
                  id="groceryFrequency"
                  name="groceryFrequency"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-amber-50 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black"
                >
                  <option value="">Select Frequency</option>
                  <option value="weekly">Weekly</option>
                  <option value="bi-weekly">Bi-Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <div className="mb-5">
                <label htmlFor="groceryBudget" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Grocery Budget</label>
                <input
                  type="number"
                  id="groceryBudget"
                  name="groceryBudget"
                  placeholder="Budget in USD"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-amber-50 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black"
                />
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
                  className="text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
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
            src={food} // your food image path
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
              <h2 className="text-2xl font-bold mb-4 text-black text-center mt-5">Meal Plan Creator</h2>
              <ProgressBar step={step} totalSteps={4} />
              <div>
                <h3 className="text-xl font-semibold mb-4 text-black">Special Requirements</h3>
                <div className="mb-5">
                  <label htmlFor="specialRequirements" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Any Special Dietary Requirements?</label>
                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    placeholder="e.g., Low carb, High protein"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-amber-50 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black"
                />
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
                    type="submit"
                    className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                  Save & Create Meal Plan
                  </button>
                </div>
              </div>
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
      {isLoading && (
        <div className="mt-4 text-center text-black">
          Generating your personalized meal plan...
        </div>
      )}
      </div>
    );
};
export default MealPlanForm;
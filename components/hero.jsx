import React from 'react';
import todayPlan from '../assets/today-plan.webp';
import calories from '../assets/calories.webp';
import macro from '../assets/macro.webp';
import addToPlan from '../assets/add-to-plan.webp';
import food from '../assets/food.png';
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <section className='container mx-auto flex flex-col md:flex-row justify-between pt-44 pb-6 px-4 sm:px-6 lg:px-8'>
      {/* Left Column */}
      <div className='w-full pt-12 md:w-1/2 space-y-8'>
        {/* Star Badge */}
        <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group'>
          <span className='text-blue-600 group-hover:text-amber-300 group-hover:scale-110 transition-transform'>★</span>
          <span className='text-sm font-medium'>Jump start your growth</span>
        </div>

        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
          Your Personal{' '}
          <span className='text-blue-600 relative inline-block'>
            Diet Planner
            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60'></span>
          </span>
        </h1>
        <p className='text-gray-800 text-lg md:text-xl max-w-xl'>
          Calorie and Macro Meal Planner. Serve up recipes for your personalized meal plan automatically. Calculate your nutritional needs and generate custom diet plans for weight loss, bodybuilding and much more!
        </p>
        <div>
          <button className='bg-black text-white px-6 py-3 rounded shadow hover:bg-gray-900'>
            GET STARTED 
          </button>
        </div>
      </div>

      {/* Right Panel Section */}
      <div className='w-full md:w-1/2 mt-16 pt-8 md:mt-0 pl-0 md:pl-12'>
        <div className='relative'>
          <img src={food} alt='Food' className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
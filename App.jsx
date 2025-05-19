import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from "./components/hero";
import Signup from './pages/signup';
import Login from './pages/login';
import MultiStepForm  from './pages/Multistepform';
import MealPlanForm from './pages/Mealplanform'; 
import MealPlan  from './pages/Mealplan';


function AppContent() {
  const location = useLocation();
  const excludedRoutes = ['/login', '/signup', '/meal', '/mealplan', '/mealplanResult'];
  const isExcludedPage = excludedRoutes.includes(location.pathname);

  return (
    
    <main className='relative min-h-screen overflow-x-hidden'>
    {!isExcludedPage && (
    <>
    <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10'></div>
    <Navbar/>
    </>
    )}
    <div className='overflow-hidden'>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/meal" element={<MultiStepForm />} />
          <Route path="/mealplan" element={<MealPlanForm />} />
          <Route path="/mealplanResult" element={<MealPlan />} />
        </Routes>
    </div>
    </main>
  
  );
}
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App

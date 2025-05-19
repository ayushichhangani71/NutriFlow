import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets/arrow.png';

const BackToHomeButton = () => {
    return (
        <div className="absolute top-15 left-12">
            <Link 
              to="/"
              className="flex items-center text-medium text-bold bg-gray-900/30 backdrop-blur-md text-white px-4 py-2 rounded-full hover:bg-gray-500/40 hover:text-gray-900 transition"
              >
                
                  <img src={arrow} className="h-4 w-4 mr-2" /> Back to Home
            </Link>
        </div>
    );
};
export default BackToHomeButton;
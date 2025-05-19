import React from 'react';
import signupBg from '../assets/background.jpg';
import google from '../assets/google.png';
import BackToHomeButton from '../pages/BackToHomeButton';

const Signup = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${signupBg})` }}>
            <BackToHomeButton />
            <div className='bg-gray-100 shadow-xl rounded-lg p-8 max-w-md w-full z-10'>
                <h2 className='text-3xl font-bold text-center mt-3 mb-8'>Create account</h2>
                {/* <button className="w-full border-gray-700 shadow text-gray-900 py-2 rounded-2xl mb-4 hover:bg-gray-100">
                    <div className="flex items-center gap-1 pl-2 cursor-pointer">
                    <img src={google} alt="Logo" className="h-11 w-11" />
                    <span className="text-lg pl-2 font-semibold">Continue with Google</span>
                    </div>
                </button>
                <div className='text-center text-gray-700 mb-4'>or continue with your email</div> */}
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full px-4 py-6 bg-white border-gray-700 shadow rounded-xl mb-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-6 bg-white border-gray-700 shadow rounded-xl mb-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <p className='text-sm text-gray-600 mb-3'>Never shared, never spammed.</p>
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-6 bg-white border-gray-700 shadow rounded-xl mb-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <label className='flex items-center text-medium mb-4'>
                    <input type="checkbox" className="mr-2 w-3.5 h-3.5" />
                    I agree to the <span className='text-orange-500 underline ml-1 cursor-pointer'>terms of service</span>
                </label>
                <button className="w-full h-12 mb-4 mt-3 bg-orange-500 text-white text-semibold py-2 rounded-2xl hover:bg-orange-600 cursor-pointer">
                    Continue
                </button>
                
                <p className='text-center p-1 text-medium text-gray-600'>
                    Already have an account? <span className='text-gray-900 font-medium hover:underline cursor-pointer'>Sign in</span>
                </p>

                
            </div>
        </div>
    );
};
export default Signup;
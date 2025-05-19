import React from 'react';
import signupBg from '../assets/background.jpg';
import google from '../assets/google.png';
import BackToHomeButton from '../pages/BackToHomeButton';

const Login = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${signupBg})` }}>
            <BackToHomeButton />
            <div className='bg-gray-100 shadow-xl rounded-lg p-8 max-w-md w-full z-10'>
                <h2 className='text-3xl mt-4 font-bold text-center mb-8'>Log in</h2>
                {/* <button className="w-full border-gray-700 shadow text-gray-900 py-2 rounded-2xl mb-4 hover:bg-gray-100">
                    <div className="flex items-center gap-1 pl-2 cursor-pointer">
                    <img src={google} alt="Logo" className="h-11 w-11" />
                    <span className="text-lg pl-2 font-semibold">Continue with Google</span>
                    </div>
                </button> */}
                {/* <div className='text-center text-gray-700 mb-4'>or continue with your email</div> */}
                <input
                    type="text"
                    placeholder="Username or email"
                    className="w-full px-4 py-6 bg-white border-gray-700 shadow rounded-xl mb-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-6 bg-white border-gray-700 shadow rounded-xl mb-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <p className=' text-semibold p-1 text-lg mb-3 text-gray-800 cursor-pointer'>
                    Forgot your password? 
                </p>
                <button className="w-full h-12 bg-orange-500 mt-3 text-white text-lg text-bold py-2 rounded-2xl hover:bg-orange-600 cursor-pointer">
                    Continue
                </button>
                
                <p className='text-center mt-5 mb-4 text-semibold p-1 text-medium text-gray-800'>
                    Don't have an account? <span className='text-gray-900 font-medium hover:underline cursor-pointer'>Sign up</span>
                </p>

                
            </div>
        </div>
    );
};
export default Login;
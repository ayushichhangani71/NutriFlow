import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('#home')

    const navLinks = [
        {href: '#mealplanner', label: 'Mealplanner'},
        {href: '#dietplans', label: 'Diet Plans'},
        // {href: '#calculators', label: 'Calculators'},
        // {href: '#articles', label: 'Articles'},
        // {href: '#help', label: 'Help'},
        {href: '#login', label: 'Login'},
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50  border-grey-100 shadow-sm">
          <div className="w-full container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 md:h-20 h-16">
            {/* Logo */}
            <div className="flex items-center gap-1 cursor-pointer">
                <img src="/icon2.png" alt="Logo" className="h-9 w-9" />
                <span className="text-3xl font-bold text-gray-800">NutriFlow</span>
            </div>
            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden p-2'>
                {
                    isMenuOpen ? <HiX className='size-6'/> : <HiMenu className='size-6'/>
                }
            </button>
            {/* desktop navitems */}
            <div className="hidden lg:flex items-center gap-10">
                {
                    navLinks.map((link, index) => (
                        <a 
                          key={index} 
                          href={link.href}
                          onClick={() => setActiveLink(link.href)} 
                          className={`text-lg font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${activeLink === link.href ? "text-blue-600 after:w-full" : "text-gray-900 hover:text-gray-900"}`}
                        >
                          {link.label}
                        </a>
                    ))
                }
            </div>
            {/* get started button */}
            
            <button className="hidden lg:flex bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-2xl">
                <a href="#getstarted">Get started</a>
            </button>
            

            </div>
            {/* Mobile menu items */}
            {
                isMenuOpen && (
                    <div className='md:hidden bg-white border-1 border-gray-100 py-4'>
                        <div className='container mx-auto px-4 space-y-3'>
                            {navLinks.map((link, index) => (
                                <a
                                key={index}
                                onClick={() =>  {
                                    setActiveLink(link.href);
                                    setIsMenuOpen(false);
                                }}
                                className={`block text-sm font-medium py-2 ${activeLink === link.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`}
                                href={link.href}>{link.label}
                                </a>
                            ))}
                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
                            <a href="#getstarted">Get started</a>
                            </button>
                        </div>

                    </div>
               )
            }
      </nav>
    )
}

export default Navbar;
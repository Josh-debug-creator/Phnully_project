import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32 pt-16"> {/* Added pt-4 for desktop top padding */}
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <span className="font-bold logo">P</span>
            <span className="ml-1 text-xl font-semibold text-gray-700">hnully</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavLink className="text-gray-700 hover:text-blueviolet-600 transition">Home</NavLink>
            <NavLink className="text-gray-700 hover:text-blue-600 transition">Services</NavLink>
            <NavLink className="text-gray-700 hover:text-blue-600 transition">Contact</NavLink>
            <NavLink className="text-gray-700 hover:text-blue-600 transition">Catalogue</NavLink>
            <NavLink className="text-gray-700 hover:text-blue-600 transition">Team</NavLink>
          </div>

          {/* Login Link */}
          <div className="hidden md:flex">
            <NavLink className="text-gray-700 hover:text-blue-600 transition ml-4">Login</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with smooth slide-down */}
      <div
        className={`md:hidden overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        } bg-white shadow-md`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
          <NavLink className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition">
            Home
          </NavLink>
          <NavLink className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition">
            Services
          </NavLink>
          <NavLink className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition">
            Contact
          </NavLink>
          <NavLink className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition">
            Catalogue
          </NavLink>
          <NavLink className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition">
            Team
          </NavLink>
          <NavLink className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

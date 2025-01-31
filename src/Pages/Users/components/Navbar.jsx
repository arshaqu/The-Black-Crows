import React, { useState } from 'react';
import '../../Users/Home.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-lg fixed w-full z-10" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            {/* <img  style={{width:'8%'}} src={Icon} alt='Nothing Found...'  />  */}
            <a className='text_icone hover:text-whit kolker font-bold ' style={{marginLeft:'3px',fontSize:'38px',color:'white'}} href="/" >
             The Black Crow 
            </a>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div style={{fontFamily:'fantasy',fontWeight:'100',fontSize:'10px'}} className="hidden md:flex space-x-4 items-center">
            <a
              href="# "
              style={{fontSize:'20px'}}
              className="text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium tapestry"
            >
              Home
            </a>
            <a
              href="# "
              style={{fontSize:'20px'}}
              className="text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium tapestry"
            >
              About
            </a>
            <a
              href="# "
              style={{fontSize:'20px'}}
              className="text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium tapestry"
            >
              Services
            </a>
            <a
              href="# "
              style={{fontSize:'18px'}}
              className="text-white hover:text-black px-3 py-2 rounded-md text-sm tapestry font-bold"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Dropdown for mobile */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            <a
              href="# "
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium tapestry"
            >
              Home
            </a>
            <a
              href="# "
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium creepster"
            >
              About
            </a>
            <a
              href="# "
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium creepster"
            >
              Services
            </a>
            <a
              href="# "
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium creepster"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

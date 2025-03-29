import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const messages = [
    "NOT AFFILIATED WITH THE NFL, NHL, NBA, MLB, or NCAA.",
    "ALL TRADEMARKS ARE THE PROPERTY OF THEIR RESPECTIVE OWNERS.",
    "This is an independent sports news platform."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000); // Change message every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-lg fixed w-full z-10 bg-white/80">
      {/* Announcement Banner */}
      <div className="text-white flex justify-center items-center text-center bg-black w-full h-14 font-bold  text-xs sm:text-sm md:text-base">
  <h1 className='animate-fade-in-out'>{messages[index]}</h1>
</div>


      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a className="text-black text-2xl sm:text-3xl font-bold" href="/">
              THE BLACK CROW
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-lg font-semibold">
            <a href="#" className="text-gray-600 hover:text-black">Home</a>
            <a href="#" className="text-gray-600 hover:text-black">About</a>
            <a href="#" className="text-gray-600 hover:text-black">Services</a>
            <a href="#" className="text-gray-600 hover:text-black">Contact</a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-2 px-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-black py-2">Home</a>
          <a href="#" className="block text-gray-700 hover:text-black py-2">About</a>
          <a href="#" className="block text-gray-700 hover:text-black py-2">Services</a>
          <a href="#" className="block text-gray-700 hover:text-black py-2">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

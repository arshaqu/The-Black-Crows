import React, { useState, useEffect } from 'react';
import Navbar from '../../Pages/Users/components/Navbar';
import Image1 from '../../Assets/Banners/Image1.jpg'
import Image2 from '../../Assets/Banners/Image2.jpg'

const images = [
 Image1,
 Image2
];

function Home() {
  const [banner, setBanner] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBanner((prev) => (prev === images[0] ? images[1] : images[0]));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Banner Section with Overlay Text */}
        <div className="relative w-full sm:h-[500px] lg:h-screen md:h-80 lg:h-96">
          <img src={banner} alt="Banner" className="w-full h-full object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Our Store</h1>
            <p className="text-lg md:text-xl mb-6">Discover Unique Styles and Incredible Deals</p>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Welcome to Our Basketball Collection
          </h2>
          <p className="text-md md:text-lg text-gray-700 max-w-2xl lg:max-w-5xl mx-auto mb-6">
            Experience the passion of basketball with our carefully curated collection. 
            From classic designs to modern styles, we have something for every basketball enthusiast. 
            Explore our range and find your perfect match today!
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300">
              View Collection
            </button>
            <button className="border border-black text-black px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="container mx-auto px-4 mt-5">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-24 lg:pl-48 lg:px-48">
            {[...Array(12)].map((_, index) => (
              <div key={index}>
                <img
                  className="h-auto max-w-full rounded-lg "
                  src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${index+1}.jpg`}
                  alt=""
                />
                <p className="mt-2  text-sm text-center font-serif">
                  INDIANA BASKETBALL
                </p>
                <p className="text-sm text-center font-serif">FROM RS 500/-</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
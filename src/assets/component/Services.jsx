import React from 'react';

const Services = () => {
  return (
    <div className="bg-[#3A4855]  flex justify-center py-4">
      <div className="w-full max-w-screen-xl">
        <div className="w-full flex items-center ">
          <ul className="flex flex-wrap  sm:justify-start sm:flex-row md:justify-start lg:justify-start w-full h-full text-white">
            {/* First row: Free Shipping and Free Returns */}
            <li className="flex items-center w-[50%]   sm:w-1/4 md:w-1/4 lg:w-1/4 p-2 ">
              <div className="flex items-center justify-center text-[#E96630] text-xl p-2 rounded-full border-2 border-blue-500">
                <i className="fa-solid fa-truck-fast"></i>
              </div>
              <div className="ml-2 text-sm">
                <h3>Free Shipping</h3>
                <p className="text-[#828385]">Free Delivery Under $100</p>
              </div>
            </li>
            <li className="flex items-center w-[50%]  sm:w-1/4 md:w-1/4 lg:w-1/4 p-2">
              <div className="flex items-center justify-center text-[#E96630] text-xl p-2 rounded-full border-2 border-blue-500">
                <i className="fa-solid fa-person-walking-arrow-loop-left"></i>
              </div>
              <div className="ml-2 text-sm">
                <h3>Free Returns</h3>
                <p className="text-[#828385]">Hassle free returns</p>
              </div>
            </li>

            {/* Second row: Secure Shopping and Unlimited Blocks */}
            <li className="flex items-center w-[50%]  sm:w-1/2 md:w-1/4 lg:w-1/4 p-2">
              <div className="flex items-center justify-center text-[#E96630] text-xl p-2 rounded-full border-2 border-blue-500">
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
              <div className="ml-2 text-sm">
                <h3>Secure Shopping</h3>
                <p className="text-[#828385]">Best security features</p>
              </div>
            </li>
            <li className="flex items-center w-[50%] sm:w-1/2 md:w-1/4 lg:w-1/4 p-2">
              <div className="flex items-center justify-center text-[#E96630] text-xl p-2 rounded-full border-2 border-blue-500">
                <i className="fa-solid fa-cube"></i>
              </div>
              <div className="ml-2 text-sm">
                <h3>Unlimited Blocks</h3>
                <p className="text-[#828385]">Any content, any page</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;

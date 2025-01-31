import React from 'react';

const Featured = () => {
  return (
    <div className="w-full bg-gray-100 mt-10">
      <div className="max-w-screen-xl w-full mx-auto">
        {/* Header Section */}
        <div className="w-full h-[90px] bg-gray-100 flex justify-center items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            Featured Products
          </h1>
        </div>

        {/* Orange line below header */}
        <div className="bg-orange-600 w-[50px] h-[3px] mx-auto mt-2"></div>

        {/* Description Section */}
        <div className="w-full h-auto bg-gray-100 mt-4">
          <p className="text-gray-500 px-4 sm:px-16 md:px-32">
            Display any products as tab or accordion with optional grid or carousel mode. Custom products per module and per breakpoint.
          </p>
          <p className="text-gray-500 px-4 sm:px-16 md:px-32">
            Each module can display products in either grid or list view with different styles per module.
          </p>
        </div>

        {/* Category Section */}
        <div className="w-full h-[50px] flex justify-center items-center mt-6">
          <div className="w-[90%] sm:w-[80%] md:w-[60%] h-[50px] flex flex-wrap justify-center">
            {/* Category Item: Featured */}
            <div className="w-[48%] sm:w-[23%] md:w-[23%] h-[50px] bg-blue-700 flex justify-center items-center mb-2 sm:mb-0">
              <p className="text-white font-bold text-xs sm:text-base">FEATURED</p>
            </div>
            {/* Category Item: Latest */}
            <div className="w-[48%] sm:w-[23%] md:w-[23%] h-[50px] bg-gray-300 flex justify-center items-center mb-2 sm:mb-0">
              <p className="text-gray-600 font-bold text-xs sm:text-base">LATEST</p>
            </div>
            {/* Category Item: Bestseller */}
            <div className="w-[48%] sm:w-[23%] md:w-[23%] h-[50px] bg-gray-300 flex justify-center items-center mb-2 sm:mb-0">
              <p className="text-gray-600 font-bold text-xs sm:text-base">BESTSELLER</p>
            </div>
            {/* Category Item: Specials */}
            <div className="w-[48%] sm:w-[23%] md:w-[23%] h-[50px] bg-gray-300 flex justify-center items-center mb-2 sm:mb-0">
              <p className="text-gray-600 font-bold text-xs sm:text-base">SPECIALS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

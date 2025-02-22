import React from 'react';

const Buy = () => {
  return (
    <div className="w-full bg-white pt-6">
      <div className="max-w-screen-xl w-full mx-auto ">
        {/* Header Section */}
        <div className="w-full  bg-white flex justify-center items-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Why Buy From Us?</h1>
        </div>

        {/* Orange line below header */}
        <div className="bg-orange-600 w-[50px] h-[3px] mx-auto mt-2"></div>

        {/* Description Section */}
        <div className="w-full lg: bg-white mt-4">
          <p className="text-gray-500 px-4 sm:px-[140px] md:px-[100px] text-center">
            Journal has been the best selling and most loved Opencart theme since first launch in 2013. Tried and tested , Journal
          </p>
          <p className="text-gray-500 sm:px-[140px] md:px-[100px] text-center ">
            is the best Opencart theme framework on the market today. Learn more
          </p>
        </div>

        {/* Top Categories Section */}
        <div className="w-full flex justify-center items-center pt-4 ">
          <div className="w-[90%] md:w-[75%] sm:w-[50%]  flex flex-wrap xl:w-[50%] justify-between">
            <div className="w-[45%] sm:w-[25%]  bg-blue-700 flex justify-center items-center sm:mb-0">
              <p className="text-white font-bold text-xs sm:text-base">TOP CATEGORIES</p>
            </div>
            <div className="w-[45%] sm:w-[25%]   bg-gray-300 flex justify-center items-center  sm:mb-0">
              <p className="text-gray-600 font-bold text-xs sm:text-base">ELECTRONICS</p>
            </div>
            <div className="w-[45%] sm:w-[25%] bg-gray-300 flex justify-center items-center  sm:mb-0">
              <p className="text-gray-600 font-bold text-xs sm:text-base">BEAUTY</p>
            </div>
            <div className="w-[45%] sm:w-[25%] h-[50px] bg-gray-300 flex justify-center items-center  sm:mb-0">
              <p className="text-gray-600 font-bold text-xs sm:text-base">FASHION</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;

import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
  return (
    <div className="w-full bg-gray-100  ">
      <div className="max-w-screen-xl mx-auto ">
        
        {/* Title Section */}
        <div className="w-full  bg-gray-100 flex justify-center items-center pt-3 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">From Our Blog</h1>
        </div>

        {/* Orange Line Below Title */}
        <div className="bg-orange-600 w-[50px] h-[3px] mx-auto "></div>

        {/* Description Section */}
        <div className="w-full  bg-gray-100 pt-3 ">
          <p className="text-gray-500 text-sm sm:text-base md:text-lg text-center sm:px-16 md:px-32">
            Journal comes with its own simple yet powerful blog. With the new advanced typography styles, your post page design will be unmatched.
          </p>
        </div>

        {/* Category Selector */}
        <div className="w-full  flex justify-center items-center pt-5 sm: ">
          <div className="w-full sm:w-[70%] md:w-[50%] flex justify-center ">
            <div className="w-[30%] bg-blue-700 flex justify-center items-center">
              <p className="text-white font-bold">LATEST POST</p>
            </div>
            <div className="w-[30%] h-[50px] bg-gray-300 flex justify-center items-center">
              <p className="text-gray-600 font-bold">MOST READ</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Blog

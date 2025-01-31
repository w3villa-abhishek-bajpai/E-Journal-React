import React from 'react';

const Hero = () => {
  return (
    <div className="hidden w-full bg-blue-800 md:flex justify-center">
      <div className="flex justify-between max-w-screen-xl w-full">
        {/* Left Section */}
        <div className="w-[22%] bg-yellow-400  p-2 flex gap-2 items-center">
          <i className="fa-solid fa-bars"></i>
          <div>
            <p>ALL DEPARTMENTS</p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="w-[600px] flex  items-center text-white ">
          <ul className="flex gap-5 justify-between">
            <li>MULTILEVEL</li>
            <li>MEGA MENU</li>
            <li>FULLWIDTH</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-1/4 flex gap-4 justify-between">
          {/* Contact */}
          <div className="text-white flex items-center gap-2">
            <i className="fa-solid fa-phone"></i> 1.800.555.6789
          </div>

          {/* Blog */}
          <div className="w-1/3 bg-yellow-400 flex justify-center items-center gap-2 text-[14px] p-2" >
            <i className="fa-solid fa-message"></i> BLOG
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

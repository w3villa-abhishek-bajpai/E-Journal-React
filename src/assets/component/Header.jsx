import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-gray-100 flex justify-evenly  items-center sm:px-0 px-1">
      <div className="flex justify-between max-w-screen-xl w-full ">
        {/* Name Section */}
        <div className="w-[200px] flex items-center py-4 sm:w-[200px] ">
          <h1 className=" text-3xl sm:text-4xl font-semibold">JOURNAL</h1>
        </div>

        {/* Search Bar Section */}
        <div className="w- hidden md:flex flex items-center py-3 ">
          <div className="bg-blue-800 text-white flex items-center w-full rounded-lg">
            <div className="bg-blue-700 h-10 w-10 flex justify-center items-center text-white">
              ALL
            </div>
            <input
              type="text"
              placeholder="Search here"
              className="w-full h-10 px-4 text-black bg-white"
            />
            <div className="bg-blue-700 h-10 w-12 flex justify-center items-center">
              <i className="fa-solid fa-magnifying-glass text-white"></i>
            </div>
          </div>
        </div>

        {/* Header 3 Section */}
        <div className="w-[300px]  hidden lg:flex  text-gray-600 ml-4  items-center">
          <ul className="flex gap-4 ml-1">
            <li className="flex flex-col items-center">
              <div className="">
                <i className="fa-solid fa-user"></i>
              </div>
              <div>
                <p>Login</p>
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="">
                <i className="fa-solid fa-pen"></i>
              </div>
              <div>
                <p>Register</p>
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="">
                <i className="fa-regular fa-heart"></i>
              </div>
              <div>
                <p>Wishlist</p>
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="">
                <i className="fa-solid fa-repeat"></i>
              </div>
              <div>
                <p>Compare</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Header 4 Section */}
        <div className="w-[180px] py-4  flex items-center justify-end text-sm  sm:max-w-full">
          <ul className="flex gap-4 items-center">
            <li className="text-gray-600 lg:text-[15px] sm:text-[10px]">0 item(s) - $0.00</li>
            <li>
              <div className="bg-blue-700 text-white py-2 px-4 rounded-lg text-l">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

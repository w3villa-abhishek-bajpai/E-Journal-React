import React from 'react';
import { FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { CiDollar } from "react-icons/ci";
import { RiMenuSearchLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

function StripHeader() {
  return (
    <>
      <div className="w-full bg-white flex justify-evenly items-center px-1 text-[12px] sm:text-normal sm:px-0">
        <div className="flex justify-between max-w-screen-xl w-full">
          {/* Left Section */}
          <div className="hidden md:flex items-center text-slate-600">
            <ul className="flex gap-4 align-middle my-2">
              <li className="flex align-middle hover:text-blue-500 transition-all duration-200">
                <FaHome className="text-[20px] mr-[2px]" /> Home
              </li>
              <li className="hidden sm:flex align-middle hover:text-blue-500 transition-all duration-200">
                <IoIosContact className="text-[20px] mr-[2px]" /> Contact
              </li>
              <li className="flex align-middle hover:text-blue-500 transition-all duration-200">
                <FaHome className="text-[20px] mr-[2px]" /> About Us
              </li>
              <li className="hidden sm:flex align-middle hover:text-blue-500 transition-all duration-200">
                <FaQuestionCircle className="text-[20px] mr-[2px]" /> FAQ 
                <FaCaretDown className="text-[15px]" />
              </li>
            </ul>
          </div>

          {/* Middle Section */}
          <div className="items-center text-slate-600">
            <ul className="flex gap-4 align-middle my-2">
              <li className="hover:text-blue-500 transition-all duration-200">English</li>
              <li className="flex align-middle hover:text-blue-500 transition-all duration-200">
                <CiDollar className="text-[20px] mr-[2px]" /> US Dollar
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex items-center text-slate-600">
            <ul className="flex gap-4 align-middle my-2">
              <li className="flex align-middle hover:text-blue-500 transition-all duration-200">
                <RiMenuSearchLine className="text-[20px] mr-[2px]" /> More Menus
              </li>
              <li className="flex align-middle hover:text-blue-500 transition-all duration-200">
                <TbTruckDelivery className="text-[20px] mr-[2px]" /> Delivery
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default StripHeader;

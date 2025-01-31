import React from "react";
import abc from "../images/mobile.webp";
import abcd from "../images/watch.webp";
import aba from "../images/computer.png";

const Information = () => {
  return (
    <div className="w-full bg-white flex justify-evenly items-center">
      <div className="flex-col  gap-2 justify-between max-w-screen-xl w-full py-2 xl:flex flex-row  md:flex flex-col ">
        {/* Name Section */}

        <div className=" w-[100%] h-auto lg:w-[70%]  flex bg-gray-100 justify-evenly items-center border-2 md:h-[40%] sm:h-[20%]">
          <div className="w-[50%] h-[550px] bg-gray-200 border-2">
            <div className="mob bg-blue-700 w-[79px] h-[34px] color-white mt-[160px] ml-[20px] flex justify-center items-center rounded text-white md:flex flex-col sm:flex flex-col">
              <p>MOBILE</p>
            </div>

            <div className="mt-[20px] text-4xl font-semi-bold ml-[20px]">
              <h1>Best mobile options at any resolutions</h1>
            </div>

            <div className="mob bg-gray-300 w-[119px] h-[34px] color-white mt-[30px] ml-[20px] flex justify-center items-center rounded text-black border-1 ">
              Learn More
            </div>
          </div>
          <div className="w-[50%] h-[550px] bg-gray-200  border-2">
            <img
              src={abc}
              alt="mobile image"
              className="w-full h-full object-contain object-center rounded-lg"
            />
          </div>
        </div>

        <div className="lg:w-[29%]  h-[150px] md:h-[550px] mt-20px mb-20px ml-10px flex gap-2 bg-gray-100 xl:flex flex-col sm:flex flex-row md:flex-col border-2">
          <div className="w-[50%] lg:w-[100%] md:h-[49%] bg-black flex  md:w-[100%] border-2"> 
            <div className=" sm:w-[50%] lg:w-[50%] h-[100%] bg-gray-200 flex  justify-center items-center border-2">
              <div className="px-2">
                <p className="text-blue-600 flex-col font-bold text-[15px] ">
                  WEARABLES
                  <br />
                </p>
                <p className="flex-col text-[15px]">Intelligent& </p>
                <p className="text-[15px]">Durable</p>
                <p className="text-[15px]">Design</p>
              </div>
            </div>
            <div className="w-[60%] lg:w-[50%] h-[100%] bg-gray-200 border-2">
              <img
                src={abcd}
                alt="watch image"
                className="w-full h-full object-fill object-center rounded-lg"
              />
            </div>
          </div>
          <div className="w-[55%] md:h-[49%] lg:mt-[10px] bg-red-300 flex lg:w-[100%]  md:w-[100%] border-2">
            <div className=" w-[40%] lg:w-[50%] h-[100%] bg-gray-200 flex justify-center items-center border-2 ">
              <div>
                <p className=" text-blue-600 flex-col font-bold text-[15px] lg:text-2xl">COMPUTER</p>
                <p className="flex-col ">Build your</p>
                <p>Own high</p>
                <p>powered PC</p>
              </div>
            </div>
            <div className="w-[60%] lg:w-[50%] h-[100%] bg-gray-200 border-2">
              <img
                src={aba}
                alt="watch image"
                className="w-full h-full object-cover object-center rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;

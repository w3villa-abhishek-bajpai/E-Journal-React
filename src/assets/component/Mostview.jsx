import React from 'react'
import image1 from "../images/headphone.jpeg";
import image2 from "../images/shoes.jpeg";
import image3 from "../images/watch.webp";



const Mostview = () => {
  return (
    <div className="w-full bg-gray-800 h-[220px] flex justify-evenly items-center mt-[10px]">
    <div className="max-w-screen-xl w-full  h-[230px] ">

        <div className=" mt-[15px] h-auto w-full border-3">
            <h1 className='text-white text-2xl'>MOST VIEWED</h1>
        </div>
        <div className="bg-orange-600 w-[70px] h-[3px] "></div>


        <div className="flex justify-between">
        <div className="lg:w-[30%] h-[110px] mt-[30px] flex ">
        <div className="overflow-hidden w-[30%] object-cover mx-auto  md:h-full">
                        <img
                          src={image1}
                          alt="Fashion Image"
                          className="w-[100%] mx-auto object-cover h-full object-center"
                        />
                      </div>
            <div className="w-[70%] h-full bg-blue-100">
              <div className="w-full h-[70%] bg-blue-100 ">
                <div className="font-semi-bold text-xl py-[10px] px-[10px]">
                  <h1> Overized Sunglass....</h1>
                  <h1 className="font-light">$434</h1>
                </div>
              </div>
              <div className="w-full h-[30%] bg-blue-100 flex justify-evenly items-center">
              <i class="fa-solid fa-cart-shopping"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-right-left"></i>
              </div>
            </div>

        </div>
        <div className="w-[30%] h-[110px] mt-[30px] flex ">
        <div className="overflow-hidden w-[30%] object-cover mx-auto  md:h-full">
                        <img
                          src={image2}
                          alt="Fashion Image"
                          className="w-[100%] mx-auto object-cover h-full object-center"
                        />
                      </div>
            <div className="w-[70%] h-full bg-blue-100">
            <div className="w-full h-[70%] bg-blue-100 ">
                <div className="font-semi-bold text-xl py-[10px] px-[10px]">
                  <h1> Womens Maria Pump....</h1>
                  <h1 className="font-light">$434</h1>
                </div>
              </div>
              <div className="w-full h-[30%] bg-blue-100 flex justify-evenly items-center">
              <i class="fa-solid fa-cart-shopping"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-right-left"></i>
              </div>
            </div>

        </div>
        <div className="w-[30%] h-[110px] bg- blue-100 mt-[30px] flex justify-evenly">
        <div className="overflow-hidden w-[30%] object-cover mx-auto  md:h-full  bg-blue-100">
                        <img
                          src={image3}
                          alt="Fashion Image"
                          className="w-[100%] mx-auto object-cover h-full object-center"
                        />
                      </div>
        <div className="w-[70%] h-full bg-blue-100">
        <div className="w-full h-[70%] bg-blue-100 ">
                <div className="font-semi-bold text-xl py-[10px] px-[10px]">
                  <h1> Smart Watches....</h1>
                  <h1 className="font-light">$434</h1>
                </div>
              </div>
              <div className="w-full h-[30%] bg-blue-100 flex justify-evenly items-center">
              <i class="fa-solid fa-cart-shopping"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-right-left"></i>

              </div>
        </div>

        </div>
        </div>

     
       
        </div>
        </div>
  )
}

export default Mostview
import React from "react";
import Slider from "react-slick"; // Make sure the 'react-slick' package is installed
import "slick-carousel/slick/slick.css"; // Slick CSS for the carousel
import "slick-carousel/slick/slick-theme.css"; // Slick theme CSS

import image1 from "../images/fashio2.jpeg";
import image2 from "../images/fashion.webp";
import image3 from "../images/fashion3.jpeg";
import image4 from "../images/fashion5.jpeg";

import { FaRegHeart } from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";

function Fproduct() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-slate-300 py-3">
      <div className="flex flex-col md:items-center max-w-[1600px] mx-auto my-10 px-3 md:px-5 lg:px-7 2xl:px-10">
        <div className="text-[21px] sm:text-[27px] xl:text-[33px] font-semibold">
          Featured Category
        </div>
        <div className="h-[2px] w-[80px] bg-orange-800 my-2"></div>
        <div className="w-[78%] md:text-center text-slate-900 ">
          Easily create category-based modules and display products from specific
          categories or brands only. The advanced page builder allows you to
          create any grid layout with full control at any breakpoint.
        </div>

        <div className="flex flex-col md:flex-row w-full h-auto justify-center mt-5">
          {/* First Child Div */}
          <div className="w-[100%] md:w-[30%] xl:w-[20%] flex justify-center items-center md:items-start px-0 sm:px-10 md:px-0 md:h-[500px]">
            <div className="bg-cover md:bg-slate-400 bg-center w-full flex flex-col relative maxw-full h-full">
              <div className="pl-5 h-[40px] mt-2 hidden md:block font-bold text-slate-700 text-[1em]">
                Fashion
                <div className="h-[1.5px] bg-orange-500 w-[47px]"></div>
              </div>
              <div className="overflow-hidden w-full object-cover mx-auto md:mt-[20px] md:h-[310px]">
                <img
                  src={image1}
                  alt="Fashion Image"
                  className="w-[95%] mx-auto object-cover h-full object-center"
                />
              </div>
              <div className="flex flex-col justify-between md:bg-slate-400 py-2 font-light text-[18px] sm:text-[16px] sm:px-5 w-full mb-6 md:mb-7">
                <div>Accessories</div>
                <div>Dresses</div>
                <div>Pants</div>
                <div>T-shirts</div>
                <div className="text-blue-700 font-bold">
                  See all in Fashion
                </div>
              </div>
            </div>
          </div>

          {/* Second Child Div */}
          <div className="w-full md:w-[70%] xl:w-[80%] text-center overflow-hidden flex flex-col justify-start bg-white">
            <div className="md:pl-5 h-[40px] mt-3 font-semibold text-slate-700 text-[1.2em] text-start">
              New in Fashion
              <div className="h-[1.3px] bg-orange-800 hidden sm:block w-[60px]"></div>
            </div>
            <Slider {...settings}>
              {/* Slide 1 */}
              <div className="bg-white max-w-[90%] min-w-[95%] sm:max-w-[270px] sm:min-w-[270px] flex pb-[24px] text-xl font-bold mt-[20px] sm:mt-auto relative border-[1.5px] rounded-lg border-slate-200  overflow-hidden shadow-lg  hover:shadow-xl">
  <div className="relative overflow-hidden object-cover sm:h-[250px] mx-auto group">
   
    <img src={image2} alt="Bodycorn Dress" className="w-full h-full object-center object-cover transition-all duration-300 group-hover:opacity-80" />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-0 transition-all duration-300"></div>
  </div>
  
  <div className="w-full flex flex-col justify-between items-start mt-4 px-3">
 
    <div className="font-semibold text-[14px] sm:text-[16px] text-slate-700 overflow-hidden whitespace-nowrap text-ellipsis">
      Bodycorn Dress
    </div>
    
  
    <div className="font-light text-[14px] sm:text-[16px] text-slate-900 mt-2">
      ₹1099.0
    </div>
    <div className="h-[1px] bg-slate-200 mt-2 w-full"></div>
  
    <div className="flex justify-between items-center mt-3 w-full">
      <button className="bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-md text-white font-medium text-[12px] sm:text-[14px] transition-all duration-300 ease-in-out">
        ADD TO CART
      </button>
      <div className="flex space-x-3 text-slate-700 ">
        <div className="hover:text-red-500 transition-all duration-300 ease-in-out">
          <FaRegHeart />
        </div>
        <div className="hover:text-blue-600 transition-all duration-300 ease-in-out">
          <RiExchangeLine />
        </div>
      </div>
    </div>
  </div>
</div>


              {/* Slide 2 */}
              <div className="bg-white max-w-[90%] min-w-[95%] sm:max-w-[270px] sm:min-w-[270px] flex pb-[24px] text-xl font-bold mt-[20px] sm:mt-auto relative border-[1.5px] rounded-lg border-slate-200  overflow-hidden shadow-lg  hover:shadow-xl">
  <div className="relative overflow-hidden object-cover sm:h-[250px] mx-auto group">
   
    <img src={image3} alt="Bodycorn Dress" className="w-full h-full object-center object-cover transition-all duration-300 group-hover:opacity-80" />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-0 transition-all duration-300"></div>
  </div>
  
  <div className="w-full flex flex-col justify-between items-start mt-4 px-3">
 
    <div className="font-semibold text-[14px] sm:text-[16px] text-slate-700 overflow-hidden whitespace-nowrap text-ellipsis">
      Bodycorn Dress
    </div>
    
  
    <div className="font-light text-[14px] sm:text-[16px] text-slate-900 mt-2">
      ₹1099.0
    </div>
    <div className="h-[1px] bg-slate-200 mt-2 w-full"></div>
  
    <div className="flex justify-between items-center mt-3 w-full">
      <button className="bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-md text-white font-medium text-[12px] sm:text-[14px] transition-all duration-300 ease-in-out">
        ADD TO CART
      </button>
      <div className="flex space-x-3 text-slate-700 ">
        <div className="hover:text-red-500 transition-all duration-300 ease-in-out">
          <FaRegHeart />
        </div>
        <div className="hover:text-blue-600 transition-all duration-300 ease-in-out">
          <RiExchangeLine />
        </div>
      </div>
    </div>
  </div>
</div>


              {/* Slide 3 */}
              <div className="bg-white max-w-[90%] min-w-[95%] sm:max-w-[270px] sm:min-w-[270px] flex pb-[24px] text-xl font-bold mt-[20px] sm:mt-auto relative border-[1.5px] rounded-lg border-slate-200  overflow-hidden shadow-lg  hover:shadow-xl">
  <div className="relative overflow-hidden object-cover sm:h-[250px] mx-auto group">
   
    <img src={image4} alt="Bodycorn Dress" className="w-full h-full object-center object-cover transition-all duration-300 group-hover:opacity-80" />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-0 transition-all duration-300"></div>
  </div>
  
  <div className="w-full flex flex-col justify-between items-start mt-4 px-3">
 
    <div className="font-semibold text-[14px] sm:text-[16px] text-slate-700 overflow-hidden whitespace-nowrap text-ellipsis">
     Jacob Tourtal
    </div>
    
  
    <div className="font-light text-[14px] sm:text-[16px] text-slate-900 mt-2">
      ₹299.0
    </div>
    <div className="h-[1px] bg-slate-200 mt-2 w-full"></div>
  
    <div className="flex justify-between items-center mt-3 w-full">
      <button className="bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-md text-white font-medium text-[12px] sm:text-[14px] transition-all duration-300 ease-in-out">
        ADD TO CART
      </button>
      <div className="flex space-x-3 text-slate-700 ">
        <div className="hover:text-red-500 transition-all duration-300 ease-in-out">
          <FaRegHeart />
        </div>
        <div className="hover:text-blue-600 transition-all duration-300 ease-in-out">
          <RiExchangeLine />
        </div>
      </div>
    </div>
  </div>
</div>

            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fproduct;

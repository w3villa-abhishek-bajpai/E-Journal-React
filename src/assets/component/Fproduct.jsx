import { FaRegHeart } from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/fashio2.jpeg";
import image2 from "../images/fashion.webp";
import image3 from "../images/fashion3.jpeg";
import image4 from "../images/fashion5.jpeg";

function Fproduct() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-slate-300 py-3">
      <div className="flex flex-col md:items-center max-w-screen-xl mx-auto my-10 px-3 md:px-5 lg:px-7 2xl:px-10">
        <div className="text-[21px] sm:text-[27px] xl:text-[33px] font-semibold">
          Featured Category
        </div>
        <div className="h-[2px] w-[80px] bg-orange-800 my-2"></div>
        <div className="w-[78%] md:text-center text-slate-900 ">
          Easily create category-based modules and display products from
          specific categories or brands only. The advanced page builder allows
          you to create any grid layout with full control at any breakpoint.
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
                  alt=""
                  className="w-[100%] sm:w-[95%] mx-auto object-cover h-full object-center"
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
          <div className="w-full md:w-[70%] xl:w-[80%] h-[460px] sm:h-auto text-center overflow-hidden flex flex-col justify-start bg-white ">
            <div className="md:pl-5 h-[40px] mt-3 font-bold text-slate-700 text-[1.2em] text-start">
              New in Fashion
              <div className="h-[1.3px] bg-orange-800 hidden sm:block w-[60px]"></div>
            </div>
            <Slider {...settings}>
              {/* Product Card 1 */}
              <div className="bg-cover bg-center max-w-[90%] min-w-[95%] sm:max-w-[270px] sm:min-w-[270px] flex pb-10 text-xl font-bold mt-[20px] sm:nt-auto relative border-[1.5px] rounded-sm border-slate-200 mb-10 overflow-hidden shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg">
                <div className="overflow-hidden object-cover sm:h-[250px] mx-auto">
                  <img
                    src={image2}
                    alt=""
                    className="w-full h-full object-cover object-center transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <div className="w-full flex justify-start font-normal mt-2 px-2 text-[12px] sm:text-[15px] overflow-hidden whitespace-nowrap text-ellipsis">
                  Bodycorn Dress
                </div>
                <div className="font-light w-full text-start text-[10px] sm:text-[14px] px-2 mt-[-4px]">
                  1099.0
                </div>
                <div className="flex justify-between mt-[8px] px-2">
                  <div className="flex font-normal text-[13px] sm:text-[15px]">
                    <button className="bg-blue-800 px-4 py-2 rounded-md text-white font-semibold text-[13px] sm:text-[14px] transition duration-300 hover:bg-blue-600">
                      ADD TO CART
                    </button>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <div className="md:mr-6 mr-2 ">
                      <FaRegHeart className="transition-transform duration-300 hover:scale-110" />
                    </div>
                    <div className="md:mr-4 mr-2 ">
                      <RiExchangeLine className="transition-transform duration-300 hover:scale-110" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="bg-cover bg-center max-w-[90%] min-w-[95%] sm:max-w-[270px] sm:min-w-[270px] flex pb-10 text-xl font-bold mt-[20px] sm:nt-auto relative border-[1.5px] rounded-sm border-slate-200 mb-10 overflow-hidden shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg">
                <div className="overflow-hidden object-cover sm:h-[250px] mx-auto">
                  <img
                    src={image3}
                    alt=""
                    className="w-full h-full object-cover object-center transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <div className="w-full flex justify-start font-normal mt-2 px-2 text-[12px] sm:text-[15px] overflow-hidden whitespace-nowrap text-ellipsis">
                  Black Lace Dress
                </div>
                <div className="font-light w-full text-start text-[10px] sm:text-[14px] px-2 mt-[-7px]">
                  899.0
                </div>
                <div className="flex justify-between mt-[8px] px-2">
                  <div className="flex font-normal text-[13px] sm:text-[15px]">
                    <button className="bg-blue-800 px-4 py-2 rounded-md text-white font-semibold text-[13px] sm:text-[14px] transition duration-300 hover:bg-blue-600">
                      ADD TO CART
                    </button>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <div className="md:mr-6 mr-2 ">
                      <FaRegHeart className="transition-transform duration-300 hover:scale-110" />
                    </div>
                    <div className="md:mr-4 mr-2 ">
                      <RiExchangeLine className="transition-transform duration-300 hover:scale-110" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="bg-cover bg-center max-w-[90%] min-w-[95%] sm:max-w-[270px] sm:min-w-[270px] flex pb-10 text-xl font-bold mt-[20px] sm:nt-auto relative border-[1.5px] rounded-sm border-slate-200 mb-10 overflow-hidden shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg">
                <div className="overflow-hidden object-cover sm:h-[250px] mx-auto">
                  <img
                    src={image4}
                    alt=""
                    className="w-full h-full object-cover object-center transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <div className="w-full flex justify-start font-normal mt-2 px-2 text-[12px] sm:text-[15px] overflow-hidden whitespace-nowrap text-ellipsis">
                  Jacob Turtleneck Sweater
                </div>
                <div className="font-light w-full text-start text-[10px] sm:text-[14px] px-2 mt-[-7px]">
                  699.0
                </div>
                <div className="flex justify-between mt-[8px] px-2">
                  <div className="flex font-normal text-[13px] sm:text-[15px]">
                    <button className="bg-blue-800 px-4 py-2 rounded-md text-white font-semibold text-[13px] sm:text-[14px] transition duration-300 hover:bg-blue-600">
                      ADD TO CART
                    </button>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <div className="md:mr-6 mr-2 ">
                      <FaRegHeart className="transition-transform duration-300 hover:scale-110" />
                    </div>
                    <div className="md:mr-4 mr-2 ">
                      <RiExchangeLine className="transition-transform duration-300 hover:scale-110" />
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

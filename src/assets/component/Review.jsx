import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function Review() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 items on medium screens
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 item on small screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 item on very small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full  flex justify-evenly  bg-white pb-10">
      <div className="max-w-screen-xl w-full  px-4 ">
        {/* Header Section */}
        <div className="w-full  text-black flex justify-center items-center mt-4 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold">
            What are people saying about us
          </h1>
        </div>

        <div className="bg-orange-600 w-[50px] h-[3px] mx-auto mt-2"></div>

        {/* Slider Section */}
        <div className="w-full bg-white  pt-3 ">
          <Slider {...settings}>
            {/* Slider Item 1 */}
            <div className=" bg-white max-w-[90%] border-slate-100 rounded-md mx-auto pb-4 ">
              <div className="w-full h-full flex justify-center items-center ">
                <i className="fa-solid fa-quote-left text-4xl sm:text-5xl md:text-6xl text-orange-600"></i>
              </div>
              <div className="w-full  flex justify-center items-center px-4">
                <h2 className="text-xs sm:text-sm md:text-base lg:text-lg text-center">
                  I have purchased hundreds of files over the past seven years but there is nothing close to this support and professionalism. The theme is simple, useful, and modern.
                </h2>
              </div>
              <div className="w-full ">
                <h1 className="font-bold text-sm sm:text-base md:text-lg flex justify-center items-center">
                  - Charli Baltimore
                </h1>
              </div>
            </div>

            {/* Slider Item 2 */}
            <div className="w-[80%]  bg-white border-slate-50 rounded-md max-w-[90%] mx-auto mb-4">
              <div className="w-full  flex justify-center items-center">
                <i className="fa-solid fa-quote-left text-4xl sm:text-5xl md:text-6xl text-orange-600"></i>
              </div>
              <div className="w-full  flex justify-center items-center px-4">
                <h2 className="text-xs sm:text-sm md:text-base lg:text-lg text-center">
                  I have purchased hundreds of files over the past seven years but there is nothing close to this support and professionalism. The theme is simple, useful, and modern.
                </h2>
              </div>
              <div className="w-full ">
                <h1 className="font-bold text-sm sm:text-base md:text-lg flex justify-center items-center">
                  - Charli Baltimore
                </h1>
              </div>
            </div>

            {/* Slider Item 3 */}
            <div className="w-[80%]  bg-white border-slate-50 rounded-md max-w-[90%] mx-auto mb-4">
              <div className="w-full flex justify-center items-center">
                <i className="fa-solid fa-quote-left text-4xl sm:text-5xl md:text-6xl text-orange-600"></i>
              </div>
              <div className="w-full  flex justify-center items-center px-4">
                <h2 className="text-xs sm:text-sm md:text-base lg:text-lg text-center">
                  I have purchased hundreds of files over the past seven years but there is nothing close to this support and professionalism. The theme is simple, useful, and modern.
                </h2>
              </div>
              <div className="w-full ">
                <h1 className="font-bold text-sm sm:text-base md:text-lg flex justify-center items-center">
                  - Charli Baltimore
                </h1>
              </div>
            </div>

            {/* Slider Item 4 */}
            <div className="w-[80%]  bg-white border-slate-50 rounded-md max-w-[90%] mx-auto mb-4">
              <div className="w-full flex justify-center items-center">
                <i className="fa-solid fa-quote-left text-4xl sm:text-5xl md:text-6xl text-orange-600"></i>
              </div>
              <div className="w-full  flex justify-center items-center px-4">
                <h2 className="text-xs sm:text-sm md:text-base lg:text-lg text-center">
                  I have purchased hundreds of files over the past seven years but there is nothing close to this support and professionalism. The theme is simple, useful, and modern.
                </h2>
              </div>
              <div className="w-full ">
                <h1 className="font-bold text-sm sm:text-base md:text-lg flex justify-center items-center">
                  - Charli Baltimore
                </h1>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Review;

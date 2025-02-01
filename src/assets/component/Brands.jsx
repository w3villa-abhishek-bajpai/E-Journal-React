import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Import images
import img from '../images/brand12.png';
import img2 from '../images/brand1.png';
import img3 from '../images/brand2.png';
import img4 from '../images/brand3.jpeg';
import img5 from '../images/brand4.jpeg';
import img6 from '../images/brand6.png';
import img7 from '../images/brand7.jpeg';
import img8 from '../images/brand8.jpeg';
import img9 from '../images/brand9.jpeg';
import img10 from '../images/brand11.png';
import img11 from '../images/brand12.png';

const Brands = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Small Tablets / Large Phones
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 480, // Small Phones
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white py-8 overflow-hidden"> {/* Ensure overflow is hidden to prevent horizontal scroll */}
      <div className="max-w-screen-xl mx-auto">
        {/* Header Section */}
        <div className="w-full bg-white flex justify-center items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Shop By Brands</h1>
        </div>

        {/* Orange Line Below Header */}
        <div className="bg-orange-600 w-[50px] h-[3px] mx-auto mt-2"></div>

        {/* Slider Section */}
        <div className="slider-container mt-8">
          <Slider {...settings}>
            <div className="flex justify-center items-center">
              <img src={img} alt="Brand 1" className="w-full h-[100px] object-contain" />
            </div>
            <div className="flex justify-center items-center">
              <img src={img2} alt="Brand 2" className="w-full h-[100px] object-contain" />
            </div>
            <div className="flex justify-center items-center">
              <img src={img3} alt="Brand 3" className="w-full h-[100px] object-contain" />
            </div>
            <div className="flex justify-center items-center">
              <img src={img4} alt="Brand 4" className="w-full h-[100px] object-contain" />
            </div>
            <div className="flex justify-center items-center">
              <img src={img5} alt="Brand 5" className="w-full h-[100px] object-contain" />
            </div>
            <div className="flex justify-center items-center">
              <img src={img6} alt="Brand 6" className="w-full h-[100px] object-contain" />
            </div>
            <div className="flex justify-center items-center">
              <img src={img7} alt="Brand 7" className="w-full h-[100px] object-contain" />
            </div>
            <div className="flex justify-center items-center">
              <img src={img8} alt="Brand 8" className="w-full h-[100px] object-contain" />
            </div>
            <div className="flex justify-center items-center">
              <img src={img9} alt="Brand 9" className="w-full h-[100px] object-contain" />
            </div>
            <div className="flex justify-center items-center">
              <img src={img10} alt="Brand 10" className="w-full h-[100px] object-contain" />
            </div>
            <div className="flex justify-center items-center">
              <img src={img11} alt="Brand 11" className="w-full h-[100px] object-contain" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Brands;

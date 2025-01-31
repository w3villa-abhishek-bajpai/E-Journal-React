import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import img from '../images/fashion.webp'
import imag from '../images/footwear.webp'
import image from '../images/homedecor.webp'
import images from '../images/gallery7.jpeg'



function Beauty() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="w-full bg-white h-[280px] flex justify-evenly   mt-[10px]">
    <div className="max-w-screen-xl w-full  h-[280px]">
    <div className="slider-container h-[260px] ">
      <Slider {...settings}>
        <div className='  h-[240px] relative'>
          <h3>
            <img src={img} alt="image" className='w-[95%] h-[235px]'/>
            <div className="mob bg-gray-300 w-[79px] h-[34px] text-black ml-[100px] flex justify-center items-center rounded absolute bottom-3"><p>BEAUTY</p></div>

          </h3>
                             
        </div>
        <div className='  h-[240px] relative'>
        <h3>
            <img src={imag} alt="image" className='w-[95%] h-[235px]'/>
            <div className="mob bg-gray-300 w-[89px] h-[34px] text-black ml-[100px] flex justify-center items-center rounded absolute bottom-3"><p>FOOTWEAR</p></div>

          </h3>
        </div>
        <div className='  h-[240px] relative'>
        <h3>
            <img src={image} alt="image" className='w-[95%] h-[235px]'/>
            <div className="mob bg-gray-300 w-[109px] h-[36px] text-black ml-[100px] flex justify-center items-center rounded absolute bottom-3"><p>HOME DECOR</p></div>

          </h3>
        </div>
        <div className="h-[240px] relative">
        <h3>
            <img src={img} alt="image" className='w-[95%] h-[235px]'/>
            <div className="mob bg-gray-300 w-[79px] h-[34px] text-black ml-[100px] flex justify-center items-center rounded absolute bottom-3"><p>BEAUTY</p></div>

          </h3>
        </div>
      
        <div className="h-[240px] relative">
        <h3>
            <img src={img} alt="image" className='w-[95%] h-[235px]'/>
            <div className="mob bg-gray-300 w-[79px] h-[34px] text-black ml-[100px] flex justify-center items-center rounded absolute bottom-3"><p>BEAUTY</p></div>

          </h3>
        </div>
      </Slider>
    </div>
    </div>
    </div>
  );
}

export default Beauty;

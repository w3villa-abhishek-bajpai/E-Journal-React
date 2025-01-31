import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img from '../images/tv.jpeg';
import imag from '../images/shoes.jpeg';
import image from '../images/headphone.jpeg';
import images from '../images/camera.jpeg';

function Products() {
  var settings = {
    dots: true,
    infinite: true, // Set infinite to true for a smooth looping experience
    speed: 500,
    slidesToShow: 3, // Shows 3 items at once
    slidesToScroll: 1, // Scrolls 1 item at a time
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
    <div className="w-full bg-gray-100 h-[550px] flex justify-center mt-[0px]">
      <div className="max-w-screen-xl w-full pt-2 ">
        <Slider {...settings}>
          {/* First Product */}
          <div className=" p-4 border-1 border-slate-300 bg-white max-w-[95%]">
            <div className="w-full h-[250px] overflow-hidden">
              <img src={img} alt="Camera" className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-center w-full  bg-gray-300 h-[40px] mt-2 px-2">
              <div className="a1"><a href="s">Television</a></div>
              <div className="a2"><p>Model X100</p></div>
            </div>
            <div>
              <p className="mt-[1px] px-2">Digital Camera</p>
              <div className="mt-[1px] px-2"><span>$725.00</span></div>
              <div className="flex  justify-between mt-1 px-2">
                <div className="flex  w-[40%] justify-between">
                  <div className=" flex h-[30px] justify-center items-center">1</div>
                  <div className='h-[30px]'>
                    <div className="arrow1 h-[50%]"><i className="fa-solid fa-caret-up"></i></div>
                    <div className="arrow1"><i className="fa-solid fa-caret-down"></i></div>
                  </div>
                  <button className='h-[30px] text-white px-2 rounded-md' style={{ backgroundColor: "#0d51d6" }}>Add to Cart</button>
                </div>
                <div className="flex w-[50px] justify-between items-center ">
                  <div><i className="fa-solid fa-heart"></i></div>
                  <div><i className="fa-solid fa-arrow-right-arrow-left"></i></div>
                </div>
              </div>
            </div>
            <div className=" flex bg-gray-300 h-[40px] items-center mt-2 px-2">
              <div className="flex w-full justify-between">
                <div className="a1"><p><i className="fa-solid fa-dollar-sign"></i> Buy Now</p></div>
                <div className="a2"><p><i className="fa-solid fa-question"></i> Question</p></div>
              </div>
            </div>
          </div>

          {/* Second Product */}
          <div className=" p-4  border-1 border-slate-300 bg-white max-w-[95%]">
            <div className="w-full h-[250px] overflow-hidden">
              <img src={images} alt="Camera" className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-center w-full  bg-gray-300 h-[40px] mt-2 px-2">
              <div className="a1"><a href="s">Canon</a></div>
              <div className="a2"><p>Model X100</p></div>
            </div>
            <div>
              <p className="mt-[1px] px-2">Digital Camera</p>
              <div className="mt-[1px] px-2"><span>$725.00</span></div>
              <div className="flex  justify-between mt-1 px-2">
                <div className="flex  w-[40%] justify-between">
                  <div className=" flex h-[30px] justify-center items-center">1</div>
                  <div className='h-[30px]'>
                    <div className="arrow1 h-[50%]"><i className="fa-solid fa-caret-up"></i></div>
                    <div className="arrow1"><i className="fa-solid fa-caret-down"></i></div>
                  </div>
                  <button className='h-[30px] text-white px-2 rounded-md' style={{ backgroundColor: "#0d51d6" }}>Add to Cart</button>
                </div>
                <div className="flex w-[50px] justify-between items-center ">
                  <div><i className="fa-solid fa-heart"></i></div>
                  <div><i className="fa-solid fa-arrow-right-arrow-left"></i></div>
                </div>
              </div>
            </div>
            <div className=" flex bg-gray-300 h-[40px] items-center mt-2 px-2">
              <div className="flex w-full justify-between">
                <div className="a1"><p><i className="fa-solid fa-dollar-sign"></i> Buy Now</p></div>
                <div className="a2"><p><i className="fa-solid fa-question"></i> Question</p></div>
              </div>
            </div>
          </div>

          {/* Third Product */}
          <div className=" p-4  border-1 border-slate-300 bg-white max-w-[95%] ">
            <div className="w-full h-[250px] overflow-hidden">
              <img src={images} alt="Camera" className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-center w-full  bg-gray-300 h-[40px] mt-2 px-2">
              <div className="a1"><a href="s">Canon</a></div>
              <div className="a2"><p>Model X100</p></div>
            </div>
            <div>
              <p className="mt-[1px] px-2">Digital Camera</p>
              <div className="mt-[1px] px-2"><span>$725.00</span></div>
              <div className="flex  justify-between mt-1 px-2">
                <div className="flex  w-[40%] justify-between">
                  <div className=" flex h-[30px] justify-center items-center">1</div>
                  <div className='h-[30px]'>
                    <div className="arrow1 h-[50%]"><i className="fa-solid fa-caret-up"></i></div>
                    <div className="arrow1"><i className="fa-solid fa-caret-down"></i></div>
                  </div>
                  <button className='h-[30px] text-white px-2 rounded-md' style={{ backgroundColor: "#0d51d6" }}>Add to Cart</button>
                </div>
                <div className="flex w-[50px] justify-between items-center ">
                  <div><i className="fa-solid fa-heart"></i></div>
                  <div><i className="fa-solid fa-arrow-right-arrow-left"></i></div>
                </div>
              </div>
            </div>
            <div className=" flex bg-gray-300 h-[40px] items-center mt-2 px-2">
              <div className="flex w-full justify-between">
                <div className="a1"><p><i className="fa-solid fa-dollar-sign"></i> Buy Now</p></div>
                <div className="a2"><p><i className="fa-solid fa-question"></i> Question</p></div>
              </div>
            </div>
          </div>

          {/* Fourth Product */}
          <div className=" p-4  border-1 border-slate-300 bg-white max-w-[95%]">
            <div className="w-full h-[250px] overflow-hidden">
              <img src={images} alt="Camera" className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-center w-full  bg-gray-300 h-[40px] mt-2 px-2">
              <div className="a1"><a href="s">Canon</a></div>
              <div className="a2"><p>Model X100</p></div>
            </div>
            <div>
              <p className="mt-[1px] px-2">Digital Camera</p>
              <div className="mt-[1px] px-2"><span>$725.00</span></div>
              <div className="flex  justify-between mt-1 px-2">
                <div className="flex  w-[40%] justify-between">
                  <div className=" flex h-[30px] justify-center items-center">1</div>
                  <div className='h-[30px]'>
                    <div className="arrow1 h-[50%]"><i className="fa-solid fa-caret-up"></i></div>
                    <div className="arrow1"><i className="fa-solid fa-caret-down"></i></div>
                  </div>
                  <button className='h-[30px] text-white px-2 rounded-md' style={{ backgroundColor: "#0d51d6" }}>Add to Cart</button>
                </div>
                <div className="flex w-[50px] justify-between items-center ">
                  <div><i className="fa-solid fa-heart"></i></div>
                  <div><i className="fa-solid fa-arrow-right-arrow-left"></i></div>
                </div>
              </div>
            </div>
            <div className=" flex bg-gray-300 h-[40px] items-center mt-2 px-2">
              <div className="flex w-full justify-between">
                <div className="a1"><p><i className="fa-solid fa-dollar-sign"></i> Buy Now</p></div>
                <div className="a2"><p><i className="fa-solid fa-question"></i> Question</p></div>
              </div>
            </div>
          </div>

        </Slider>
      </div>
    </div>
  );
}

export default Products;

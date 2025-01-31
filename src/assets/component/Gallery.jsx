import React from 'react';
import image from '../images/gallery1.jpeg';
import image1 from '../images/gallery2.jpeg';
import image2 from '../images/gallery3.jpeg';
import image3 from '../images/gallery4.jpeg';
import image4 from '../images/gallery5.jpeg';
import image5 from '../images/gallery6.jpeg';
import image6 from '../images/gallery7.jpeg';
import image7 from '../images/gallery8.jpeg';
import image8 from '../images/gallery9.jpeg';

const Gallery = () => {
  return (
    <div className="w-full bg-gray-700 h-full pt-5">
      <div className="max-w-screen-xl mx-auto px-4"> 
        {/* Header Section */}
        <div className="w-full  text-white flex justify-center items-center">
          <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold">Improved Gallery Module</h1>
        </div>

        {/* Orange Line Below Header */}
        <div className="bg-orange-600 w-[80px] h-[3px] mx-auto"></div>

        {/* Description Text */}
        <div className="w-full h-full p-[20px] text-center  ">
          <p className="text-gray-300 text-[15px] sm:text-base md:text-lg px-4 sm:px-16 md:px-32">
            The Gallery module supports images, video and can also act as banners that can point to other pages or open other Popup 
          </p>
          <p className="text-gray-300 text-[15px] text-sm sm:text-base md:text-lg px-4 sm:px-16 md:px-32">
            Create different modules with images, videos, banners or a combination of all. Add your modules on any page in any grid format.
          </p>
        </div>

        {/* Image Gallery Section */}
        <div className="slider-container py-[30px] flex flex-wrap justify-center gap-5  :mt-[50px]">
          <div className="w-[100px] h-[100px] relative">
            <img src={image} alt="image" className="w-full object-center object-cover h-full border-1 border-slate-200" />
          </div>
          <div className="w-[100px] h-[100px] relative">
            <img src={image1} alt="image" className="w-full object-center object-cover h-full border-1 border-slate-200" />
          </div>
          <div className="w-[100px] h-[100px] relative">
            <img src={image2} alt="image" className="w-full object-center object-cover h-full border-1 border-slate-200" />
          </div>
          <div className="w-[100px] h-[100px] relative">
            <img src={image3} alt="image" className="w-full object-center object-cover h-full border-1 border-slate-200" />
          </div>
          <div className="w-[100px] h-[100px] relative">
            <img src={image4} alt="image" className="w-full object-center object-cover h-full border-1 border-slate-200" />
          </div>
          <div className="w-[100px] h-[100px] relative ">
            <img src={image5} alt="image" className="w-full object-center object-cover h-full border-1 border-slate-200" />
          </div>
          <div className="w-[100px] h-[100px] relative">
            <img src={image6} alt="image" className="w-full object-center object-cover h-full border-1 border-slate-200" />
          </div>
          <div className="w-[100px] h-[100px] relative">
            <img src={image7} alt="image" className="w-full object-center object-cover h-full border-1 border-slate-200" />
          </div>
          <div className="w-[100px] h-[100px] relative">
            <img src={image8} alt="image" className="w-full object-center object-cover h-full border-1 border-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

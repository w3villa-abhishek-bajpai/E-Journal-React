import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import G1 from '../images/blog1.jpeg'
import G2 from '../images/blog3.jpeg'
import G3 from '../images/blog2 (1).avif'




function BlogCr() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
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
        breakpoint: 770,
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
    <>
        <div className="w-full bg-gray-100  flex justify-evenly  ">
        <div className="max-w-screen-xl w-full ">

    
          <div className="slider-container w-full  py-10   text-[14px] sm:ml-[15px]">
            <Slider {...settings}>
              <div className='border-2 border-gray-300 relative  max-w-[90%]   md:ml-0'>
                <div className=' w-full '>
                <img src={G1} alt=""  className=' w-full object-fill object-center ' />
                </div>
                
                <div className=' absolute top-[40%] text-center bg-slate-200  p-1 w-full sm:top-[60%] md:top-[20%] lg:top-[30%] xl:top-[40%] 2xl:top-[39%] flex  font-semibold'> 
                    <ul className='flex justify-around w-full'>
                        <li>Admin</li>
                        <li>View</li>
                        <li>Comment</li>
                    </ul>
                </div>
                <div className='my-10 text-center flex flex-col gap-5 p-2'>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </p>  
                <p>Read More</p>
                </div>
              </div>
              <div className='border-2 border-gray-300 relative  max-w-[90%]  ml-5 md:ml-0'>
                <div className='w-full '>
                <img src={G1} alt=""  className=' w-full object-fill object-center ' />
                </div>
                
                <div className=' absolute top-[40%] text-center bg-slate-200  p-1 w-full mb:top-[50%] sm:top-[60%] md:top-[20%] lg:top-[30%] xl:top-[40%] 2xl:top-[39%] flex  font-semibold'> 
                    <ul className='flex justify-around w-full'>
                        <li>Admin</li>
                        <li>View</li>
                        <li>Comment</li>
                    </ul>
                </div>
                <div className='my-10 text-center flex flex-col gap-5 p-2'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>  
                <p>Read More</p>
                </div>
              </div>
              <div className='border-2 border-gray-300 relative max-w-[90%]  ml-5 md:ml-0'>
                <div className='w-full '>
                <img src={G1} alt=""  className='w-full object-fill object-center ' />
                </div>
                
                <div className=' absolute top-[40%] text-center bg-slate-200  p-1 w-full mb:top-[50%] sm:top-[60%] md:top-[20%] lg:top-[30%] xl:top-[40%] 2xl:top-[39%] flex  font-semibold'> 
                    <ul className='flex justify-around w-full'>
                        <li>Admin</li>
                        <li>View</li>
                        <li>Comment</li>
                    </ul>
                </div>
                <div className='my-10 text-center flex flex-col gap-5 p-2'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>   
                <p>Read More</p>
                </div>
              </div>
            <div className='border-2 border-gray-300 relative  max-w-[90%]  ml-5 md:ml-0'>
                <div className='h-[50%] w-full '>
                <img src={G1} alt=""  className='  w-full object-fill object-center ' />
                </div>
                
                <div className=' absolute top-[40%] text-center bg-slate-200  p-1 w-full mb:top-[50%] sm:top-[60%] md:top-[20%] lg:top-[30%] xl:top-[40%] 2xl:top-[39%] flex  font-semibold'> 
                    <ul className='flex justify-around w-full'>
                        <li>Admin</li>
                        <li>View</li>
                        <li>Comment</li>
                    </ul>
                </div>
                <div className='my-10 h-[50%] text-center flex flex-col gap-5 p-2'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>   
                <p>Read More</p>
                </div>
              </div>
              
            </Slider>
          </div>


        </div>

      </div>
      
    </>
  )
}

export default BlogCr
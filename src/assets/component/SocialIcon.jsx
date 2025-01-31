import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaSkype, FaGoogle } from 'react-icons/fa';

const SocialIcon = () => {
  return (
    <div className="w-full bg-gray-300 h-[60px] flex justify-evenly items-center">
      <div className="max-w-screen-xl w-full h-[60px] flex">
     
       
            <div className="flex justify-center gap-7  w-full items-center ">
              <div className="facebook">
                <FaFacebook size={30} />
              </div>
              <div className="insta">
                <FaInstagram size={30} />
              </div>
              <div className="twitter">
                <FaTwitter size={30} />
              </div>
              <div className="youtube">
                <FaYoutube size={30} />
              </div>
              <div className="skype">
                <FaSkype size={30} />
              </div>
              <div className="google">
                <FaGoogle size={30} />
              </div>
            </div>
          </div>
        </div>
    
    
  );
};

export default SocialIcon;

import React from 'react';
import './SocialMedia.css';
import { BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs';

function SocialMedia() {
  return (
    <div className="bg-[#A79FFF] flex flex-col md:flex-row p-10">
      <div className="w-full md:w-[50%] p-4">
        <h1 className="text-black text-4xl md:text-8xl font-bold font-gilroy">
          Who <br />
          Are We ?
        </h1>
        <br />
        <p className="text-black text-lg md:text-2xl">
          We're the Tinder of professional collaboration, revolutionizing how individuals connect for formal endeavors. Our platform simplifies the process, matching professionals based on skills and objectives, fostering meaningful connections for freelancers, teams, and businesses seeking collaboration and growth.
        </p>
        <br />
        <p className="text-black text-lg md:text-2xl">
          At our core, we're a catalyst for innovation, empowering individuals and businesses to thrive in today's interconnected landscape. By merging social networking with professional collaboration, we've created an ecosystem where synergistic partnerships flourish, facilitating connections that propel you towards success.
        </p>
      </div>
      <div className="w-full md:w-[50%] p-4">
        <div className="flex flex-col md:flex-row">
          <p className="text-[#2C1A4D] text-2xl md:text-3xl mb-4 md:mb-0">
            Check Out our <br /> social media Hangle
          </p>
          <div className="flex justify-center">
            <img className="w-32 h-32 md:w-64 md:h-64" src="SocialMediaArrow.svg" alt="Social Media Arrow" />
          </div>
        </div>
        <div className="flex flex-col md:flex-col justify-center">
          <div className="flex TD justify-center ">
            <a href="https://www.linkedin.com/company/synkerr/" target="_blank" rel="noopener noreferrer" className="mr-4 flex flex-col">
              <BsLinkedin size={48} /><span>LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/synkerrofficial?igsh=MXExNzNhaDIxbGF5dA==" rel="noopener noreferrer" target="_blank" className="mr-4 flex flex-col">
              <BsInstagram size={48} /><span>Instagram</span>
            </a>
            <a href="https://twitter.com/Kakashi8654" target="_blank" rel="noopener noreferrer" className='flex flex-col mr-4'>
              <BsTwitter size={48} /><span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
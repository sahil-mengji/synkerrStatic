import React from 'react';
import GlobeA from './GlobeAnimation.jsx';

function Globe() {
  return (
    <div className='relative mb-40'>
      <div className='flex justify-center'><GlobeA/></div>
      <p className="absolute top-20 right-0 md:top-0 text-xs sm:text-sm md:text-2xl text-white bg-contain bg-[rgba(91,86,145,0.3)] p-1 sm:p-2 md:p-3 rounded-lg shadow-md border border-[rgba(255,255,255,0.37)] text-white ml-2 mt-4">
              We help you collaborate with people <br/>around the globe
              in an easy and fun way. <br /> Join us Today!
            </p>
            <p className="absolute md:bottom-0 md:left-0 text-xs sm:text-sm md:text-2xl text-white bg-contain bg-[rgba(91,86,145,0.3)] p-1 sm:p-2 md:p-3 rounded-lg shadow-md border border-[rgba(255,255,255,0.37)] text-white mr-2 mb-4">
              Everything is more fun with friends. <br/>Join today to team up with others.
      </p>
    </div>
    
  );
}

export default Globe;

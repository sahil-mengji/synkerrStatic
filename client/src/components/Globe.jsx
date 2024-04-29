import React from 'react';
import GlobeA from './GlobeAnimation.jsx';

function Globe() {
  return (
    <div className="hidden sm:flex justify-center items-center relative mt-20 sm:mt-40 md:mt-60 mb-20 sm:mb-40 md:mb-60">
      <div className="absolute z-0 flex justify-center items-center m-10 sm:m-20 md:m-40">
        <GlobeA className="absolute"/>
        <p className="z-1 relative top-10 sm:top-20 md:left-0 md:top-30 right-0 text-xs sm:text-sm md:text-2xl text-white flex flex-col bg-contain items-start bg-[rgba(91,86,145,0.3)] p-1 sm:p-2 md:p-3 rounded-lg shadow-md border border-[rgba(255,255,255,0.37)] text-white">Lorem ipsum dot? Fugit, illo?</p>
        <p className="z-1 relative bottom-10 sm:bottom-20 md:bottom-30 left-0 text-xs sm:text-sm md:text-2xl text-white flex flex-col bg-contain items-start bg-[rgba(91,86,145,0.3)] p-1 sm:p-2 md:p-3 rounded-lg shadow-md border border-[rgba(255,255,255,0.37)] text-white">Random Ass Shit</p>
      </div>
    </div>
  );
}

export default Globe;
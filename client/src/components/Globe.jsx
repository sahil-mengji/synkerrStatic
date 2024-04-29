import React from 'react';
import GlobeA from './GlobeAnimation';

function Globe() {
  return (
    <div className="flex justify-center items-center relative mb-80">
      <div className="absolute z-0 flex justify-center items-center m-80">
        <GlobeA className="relative"/>
        <p className="z-1 absolute top-20 right-0 text-white flex flex-col bg-contain items-start text-3xl bg-[rgba(91,86,145,0.3)] p-2 rounded-lg shadow-md border border-[rgba(255,255,255,0.37)] text-white">Random Ass Shit</p>
        <p className="z-1 absolute bottom-20 left-0 text-white flex flex-col bg-contain items-start text-3xl bg-[rgba(91,86,145,0.3)] p-2 rounded-lg shadow-md border border-[rgba(255,255,255,0.37)] text-white">Random Ass Shit</p>
      </div>
    </div>
  );
}

export default Globe;
import React from 'react';
import GlobeA from './GlobeAnimation';

function Globe() {
  return (
    <div className='flex justify-center items-center relative'>
      <div className='absolute z-0 flex justify-center items-center m-96'>
        <GlobeA className='relative' />
      </div>
      <div className='z-1 relative text-white mb-20 -ml-10 flex flex-col items-center text-3xl bg-[rgba(91,86,145,0.3)] w-auto p-2 rounded-lg shadow-md border border-[rgba(255,255,255,0.37)]'>
        <p className='text-white'>Random Ass Shit</p>
      </div>
    </div>
  );
}

export default Globe;
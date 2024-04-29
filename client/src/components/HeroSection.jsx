import { image } from '@nextui-org/react';
import React from 'react';

function HeroSection({bottomRef}) {
  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="App bg-black min-h-screen">
      <body className='Body'>
        <div className='position relative  bg-local' style={{backgroundImage: "url('/purplebackdrop.svg')",backgroundRepeat: 'no-repeat'}}>
          <div className='flex justify-between items-center' >
            <img src="logo.svg" alt="logo" />
            <div className='flex justify-between w-1/4  text-lg rounded-full '>             
             <h3 className='text-gray-400'>Our Aim</h3>
              <h3 className='text-gray-400'>Team</h3>
              <h3 className='text-gray-400'>What we do</h3>
            </div>
            <p className="bg-[#302D50] text-white text-base px-5 py-2 rounded-full">Contact Us</p>
          </div>
          <div className="flex flex-col items-center mt-20 text-white bg-no-repeat" style={{backgroundImage: "url('/center1.svg'), url('/center2.svg')",
            backgroundSize: '30%, contain',backgroundPosition: '10%, 85%'}}>
            <p className='text-[#A9A9A9] text-4xl mb-6'>Exploit the power of</p>
            <p className='text-white mb-6 text-5xl'>Purposful Connections</p>
            <p className='text-black text-3xl font-bold bg-[#A79FFF] py-5 px-8 rounded-[40px] mb-6'>Join the Waitlist -{'>'} </p>
            <div>🎉 <span className="text-yellow-500"> BETA</span> version Dropping Soon</div>
            <div className="flex text-base bg-black border border-[#888888] px-5 py-2 rounded-[27px] cursor-pointer mt-20 text-[#888888]" style={{ color: '#888888'}} onClick={scrollToBottom}>
          Scroll Down <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100" rel="stylesheet" />
          <span className="material-symbols-outlined">arrow_downward</span>

        </div>
        </div>
      </div>
      
        <img src="/image9.png" className="absolute h-[25%] w-[15%]" />
      </body>
    </div>
  );
}

export default HeroSection;
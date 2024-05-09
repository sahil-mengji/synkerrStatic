import { image } from '@nextui-org/react';
import React from 'react';

function HeroSection({ bottomRef, TeamRef }) {
  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const ScrollToTeam = () => {
    TeamRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App bg-black min-h-screen">
      <div className="Body">
        <div className="position relative">
          <div
            className="bg-local py-5 sm:py-4 md:py-6"
            style={{
              backgroundImage: "url('/purplebackdrop.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <img src="logo.svg" alt="logo" className="mb-4 md:mb-0" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:justify-between w-full md:w-1/2 text-sm sm:text-base rounded-full mt-4 md:mt-0">                  <h3 className="text-gray-400 mb-2 sm:mb-0 mr-4 font-bold">Our Aim</h3>
                  <h3 className="text-gray-400 cursor-pointer mb-2 sm:mb-0 mr-4" onClick={ScrollToTeam}>
                    Team
                  </h3>
                  <h3 className="text-gray-400 mb-2 sm:mb-0">What we do</h3>
                </div>
                <p className="bg-[#302D50] text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full mt-4 md:mt-0">
                  Contact Us
                </p>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 md:px-8 mt-10 sm:mt-16 md:mt-20">
            <div
              className="flex flex-col items-center text-white bg-no-repeat"
              style={{
                backgroundImage: "url('/center1.svg'), url('/center2.svg')",
                backgroundSize: '30%, contain',
                backgroundPosition: '10%, 85%',
              }}
            >
              <p className="text-[#A9A9A9] text-xl sm:text-2xl md:text-4xl mb-2 sm:mb-4">Exploit the power of</p>
              <p className="text-white mb-2 sm:mb-4 text-2xl sm:text-3xl md:text-5xl">Purposful Connections</p>
              <p className="text-black text-base sm:text-lg md:text-3xl font-bold bg-[#A79FFF] py-2 sm:py-3 md:py-5 px-4 sm:px-6 md:px-8 rounded-[40px] mb-2 sm:mb-4">
                Join the Waitlist -&gt;
              </p>
              <div className="mb-2 sm:mb-4">
                🎉 <span className="text-yellow-500"> BETA</span> version Dropping Soon
              </div>
              <div
                className="flex text-xs sm:text-sm md:text-base bg-black border border-[#888888] px-2 sm:px-3 md:px-5 py-1 sm:py-2 rounded-[27px] cursor-pointer mt-6 sm:mt-10 md:mt-20 text-[#888888]"
                style={{ color: '#888888' }}
                onClick={scrollToBottom}
              >
                Scroll Down{' '}
                <link
                  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100"
                  rel="stylesheet"
                />
                <span className="material-symbols-outlined">arrow_downward</span>
              </div>
            </div>
          </div>
        </div>
        <img src="/image9.png" className="hidden sm:flex absolute bottom-0 left-0 h-[20%] w-[10%] sm:h-[25%] sm:w-[15%] md:h-[30%] md:w-[20%]" alt="Background Image" />
      </div>
    </div>
  );
}

export default HeroSection;
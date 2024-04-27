import React, { useRef } from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="App bg-black min-h-screen">
      <header className="App-header"></header>
      <body className='Body'>
        <div className='HeroSection'>
          <div className='NavBar'>
            <img src="logo.svg" alt="logo" />
            <div className='three-on-top'>
              <h3>Our Aim</h3>
              <h3>Team</h3>
              <h3 className='lastOne'>What we do</h3>
            </div>
            <p className="ContactButton">Contact Us</p>
          </div>
          <div className='HeroText'>
            <p className='HeroText1'>Exploit the power of</p>
            <p className='HeroText2'>Purposful Connections</p>
            <p className='HeroText3'>Join the Waitlist -{'>'} </p>
            <div>🎉 <span className="text-yellow-500"> BETA</span> version Dropping Soon</div>
            <div className='ScrollDownButton'></div>
            <p className='ScrollDownText'>
              Scroll Down <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100" rel="stylesheet" />
              <span className="material-symbols-outlined">arrow_downward</span>
            </p>
          </div>
        </div>
        <div className='ConnectTeamUpCollaborate'>
          <img src="/image9.png" />
        </div>
      </body>
    </div>
  );
}

export default HeroSection;
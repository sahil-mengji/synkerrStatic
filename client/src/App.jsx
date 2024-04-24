import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App bg-black min-h-screen">
      <header className="App-header">
        <div className='LogoAndText'>
          <img src="/image1.png" alt="logo" />
          <h1>Synkerr.</h1>
        </div>
        <div className='three-on-top'>
        <h3>Our Aim</h3>
        <h3>Team</h3>
        <h3 className='lastOne'>What we do</h3>
        </div>
        <p className="contact-button">Contact Us</p>
      </header>

      <body className='Body'>
        <div className='HeroText'>
          <p className='HeroText1'>Exploit the power of</p>
          <p className='HeroText2'>Purposful Connections</p>
          <p className='HeroText3'>Join the Waitlist -{'>'} </p>
          <img src="/image7.png" className='beta' alt="image7" />
        </div>
      </body>
    </div>

  );
}

export default App;
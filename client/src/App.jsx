import React, { useRef } from 'react';
import HeroSection from './components/HeroSection';
import Globe from './components/Globe';
import Carousel from './components/Carousel';

const App = () => {
  const bottomRef = useRef(null);
  const TeamRef = useRef(null);

  return (
    <div className="App">
      <HeroSection bottomRef={bottomRef} TeamRef={TeamRef} />
      <div className="Globe" ref={bottomRef}> <Globe/>  </div>
      <div className="Carousel" ref={TeamRef}>  <Carousel/>  </div>
    </div>
  );
};

export default App;
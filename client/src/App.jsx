
import React from 'react'
import HeroSection from './components/HeroSection'
import Globe from './components/Globe'
import Carousel from './components/Carousel'
import { useRef } from 'react'
const App = () => {
  const bottomRef = useRef(null);
  const bottomRef = useRef(null);
  return (
    <div className='App'>
      <HeroSection bottomRef={bottomRef}/>
      <div className='Globe' ref={bottomRef}><Globe/></div>
      <Carousel/>
      <div className='Bottom' ref={bottomRef}></div>
    </div>
  )
}
export default App


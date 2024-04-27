
import React,{useRef} from 'react'
import HeroSection from './components/HeroSection'
import Globe from './components/Globe'
import Carousel from './components/Carousel'
const App = () => {
  const bottomRef = useRef(null);
  return (
    <div className='App'>
      <HeroSection bottomRef={bottomRef}/>
      <Globe/>
      <Carousel/>
      <div className='Bottom' ref={bottomRef}></div>
    </div>
  )
}
export default App


import React, { useRef, useState, useEffect } from 'react';
import './Carousel.css';
import { Tabs, Tab } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";

const Carousel = () => {
  const [selectedTab, setSelectedTab] = useState('All');
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true); // State to toggle auto slide
  const getTabClassName = (tabName) => {
    return selectedTab === tabName ? 'selected-tab' : '';
  };
  let teamData = {
    'All' : [
      {
        name:'Abhay Tai',
        role: 'Founder',
        image:'https://img.freepik.com/free-photo/close-up-portrait-smiling-young-bearded-man_171337-4819.jpg?w=1060&t=st=1713959851~exp=1713960451~hmac=34940b0d57af03134523c3886b183e38c73ce7678f31fe88965bd80f1d10ff46'
      },
      {
        name:'Sahil Mengji',
        role:'Co-Founder',
        image:'https://img.freepik.com/free-photo/portrait-friendly-looking-happy-attractive-male-model-with-moustache-beard-wearing-trendy-transparent-glasses-smiling-broadly-while-listening-interesting-story-waiting-mom-give-meal_176420-22400.jpg?size=626&ext=jpg&ga=GA1.1.546243260.1706593150&semt=ais'
      },
      {
        name:'Sahil Kumar',
        role:'Co-Founder',
        image:'https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328221.jpg?size=626&ext=jpg&ga=GA1.1.546243260.1706593150&semt=ais'
      },
      {
        name:'John Doe',
        role:'Web Developer',
        image:'https://img.freepik.com/premium-photo/portrait-friendly-man-north-african-descent_774935-2943.jpg?size=626&ext=jpg&ga=GA1.1.546243260.1706593150&semt=ais'
      }
    ],
    'Founders' : [
      {
        name:'Abhay Tai',
        role:'Founder',
        image:'https://img.freepik.com/premium-photo/portrait-friendly-man-north-african-descent_774935-2943.jpg?size=626&ext=jpg&ga=GA1.1.546243260.1706593150&semt=ais'
      },
      {
        name:'Sahil Mengji',
        role:'Co-Founder',
        image:'https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328221.jpg?size=626&ext=jpg&ga=GA1.1.546243260.1706593150&semt=ais'
      },
      {
        name:'Sahil Kumar',
        role:'Co-Founder',
        image:'https://img.freepik.com/free-photo/close-up-portrait-smiling-young-bearded-man_171337-4819.jpg?w=1060&t=st=1713959851~exp=1713960451~hmac=34940b0d57af03134523c3886b183e38c73ce7678f31fe88965bd80f1d10ff46'
      }
    ],
    'webTeam' : [
    
        {
          name:'John Doe',
          role:'Frontend Developer',
          image:'https://img.freepik.com/premium-photo/portrait-friendly-man-north-african-descent_774935-2943.jpg?size=626&ext=jpg&ga=GA1.1.546243260.1706593150&semt=ais'
        },
        {
          name:'Silber',
          role:'Backend Developer',
          image:'https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328221.jpg?size=626&ext=jpg&ga=GA1.1.546243260.1706593150&semt=ais'
        },
        {
          name:'Cameron',
          role:'Backend Developer',
          image:'https://img.freepik.com/free-photo/close-up-portrait-smiling-young-bearded-man_171337-4819.jpg?w=1060&t=st=1713959851~exp=1713960451~hmac=34940b0d57af03134523c3886b183e38c73ce7678f31fe88965bd80f1d10ff46'
        }
      
    ],
    'designTeam' : [],
    'marketingTeam': []
  }
  
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    const scrollAmount = 300; // Adjust as needed
    if (carouselRef.current) {
      const container = carouselRef.current;
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  // Function to start automatic sliding
  const startAutoSlide = () => {
    // Enable auto slide
    setAutoSlideEnabled(true);
  };



  // Effect to handle automatic sliding
  useEffect(() => {
    let intervalId;
    if (autoSlideEnabled) {
      intervalId = setInterval(() => {
        // Scroll right automatically
        scrollCarousel('right');
      }, 1500); // Adjust interval time as needed
    }
    // Clear interval when component unmounts or auto slide is disabled
    return () => clearInterval(intervalId);
  }, [autoSlideEnabled]); // Re-run effect when auto slide state changes

  return (
    <div className='h-screen w-full bg-black text-5xl flex flex-col justify-center items-center'>
      <div className='h-[20%] w-full bg-black flex justify-center items-center'>
        <h1 className='' id='Team'>
          OUR TEAM
        </h1>
      </div>
      <div className='h-[10%] w-full bg-black flex justify-center items-center'>
         <div className="w-1/3 bg-black flex justify-between items-center text-lg text-white">
         <div className={`cursor-pointer  transition duration-300 ease-in-out ${getTabClassName('All')}`} onClick={() => setSelectedTab('All')}>
           <span>All</span>
         </div>
               
         <div className={`cursor-pointer  transition duration-300 ease-in-out ${getTabClassName('Founders')}`} onClick={() => setSelectedTab('Founders')}>
           <span>Founders</span>
         </div>
               
         <div className={`cursor-pointer  transition duration-300 ease-in-out ${getTabClassName('webTeam')}`} onClick={() => setSelectedTab('webTeam')}>
           <span>Web-Team</span>
         </div>
               
         <div className={`cursor-pointer  transition duration-300 ease-in-out ${getTabClassName('designTeam')}`} onClick={() => setSelectedTab('designTeam')}>
           <span>Design-Team</span>
        </div>
        <div className={`cursor-pointer  transition duration-300 ease-in-out ${getTabClassName('marketingTeam')}`} onClick={() => setSelectedTab('marketingTeam')}>
           <span>Marketing-Team</span>
        </div>
        </div>
      </div>
      <div className='h-[75%] w-full bg-black flex justify-center items-center gap-10 p-10 relative'>
        <button className="carousel-btn right border-2 rounded-full p-3 border-[#A79FFF]" onClick={() => { scrollCarousel('left'); stopAutoSlide(); }}>
          {<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      width="24"
      height="24"
    >
      <path
        style={{ fill: '#A79FFF' }}
        d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
        data-name="Left"
      />
    </svg>}
        </button>
        <div className={`carousel carousel-center h-full w-3/5 flex ${teamData['All'].length === 1 ? 'justify-center' : ''} items-center p-4 space-x-4 bg-black rounded-box`} ref={carouselRef}>
        { 
        teamData[selectedTab].map((elem, index) => (
        <div className="carousel-item h-2/3 w-[32%]" key={index}>
          <div className='h-full w-full bg-[#110725] rounded-xl border-1 border-[#A79FFF]'>
            <div className='h-2/3 w-full p-2 flex justify-center items-center'>
              <img className='h-32 w-32 rounded-full border-2 object-cover border-[#A79FFF]' src={elem.image} />
            </div>
            <div className='h-1/3 w-full text-white'>
              <div className='h-1/2 w-full text-lg flex justify-center items-center '>
                {elem.name}
              </div>
              <div className='h-1/2 w-full flex justify-center items-center text-3xl'>
                {elem.role}
              </div>
            </div>
          </div>
        </div>
      ))
    }
        </div>
        <button className="carousel-btn right border-2 rounded-full p-3 border-[#A79FFF]" onClick={() => { scrollCarousel('right'); stopAutoSlide(); }}>
        {<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      width="24"
      height="24"
    >
      <path
        style={{ fill: '#A79FFF' }}
        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
        data-name="Right"
      />
    </svg>}
        </button>
      </div>
    </div>
  );
};

export default Carousel;


import './Hero.css';
import { ImageData } from '../imageSlider';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % ImageData.length);
    }, 5000);
    return () => {
      clearInterval(slideInterval);
    }
  }, [])
    return (
        <div className='slider'>

          <img src={ImageData[currentSlide].image} alt={ImageData[currentSlide].title} className='Heroimage' />
          <div className="heroContents">
            <h1 className='herotext'>{ImageData[currentSlide].title}</h1>
            <p className='subtext'>{ImageData[currentSlide].subTitle}</p>
            <Link className='aboutUs' to='/about'>
              About Us
            </Link>
          </div>

              </div>
    );
}

/**
 * run
goose
danger
attitude
act
peanut
about
tool
hip
comfort
lend
series
ability
lawn
trumpet
humble
sail
steak
change
local
question
second
aware
rural
 */
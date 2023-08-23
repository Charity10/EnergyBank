import './Hero.css';
import { ImageData } from '../imageSlider';
import { useEffect, useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
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
            <p className='aboutUs'>About Us</p>
          </div>

              </div>
    );
}
import { AiOutlineArrowRight } from "react-icons/ai"; 
import { AiOutlineArrowLeft } from "react-icons/ai"; 
import './Hero.css';
import { ImageData } from '../imageSlider';
import {useEffect, useState } from 'react';


export const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  useEffect(() => {
    const slideinterval = setInterval(() => {
      setCurrent((prevSlide) => (prevSlide + 1) % slides.length)
    }, 20000);
    return () => {
      clearInterval(slideinterval)
    }
  }, [])

  const moveDot = index => {
    setCurrent(index)
  }

  if(!Array.isArray(slides) || length === 0){
    return null
  }

  return (
    <section className="slider">
      <AiOutlineArrowLeft className="left-arrow" onClick={prevSlide} />
      <AiOutlineArrowRight className="right-arrow" onClick={nextSlide}/>

      {ImageData.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key ={index} >
            {index === current && (
              <div>
            <img  className= "hero-img" src={slide.images} alt="Energy-Image" />
            <h1 className="herotext">{slide.title}</h1>
            <p className="subtext">{slide.subTitle}</p>
            </div>
          
      )}
          </div>
        );
      })}

      <div className="container-dots">
        {Array.from({length: 5}).map((item, index) => (
        <div  key= {index} onClick={() => moveDot(index + 1)} className={current === index + 1 ? 'dot active' : "dot"}>
          </div>
        ))}
        </div>
    </section>
  );
};

export default Hero;
import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Hero } from '../../components/Hero/Hero';
import News from '../../components/News/News';
import Contact from '../../components/contact/contact';
import { ImageData } from '../../components/imageSlider';


function Home() {
  
  return (
    <>
      <Navbar />
      <Hero slides={ImageData} />
      <News />
      {/* <Contact /> */}
    </>
  )
}

export default Home
import { Hero } from '../../components/Hero/Hero';
import NewsFeed from '../../components/News/News';
import { Contact } from '../../components/contact/Contact';

import { ImageData } from '../../components/imageSlider';


function Home() {
  
  return (
    <>
      <Hero slides={ImageData} />
      <NewsFeed />
      <Contact />
    </>
  )
}

export default Home
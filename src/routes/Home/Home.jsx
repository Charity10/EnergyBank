import { Hero } from '../../components/Hero/Hero';
import NewsFeed from '../../components/News/News';
// import Contact from '../../components/contact/contact';
import { ImageData } from '../../components/imageSlider';
import { Fragment } from 'react';


function Home() {
  
  return (
    <Fragment>
      <Hero slides={ImageData} />
      <NewsFeed />
    </Fragment>
  )
}

export default Home
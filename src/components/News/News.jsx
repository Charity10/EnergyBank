import { useState, useEffect } from 'react';
import './News.css';
import axios from 'axios';

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = '49ca8351639e40a6a71e468e8db841bf';
    const apiUrl = `https://newsapi.org/v2/everything?q=energy&apiKey=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
       setNews(response.data.articles.slice(1,9));
       console.log(response.data.articles.slice(1,9));
      })
      
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);


  return (
    <>
      <h1 className='newsHeader'>Today in Energy</h1>
      <div className="news-Container">
      <ul className='newsList'>
        {news.map((article, index) => (
          <li className='listItems' key={index}>
            <img className='news-img' src={article.img} />
            <h2 className='news-title'>{article.title}</h2>
            <p className='news-description'>{article.description.slice(0,150)}...</p>
            <a className='news-url' href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
      </div>
      </>
    
    
  );
};

export default NewsFeed;

import './News.css'
import axios from 'axios';

import {useEffect, useState } from 'react';


const endpoint = 'https://jsonplaceholder.typicode.com/users'

const News = () => {
    const [News, setNews] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await fetch(endpoint)
               .then(res => res.json())

               setNews(data)
        })()
    }, [])
    console.log(News.name)

    // useEffect(() => {
    //     fetch()
    //     .then((response) => response.json())
    //     .then((users) => setNews(users));
    // }, []);

        return(
             <div className='new-section'>
                <div className='news-1'>
                    <h3>What's New</h3>
                </div>
                 <div className='news-2'>
                    <h3>Today in Energy</h3>
                 </div>
                 <div className='news-3'>
                    <h3>Coming Up</h3>
                 </div>
             </div>

        )
    }



export default News;
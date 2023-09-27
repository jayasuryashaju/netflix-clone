import React from 'react'
import "./Banner.css"
import { useEffect } from 'react'
import axios from '../../Axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import { useState } from 'react'

function Banner() {
    const [banner, setBanner] = useState( )
    function getRandomNumber(min, max){
        return Math.floor(Math.random() * (max-min))+ min;
    }
    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        setBanner(response.data.results[getRandomNumber(0,20)])
        
      })
    }, [])
    return (
        <div style={{backgroundImage: `url(${banner ? imageUrl+banner.backdrop_path : ''})`}} className='banner'>
            <div className="content">
                <h1 className='banner-title'>{banner ? banner.title : ""}</h1>
                <div className="banner-buttons">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <p className='banner-description'>{banner ? banner.overview : ""}</p>
            </div>
            <div className="banner-fade">
                 
            </div>
        </div>
    )
}

export default Banner
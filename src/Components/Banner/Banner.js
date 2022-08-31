import React, { useEffect, useState } from 'react'
import {API_KEY, imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
  let displayBanner = Math.floor(Math.random()*20)
  console.log(displayBanner,'       displaynum');
    const [movie, setMovie] = useState()
    useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
        console.log(response.data.results[0]);
        
          // const element = array[i];
          // {setInterval((i) => {
          //   for (let i = 0; i < response.data.results.length; i++) {
          //   setMovie(response.data.results[i])
          // }
          // }, 1000);}
          
        setMovie(response.data.results[displayBanner])
    })

    }, [])
    
  return (
    <div style={{backgroundImage : `url(${movie ? imageUrl + movie.backdrop_path : ''})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.name : ''}</h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My list</button>
            </div>
            <h1 className="description">{movie ? movie.overview : ''}</h1>
        </div>
        <div className="fade">

        </div>
    </div>
  )
}

export default Banner
import React, { useEffect, useState } from 'react'
import Tmovie from './Tmovie'
import Ttv from './Ttv'
import axios from 'axios'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Home() {
  const [thumb, setThumb] = useState([]);

  useEffect(()=>{
    axios
    .get('https://api.themoviedb.org/3/movie/popular?api_key=f89a6c1f22aca3858a4ae7aef10de967')
    .then(result=>{
      setThumb(result.data.results)
    })
  },[])

 
  return (
    <>    
        <Swiper className="mySwiper">
          {
            thumb.map((v)=>(
              <SwiperSlide>
              <div className='Hmovie_con' key={v.id} 
                   style={{'background': `url('https://image.tmdb.org/t/p/original/${v.backdrop_path}')`}}>
                <article className='Hmovie_article'>
                  <div className='flex'>
                    <div className='column'>
                      <div className='Hmovie-title'>{v.title}</div>
                      <div className='Hmovie-overview'>{v.overview}</div>
                      <div className='flex'>
                        <button className='now-bt'>Watch now</button>
                        <button className='trailer-bt'>Watch trailer</button>
                      </div>
                    </div>
                    <img className="poster" src={`https://image.tmdb.org/t/p/w200${v.poster_path}`}/>
                  </div>
                </article>
              </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <Tmovie/>
        <Ttv />
    </>
  )
}

export default Home
import React, { useEffect, useState  } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';

export default function Ttv() {
    const [movieDataP, setMovieDataP] = useState([]);
    const [movieDataT, setMovieDataT] = useState([]);
    const dbData = axios.create({
        baseURL: 'https://api.themoviedb.org/3',
        params: {api_key:'f89a6c1f22aca3858a4ae7aef10de967'}
    })
    //트랜딩 무비
    useEffect(function(){
        dbData
        .get('/tv/popular')
        .then(res=>{
            const moviePop = res.data;
            setMovieDataP(moviePop.results);
        })
    },[])
    //탑 무비
    useEffect(function(){
        dbData
        .get('/tv/top_rated')
        .then(res=>{
            const movieTop = res.data;
            setMovieDataT(movieTop.results);
        })
    },[])

    return (
        <>
        <article>
            <section className='movie'>
                <h2>Trending TV</h2>
                <Swiper slidesPerView={7} spaceBetween={30} freeMode={true} className="mySwiper">
                <ul className='movieList'>
                    {
                        movieDataP.map((e)=>(
                            <SwiperSlide>
                            <li key={e.id}>
                                <img className='radius' src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                                <div className='movie-title'>{e.name}</div>
                            </li>
                            </SwiperSlide>
                        ))
                    }
                </ul>
                </Swiper>
            </section>

            <section className='movie'>
                <h2>Top Rated TV</h2>
                <Swiper slidesPerView={7} spaceBetween={30} freeMode={true} className="mySwiper">
                <ul className='movieList'>
                    {
                        movieDataT.map((e)=>(
                            <SwiperSlide>
                            <li key={e.id}>
                                <img className='radius' src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                                <div className='movie-title'>{e.name}</div>
                            </li>
                            </SwiperSlide>
                        ))
                    }
                </ul>
                </Swiper>
            </section>
        </article>
        </>
    )
}
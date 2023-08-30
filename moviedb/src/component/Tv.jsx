import React, { useEffect, useState  } from 'react'
import axios from 'axios'

export default function Movie() {
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

    return (
        <>
        <article>
            <section className='movie'>
                <h2 className='center'>TV series</h2>
                <form className='search-bt'>
                    <input type="text" placeholder='Enter keyword' />
                    <button>search</button>
                </form>
                <ul className='movieList_gap'>
                    {
                        movieDataP.map((e)=>(
                            <li className='movie_con' key={e.id}>
                                <img className='radius' src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                                <div className='movie-title'>{e.name}</div>
                            </li>
                        ))
                    }
                </ul>
            </section>

        </article>
        </>
    )
}
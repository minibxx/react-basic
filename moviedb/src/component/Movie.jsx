import React, { useEffect, useState  } from 'react'
import axios from 'axios'

export default function Movie() {
    const [movieDataP, setMovieDataP] = useState([]);
    const [movieDataT, setMovieDataT] = useState([]);
    const [search, setSearch] = useState("");

    const dbData = axios.create({
        baseURL: 'https://api.themoviedb.org/3',
        params: {api_key:'f89a6c1f22aca3858a4ae7aef10de967'}
    })
    //트랜딩 무비
    useEffect(function(){
        dbData
        .get('/movie/popular')
        .then(res=>{
            const moviePop = res.data;
            setMovieDataP(moviePop.results);
        })
    },[])

    const filterMovie = (movies) => {
        if(search === ""){
            return movies;
        }
        return movies.filter((movie)=>
        movie.title.toLowerCase().includes(search.toLowerCase())
        );

    }
    return (
        <>
        <article>
            <section className='movie'>
                <h2 className='center'>Movie</h2>
                <form className='search-bt'>
                    <input type="text" placeholder='Enter keyword'
                    value={search} 
                    onChange={(e)=>setSearch(e.target.value)} 
                    />
                    <button onClick={()=>setSearch("")}>search</button>
                </form>
                <ul className='movieList_gap'>
                    {
                        filterMovie(movieDataP).map((e)=>(
                            <li className='movie_con' key={e.id}>
                                <img className='radius' src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                                <div className='movie-title'>{e.title}</div>
                            </li>
                        ))
                    }
                </ul>
            </section>

        </article>
        </>
    )
}
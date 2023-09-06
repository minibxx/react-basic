import React, { useEffect, useState  } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Movie2() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const getMovies = () => {
        axios //axios로 api 찌르고
        .get('https://api.themoviedb.org/3/movie/popular?api_key=f89a6c1f22aca3858a4ae7aef10de967')
        .then(res=>{ //api가 뱉은 response를 movies state 안에 넣어줘라
            const moviePop = res.data;
            setMovies(moviePop.results);
        })
    }
    //트랜딩 무비
    useEffect(function(){ //처음 마운팅이 일어났을 때 아래 코드를 실행한다
        getMovies();
    },[])

    const onButtonClick = () => {
        if (search === "") {
            getMovies();
        } else {
            axios
            .get(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=f89a6c1f22aca3858a4ae7aef10de967`)
            .then(res=>{ //api가 뱉은 response를 movies state 안에 넣어줘라
                const moviePop = res.data;
                setMovies(moviePop.results);
            })
        }
    }

    return (
        <>
        <article>
            <section className='movie'>
                <h2 className='center'>Movie</h2>
                <div className='search-bt'>
                    <input type="text" placeholder='Enter keyword'
                    value={search} 
                    onChange={(e)=>setSearch(e.target.value)} 
                    />
                    <button onClick={onButtonClick}>search</button>
                </div>
                <ul className='movieList_gap'>
                    {
                        movies.map((e)=>(
                            <li className='movie_con' key={e.id}>
                                <img className='radius' src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                                <Link className='movie-title' to ={`/movie/${e.id}`}>{e.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </section>

        </article>
        </>
    )
}
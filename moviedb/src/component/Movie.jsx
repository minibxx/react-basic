import React, { useEffect, useState  } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Movie() {
    const [movies, setMovies] = useState([]);
    const [filterM, setFilterM] = useState([]);
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
            setMovies(moviePop.results); // 서버에서 내려온 거 그대로 가지고 있는 애 (검색해도 안바뀜)
            setFilterM(moviePop.results); // 화면에 보여주려고 있는 애 (검색하면 바뀜)
        })
    },[])

    const filterMovie = (m) => {
        if(search === ""){
            return m;
        }
        return m.filter((movie)=>
            movie.title.toLowerCase().includes(search.toLowerCase())
        );
    }

    const onButtonClick = () => {
        const aaa = filterMovie(movies);
        setFilterM(aaa);
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
                        //filterMovie(movies).map ... 이렇게 쓰면 입력만 해도 필터가 됨.
                        filterM.map((e)=>(
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
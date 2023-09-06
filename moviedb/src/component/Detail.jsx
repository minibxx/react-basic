import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Cast from './Cast';

function Detail() {
    const [detail, setDetail] = useState({});
    const {id, type} = useParams();
   
    useEffect(()=>{
        console.log('id :', id);
        console.log('type :', type);
        axios
        .get(`https://api.themoviedb.org/3/${type}/${id}?api_key=f89a6c1f22aca3858a4ae7aef10de967`)
        .then(result=>{
            setDetail(result.data)
            console.log(detail);
        })
    },[]);

    if(!detail) return <></>;

    return (
        <>
            <article >
                <div className='flex article-D'>
                    <img className='posterD' src={`https://image.tmdb.org/t/p/w300${detail.poster_path}`}/>
                    <div className='column margin-L'>
                        <div className='Hmovie-title'>{detail.original_title}</div>
                        <div className='genres'>
                            {
                                detail.genres.map((v)=>(
                                    <span className='genre'>{v.name}</span>
                                ))
                            }
                        </div>
                        <div className='Hmovie-overview Dmovie-overview'>{detail.overview}</div>
                        <div className='Hmovie-cast'>Casts</div>
                        <Cast type={type} id={id} />
                        
                    </div>
                </div>
            </article>
        </>
    )
}

export default Detail   
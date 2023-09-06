import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Cast({type, id}) {
    const [profile, setProfile] = useState(0);

    useEffect(()=>{
        axios
        .get(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=f89a6c1f22aca3858a4ae7aef10de967`)
        .then((result)=>{
            setProfile(result.data.cast);
        })
    },[])
    console.log(profile)
    if(profile == 0) return <></>

    return (
        <>
            <div>
                <div className='flex  wrap'>
                    {
                        profile.map((v)=>(
                                <div className='cast' key={v.id}>
                                    <img className='cast-profile' src={`https://image.tmdb.org/t/p/w300${v.profile_path}`}/>
                                    <div className='cast-name'>{v.name}</div>
                                </div>
                        ))
                    }
                    </div>
            </div>
        </>
    )
    }

export default Cast
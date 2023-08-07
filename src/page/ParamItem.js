import React from 'react'
import {useParams} from 'react-router-dom'

function ParamItem({data}) {

  const {code} = useParams();  
  let detail = data.filter(obj => obj.id === code);

  return (
    <>
    <div class="detail-content">
      <div>{detail[0].name}</div>
      <div><img src={`../${detail[0].thumb}`}></img></div>
      <div>{detail[0].slogan}</div>
    </div>
    </>
    
  )
}

export default ParamItem
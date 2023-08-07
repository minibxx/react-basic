import React from 'react'
import { Link } from 'react-router-dom'

function Item({item}) {

    let preview = ()=>{
        console.log('sdfsdfsdf')
    }

  return (
    <figure onClick={preview}>
        <p><img src= {item.thumb} /></p>
        <figcaption>
            <b> {item.name} </b>
            <p> {item.price} </p>
            <Link to={`/paramItem/${item.id}`}> 자세히보기 </Link>
        </figcaption>
    </figure>
  )
}

export default Item
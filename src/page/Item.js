import React from 'react'
import { Link } from 'react-router-dom'

function Item({item}) {

  let preview = () => {
    console.log('sdfsdfsdf')
  }


  return (
    <figure onClick={preview}>
        <p><img src= {item.thumb} /></p>
        <figcaption>
            <p>{item.name}</p>
            <Link to ={`/paramItem/${item.id}`}>우리 {item.name}는요</Link>
          
        </figcaption>
    </figure>
  )
}

export default Item
import React from 'react'
import { Link } from 'react-router-dom'

function Familyitem({item}) {

    let preview = ()=>{
        console.log('sdfsdfsdf')
    }

  return (
    <figure onClick={preview}>
        <figcaption>
            <p>{item.name}</p>
            <p><img class="item-thumb" src= {item.thumb} /></p>
            <p class="item-intro">{item.intro}</p>
            
        </figcaption>
    </figure>
  )
}

export default Familyitem;
import React from 'react'

function Item_b({item}) {

    let preview = ()=>{
        console.log('sdfsdfsdf')
    }

  return (
    <figure onClick={preview}>
        <p><img src= {item.thumb} /></p>
        <figcaption>
            <b> {item.name} </b>
            <p> {item.price} </p>
        </figcaption>
    </figure>
  )
}

export default Item_b
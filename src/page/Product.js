import React from 'react'
import Item from './Item'



function Product({data}) {

    

  return (
    <>
      <div class="product-col">
          <h2>Product</h2>
          <div class="product-a">
              {
                  // data.map(function(){
                  //     return 0;
                  // })

                  data.map((item,k)=>(
                      <Item key={item.id} item={item}/>
                  ))
              }
              
          </div>
      </div>
       
    </>
  )
}

export default Product
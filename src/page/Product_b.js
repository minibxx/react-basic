import React from 'react';
import Item_b from './Item_b';

function Product_b({data}) {

  return (
    <>
      <div class="product-col">
        <h2>Product</h2>
        <div class="product-a">
            {
                data.map((item,k)=>(
                    <Item_b key={item.id} item={item}/>
                ))
            }
            
        </div>
    </div>
    </>
  )
}

export default Product_b
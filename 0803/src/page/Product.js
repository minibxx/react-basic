import React from 'react';
import ll from './2.png';
import lll from './3.png';

function Product() {
  return (
    <>
    <div class="product">
        <h2>React State & Props</h2>

    <div class="row">
        <div class="content">
            <p><img src={ll}></img></p>
            <div>BRIXITY</div>
        </div>
        <div class="content">
            <p><img src={lll}></img></p>
            <div>BRAVERUN</div>
        </div>
    </div>

    </div>
    </>
  )
}

export default Product
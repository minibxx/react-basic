import React, { useEffect } from 'react';
import lll from '../page/brave-cookie.gif';

function Home() {
  
  useEffect(() => {
    console.log('Home mount');
    return (() => {
      console.log('Home unmount');
    })
  }, []);

  return (
    <>
    <div>
        <h1 style={{fontStyle:"italic"}}>Be BRAVE, Stay CRISPY</h1>
        <img src={lll}></img>
    </div>
    </>
  )
}

export default Home
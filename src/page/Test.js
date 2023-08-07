import React, { useState } from 'react';

function Test({testProp}) {
  const [jolim, setJolim] = useState('');
  // [변수, 변수 값을 바꿔주는 함수(setter)] = useState(초기 값);
  let aa = '하하';
  const [haha, setHaha] = useState('하하');
  
  const onClick = () => {
    setJolim('안졸림');
    setHaha('하하하');
  };

  return (
    <div>
      <div onClick={onClick}>
        testProp: {testProp.thumb}
      </div>
      <div>
        state: {jolim}
      </div>
      <div>
        그냥 변수: {aa}
      </div>
      <div>
        state2: {haha}
      </div>
    </div>
  )
}

export default Test
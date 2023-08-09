import React, { useRef, useState } from 'react';

function Test({testProp}) {
  const [jolim, setJolim] = useState('');
  // [변수, 변수 값을 바꿔주는 함수(setter)] = useState(초기 값);
  let aa = '하하';
  const [haha, setHaha] = useState('하하');
  const divRef = useRef(null);
  
  const onClickasdfasdf = () => {
    setJolim('안졸림');
    setHaha('하하하');
  };

  const onClick1 = () => {
    console.log('onClick 1');
  }

  const onClick2 = () => {
    console.log('onClick 2');
    console.log(divRef.current.top);
  }

  const onClick3 = () => {
    console.log('onClick 3')
  }

  return (
    <div>
      <span></span>
      <div onClick={onClickasdfasdf}>
        {testProp.map(test => 
          <div>
            testProp: {test.thumb}
          </div>
        )}
      </div>
      <div onClick={onClick1}>
        state: {jolim}
      </div>
      <div ref={divRef} onClick={onClick2}>
        <div>
        그냥 변수: {aa}
        </div>
      </div>
      <div onClick={onClick3}>
        state2: {haha}
      </div>
    </div>
  )
}

export default Test
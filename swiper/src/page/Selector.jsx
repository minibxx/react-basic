import React, {useEffect, useRef, useState} from 'react'

function Selector() {
  const element = useRef(null);
  const elementAll = useRef([]);
  let data = ['민유빈','유빈민','빈민유'];
  const [state,setState] = useState(false);


  let pop =() => {
    /* popup 클래스를 add, popup은 태그처럼 보이지만 그냥 클래스네임임..*/
    element.current.classList.toggle('active');
  }

  function selectorAll(){
    elementAll.current.forEach(ele => {
      ele.style = "color: blue";
    });
  }

  let like = () => {
    /* state의 초기값은 false, !state 하면 true */
    setState(!state); /* 돔에 리렌더링 발생시킴 */
  }

  useEffect(()=> {
    selectorAll();
  },[]) /* useEffect 실행되면 selectorAll 함수 실행 */

  return (
    <>
      <article>
        <h2>Selector</h2>
        <button onClick={pop}>OPEN</button>
        <div className="popup" ref={element}>팝업창..</div>
      </article>

      <article>
        <ul>비틀비틀
          {
            data.map((item,k)=>(
              <li key={k} ref={(el) => {elementAll.current[k]=el}}>{item}</li>
            ))
          }
        </ul>
      </article>

      <article>
        <h2>state 값을 변경하여 element 제어</h2>
        <button onClick={like}>좋아용</button>
        <div className={state? 'active':''}> 
        {/* 삼항연산자) state 값이 참이면 active, 거짓이면 '' 들어갑니다 */}
          활성화 & 비활성화
        </div>
      </article>
    </>
  )
}

export default Selector
import React from 'react';
import {useState} from 'react';

function Props({data,name}) {
    console.log(data,name)

    /* count:0, setCount:function */
    let [count, setCount] = useState(0);

    function plus(){
        console.log(  ++count );
        document.querySelector('button').innerHTML = count;

        //setCount( );
    }

  return (
    <>
          <h2 style={{color:"#C15299"}}>Props</h2>
        
        * 부모 컨포넌트에서 자식 컨포넌트로 값을 보내줄때 사용<br />
        * 부모안에 있는 &#60; 자식컨포넌트  <b>속성='값'</b> / &#62; <br />
        * function 자식( <b>props</b> )&#123;  <br />
                &nbsp; &nbsp;    
                console.log( props )  // <b>&#123;속성:'값'&#125; </b><br />
          &#125;<br />

          <h2 style={{color:"#C15299"}}>State</h2>
          <button style={{width:"100px",height:"50px", fontSize:"30px", marginBottom:"20px"}}onClick={plus}> {count} </button><br />
          * useState() //상태 [값, 값 수정 함수] <br />
        * 값 수정 함수를 이용해서 값을 수정하면 컨포넌트 자체내에 랜더링 발생 <br />
        * 랜더링 발생 시 바뀐 값이 실체 dom에 적용됨 
    </>
  )
}

export default Props
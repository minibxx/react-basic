import React,{useEffect} from 'react'
import $ from 'jquery'

function Jquery() {
    
    function test(){
      $('.text').css('color','red');
    }
    useEffect(test,[])
    /* 마운팅 일어났을때 test 함수를 바로 실행시키려면 useEffect 에 넣어요 */
    return (
      <article>
          <h2>JQuery</h2>
          <div className='text'>
              npm install jquery <br/>
              ㄴ import $ from 'jquery'
          </div>
      </article>
    )
}

export default Jquery
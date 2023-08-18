import React, { useContext } from 'react'
import { MyContect } from '../Context';

function Write() {
    const {dispatch} = useContext(MyContect);

    const insert = (e)=>{
        e.preventDefault();
        let form = new FormData(e.target);
            form.append('id',Date.now());
        let d = Object.fromEntries(form);
        
        dispatch({type:'insert',data:d});
      }
    //d 라는 데이터를 insert 하자고 요청, Context 컴포넌트로 값이 넘어감

  return (
    <article>
        <h2>Contect</h2>
        <form onSubmit={insert} id="contect">
          <input type="text" name="name" placeholder='이름' />
          <input type="email" name="email" placeholder='이메일'/>
          <textarea name="content"></textarea>
          <input type="submit" value='저장하기' />
        </form>
      </article>
  )
  }

export default Write
import React, { useContext, useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import { MyContext } from '../Context';

function Insert() {
    const elForm = useRef();
    const navigate = useNavigate();   
    const {fetchFn} = useContext(MyContext);

    
    const insertFn = (t,e)=>{
      e.preventDefault();
      let formdata = new FormData(elForm.current);
      let today = new Date();
      let date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
        formdata.append ('date',date)
      let ObjForm = Object.fromEntries(formdata); //이중 배열이 만들어짐, 키와 벨류(객체 형태)
      fetchFn('post',ObjForm);
      navigate('/');
    }

    return (
      <article>
          <h2>Insert</h2>
          <form ref={elForm}>
              <input type="text" name="price"/>
              <textarea name="text"></textarea>
                <div className='buttons'>
                  <button onClick={(e)=>{insertFn('p',e)}}>예금하기</button>
                  <button onClick={(e)=>{insertFn('m',e)}}>출금하기</button>
                </div>
          </form>
      </article>
    )
}


export default Insert
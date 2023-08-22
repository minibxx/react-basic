import React,{ useRef,useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { MyContext } from '../Context';

function Edit() {
  const elForm = useRef();
  const location = useLocation();
  const {price,text,date,id} = location.state.obj;

  const navigate = useNavigate();   
  const {fetchFn} = useContext(MyContext);
  const insertFn = (t,e)=>{
        
    e.preventDefault();

    let formdata = new FormData(elForm.current);
    let today = new Date();
    let date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
        formdata.append('date',date);
        formdata.append('id',id);
    
    let ObjForm = Object.fromEntries(formdata);
    fetchFn('put',ObjForm);
    navigate('/');
  }

  return (
    <article>
      <h2>Edit</h2>
      <form ref={elForm}>
          <input className="textarea2" type="text" name="price" defaultValue={text}/>
          <textarea className="textarea2" name="text" defaultValue={price}></textarea>
          <div className='buttons'>
            <button onClick={(e)=>{insertFn('p',e)}}>예금하기</button>
            <button onClick={(e)=>{insertFn('m',e)}}>출금하기</button>
          </div>
      </form>
    </article>
  )
}

export default Edit
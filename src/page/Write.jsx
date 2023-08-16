import React,{useContext} from 'react'
import {DataContext} from '../MyContext';

function Write() {
  const {data, setData} = useContext(DataContext);

  let insert = (e)=>{  
    e.preventDefault(); 
    let v = e.target;
    let d = {
        name:v.name.value, 
        email:v.email.value, 
        txt:v.txt.value, 
        id:Date.now()
    }
    setData([...data,d]);
  }
  return (
    <article>
        <h2>Write</h2>
        <form onSubmit={insert}>
            <input type="text" name="name"/>
            <input type="email" name="email"/>
            <textarea name="txt"></textarea>
            <input type="submit" value="저장"/>            
        </form>
    </article>
  )
}

export default Write
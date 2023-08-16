import React,{useContext} from 'react'
import {DataContext} from '../MyContext';

function Write() {
  const {data, setData} = useContext(DataContext);

  let insert = (e)=>{  
    e.preventDefault(); 
    let v = e.target;
    let d = {
        name:v.name.value
    }
    setData([...data,d]);
  }
  return (
    <>
        <div class="write">
            <div>참여자 등록</div>
        <form onSubmit={insert}>
            <input type="text" name="name"/>
            <input class="submit" type="submit" value="저장"/>            
        </form>
        </div>
    </>
      
  )
}

export default Write
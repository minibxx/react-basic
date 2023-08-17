import React,{useContext} from 'react'
import {DataContext} from '../MyContext';

function Write() {
  const {data, setData} = useContext(DataContext);

  let insert = (e)=>{  
    e.preventDefault(); 
    let v = e.target;

    if(data.length > 9){
      return false;
    }

    if(v.name.value != ''){
      let d = {
          name:v.name.value,
          id:Date.now()
      }
      setData([...data,d]);
    }
    e.target.name.value = '';
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
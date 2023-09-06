import React, { useContext } from 'react'
import { MyContext } from '../Context';
import { useNavigate } from 'react-router-dom';


function Item({obj}) {
  const navigate = useNavigate();
  const {fetchFn} = useContext(MyContext);
  
  return (
    <>
      <li className='order'>
          <div>{obj.date}</div>
          <div>{obj.price}</div>
          <div>{obj.text}</div>
          <div className='button-1'>
            <button onClick={()=> {navigate('./edit',{state:{obj}})}}>수정</button>
            <button onClick={()=> {fetchFn('del', obj.id)}}>삭제</button>
          </div>
      </li>
    </>
  )
}

export default Item
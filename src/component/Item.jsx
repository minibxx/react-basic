import React from 'react'

function Item({item,todoStatus,deleteData,modifyData}) {

  return (
    <li className={item.state ? 'active':''}>
        <input type="checkbox" data-code={item.date} onChange={todoStatus}  />
        {/* 부모에게 todoS 값을 받아서 온 체인지가 일어나면 todoStatus 함수 실행 */}
        <code>{item.todo}</code>
        <button onClick={()=>modifyData(item.date)} disabled={item.state?true:false}>수정</button>
        <button onClick={()=>{deleteData(item.date)}}>삭제</button>
    </li>
  )
}

export default Item
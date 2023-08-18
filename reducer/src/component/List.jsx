import React, { useContext } from 'react'
import { MyContect } from '../Context'

function List() {
  const {data,dispatch} = useContext(MyContect);

  return (
    <article>
        <h2>관리자가 확인하는 리스트</h2>
        <ul>
            {
                data.map(obj=>(  
                    <li key={obj.id}>
                        [{obj.name}] {obj.email}
                        <p>
                            {obj.content}
                            <button>삭제</button>
                        </p>
                    </li>
                ))
            }
            
        </ul>
    </article>
  )
}

export default List
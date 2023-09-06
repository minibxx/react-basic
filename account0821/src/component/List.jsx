import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../Context'
import Item from './Item';

function List() {
  const {data, fetchFn} = useContext(MyContext);
  // const a = 1;
  // a = 5;

  const [age, setAge] = useState(0);
  // setA(5);

  const onListClick = () => setAge(5);

  useEffect(() => {
    setAge(10);
  }, []);

  return (
    <article>
        <h2 onClick={onListClick}>List</h2>
        {age}
        <p className='total'>총 잔액 : <code>3,500</code></p>
        <ul>
          {
            data.map(obj=>(
              <Item key={obj.id} obj={obj} abc={age}/>
            ))
          }
        </ul>
    </article>
  )
}

export default List
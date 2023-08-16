import {DataContext} from '../MyContext';
import {useContext} from 'react';

function List() {
  const {data,setData} = useContext(DataContext);

  console.log(data)

  return (
    <ul>
        {
            data.map((item)=>( 
                <li key={item.id}>
                    {item.name}
                </li>
                ))
        }
    </ul>
  )
}

export default List
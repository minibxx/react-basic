import {DataContext} from '../MyContext';
import {useContext} from 'react';

function List() {
  const {data,setData} = useContext(DataContext);

  const deleteData = (id) =>{
    let delData = data.filter(obj => obj.id != id); 
    setData(delData);
  }
  console.log(data)

  return (
    <>
    <div className='count'>참여인원 {data.length}명</div>
    
    <ul>
        {
          data.map((item,i)=>( 
            <>
              <li key={item.id}>
                <button class="minus" onClick={()=>{deleteData(item.id)}}>-</button>
                {i+1}. {item.name}
              </li>
            </>
          ))
        }
    </ul>
    </>
  )
}

export default List
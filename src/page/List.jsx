import {DataContext} from '../MyContext';
import {useContext} from 'react';

function List() {
  const value = useContext(DataContext);

  console.log(value)

  return (
    <div>List</div>
  )
}

export default List
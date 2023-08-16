import { DataContext } from './MyContext'; //함수 정의하고 바로 쓰기

import './App.scss';
import List from './page/List';
import Write from './page/Write';

function App() {
  
  return (
    <DataContext.Provider value='1000'> 
      <List/>
      <Write/>
    </DataContext.Provider>
  );
}

export default App;

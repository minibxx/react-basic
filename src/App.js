import MyContext, { DataContext } from './MyContext'; //함수 정의하고 바로 쓰기

import './App.scss';
import List from './page/List';
import Write from './page/Write';

function App() {
  
  return (
    <MyContext>
      <List/>
      <Write/>
    </MyContext>
  );
}

export default App;

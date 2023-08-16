import MyContext, { DataContext } from './MyContext'; //함수 정의하고 바로 쓰기
import './App.scss';
import List from './page/List';
import Write from './page/Write';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(false);
  return (
    <>
    <article>
      <button onClick={()=> { setState((e) => !e);}}>+</button>
      <MyContext>
        <div className={state?'active':''}><Write/></div>
        <List/>
      </MyContext>
    </article>
    </>  
  );
}

export default App;

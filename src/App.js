import './App.scss';
import { useState } from 'react';
import Item from './component/Item';

const initData = [
  // {todo: "리액트 공부하기", state: false, date: Date.now()} 
  // false : 초기 값, 할 일 안함, id 값 대신에 Date 속성으로 고유 값 지정 가능
]

function App() {
  const [data,setData] = useState(initData);
  //할 일을 쓰면 data에 저장, setData: data가 가진 값을 수정 (리렌더링)

  let todoStatus = (e)=>{
    //데이터 값을 찾아서 갈아 끼우려고 가져온 애들
    let stateCode = e.target.checked;
    let dataCode = e.target.dataset.code;
    let dataFind = data.map((obj)=>{
      if(obj.date == dataCode){ // data를 찾았을 경우 체크 T/F 값을 수정해라
        obj.state = stateCode; // 기본 false로 둔 값을 현재 상태와 같게 바꾸어요
      }
      return obj;
    });
    setData(  dataFind  );
  }

  console.log( data );
  const insert = (e)=>{
    e.preventDefault();

    let todo = e.target.todo.value; //내가 등록을 눌렀을 때 인풋의 내용
    setData([...data, {todo, state: false, date: Date.now()}]); 
    //데이터 누적, 할 일을 등록한 시간을 비교해서 늦게 등록한 일이 리스트 상위로 올라옴
  } 

  data.sort(function(b,a){ //오름차순 정렬 최신 값이 위로 올라오게
    if(a.date > b.date) return 1; //이놈들이 밑으로 내려갈수록 커지는 내림차순
    if(a.date < b.date) return -1;
    return 0;
  }) // function(b,a)=> 오름차순, function(a,b)=> 내림차순

  return (
    <div className="App">
      <article>
        <h1>Todo List <span>할 일 6개 남음</span></h1>
        <ul>
          {
            data.map((obj)=>(
              <Item key={obj.date} item={obj} todoStatus={todoStatus}/>
            ))
          }
        </ul>
        <form onSubmit={insert}>
          <p>
            <input type='text' name='todo'/>
            <button>등록</button>
          </p>
        </form>
      </article>

    </div>
  );
}

export default App;

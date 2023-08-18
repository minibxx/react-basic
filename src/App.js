import './App.scss';
import { useState, useEffect } from 'react';
import Item from './component/Item';

const initData = [
  // {todo: "리액트 공부하기", state: false, date: Date.now()} 
  // false : 초기 값, 할 일 안함, id 값 대신에 Date 속성으로 고유 값 지정 가능
]

function App() {
  const [data,setData] = useState(initData);
  // 할 일을 쓰면 data에 저장, setData: data가 가진 값을 수정 (리렌더링)
  const [count, setCount] = useState(0);
  // 카운트의 값이 바뀌면 돔에서 출력되야 함(useState 사용)
  const [mode, setMode] = useState(true); // 등록 상태인지 수정 상태인지
  const [mData, setMData] = useState(''); // 인풋에 넣어서 수정한 내용 뿌릴거에욧
  let [mCode, setCode] = useState();


  //수정버튼을 누르면 해야할 일 내용이 입력칸에 들어가야함. 수정 후 완료 누를 버튼도 필요
  const modifyData = (code)=>{
    setCode(code); //추가하면 수정사항 반영해서 수정 됨
    setMode(false);
    let data2 = data.filter(obj => obj.date == code);
    setMData( data2[0].todo);
  }

  const deleteData = (code) =>{
    let delData = data.filter(obj => obj.date != code); 
    //내가 지우고자 하는 아이템이 아닌것 찾아서 delData에 넣음
    setData(delData);//obj.date 속성의 값이 방금 데이터와 다른 놈을 찾아라
  }


  const todoCount = () =>{
    let dataCount = data.filter(obj => obj.state == false);
    //data 내 F를 찾아서 obj.state = F (해야할 일)인 것들의 숫자를 카운트
    setCount(dataCount.length); //0이었던 놈을 1로
  }

  let todoStatus = (e)=>{
    //데이터 값을 찾아서 갈아 끼우려고 가져온 애들
    let stateCode = e.target.checked; //체크 누르면 T, 안누르면 F
    let dataCode = e.target.dataset.code; //태그에 데이터 속성 넣고 가져오는 작업, [] 형태

    let dataFind = data.map((obj)=>{
      if(obj.date == dataCode){ // data를 찾았을 경우 체크 T/F 값을 수정해라
        obj.state = stateCode; // 기본 false로 둔 값을 현재 상태와 같게 바꾸어요
      }
      return obj; //T/F 값으로 변경해줌  
    });
    setData(  dataFind  );
  }

  const insert = (e)=>{
    e.preventDefault();

    let todo = e.target.todo.value; //내가 등록을 눌렀을 때 인풋의 내용 = mData..
    // setData([...data, {todo, state: false, date: Date.now()}]); 
    //데이터 누적, 할 일을 등록한 시간을 비교해서 늦게 등록한 일이 리스트 상위로 올라옴
    if(mode){
      setData([...data,{todo, state:false, date:Date.now()}]); //데이터 넣고 useS
      e.target.todo.value = '';
      setMData(''); //입력창 비워주기 라는 것 같어요
    }else{
      //수정하기
      console.log(mCode);
      setData(
        data.map(obj=>{
          if(obj.date == mCode){
            obj.todo = todo;
          }
          return obj;
        })
      );
     setMode(true);
    }
  }

  data.sort(function(b,a){ //오름차순 정렬 최신 값이 위로 올라오게
    if(a.date > b.date) return 1; //이놈들이 밑으로 내려갈수록 커지는 내림차순
    if(a.date < b.date) return -1;
    return 0;
  }) // function(b,a)=> 오름차순, function(a,b)=> 내림차순

  useEffect(()=>{
    todoCount(); //const로 선언했기 때문에 이 위치여야 함...
  },[data]);  //data를 넣을 때마다 useE의 todoCount 함수 실행됨

  return (
    <div className="App">
      <article>
        <h1>Todo List <span>할 일 {count}개 남음</span></h1>
        <ul>
          {
            data.map((obj)=>(
              <Item 
                key={obj.date} 
                item={obj} 
                todoStatus={todoStatus}
                deleteData={deleteData}
                modifyData={modifyData}/>
            ))      
          }
        </ul>
        <form onSubmit={insert}>
            <p>
              <input type='text'
                name='todo' 
                defaultValue='홍길동'
                value={mData} //얘가 내가 수정한 내용 가지고 있음
                onChange={(e)=>{setMData(e.target.value)}}
              />
              <button>
                {(mode) ? '등록':'수정'}
              </button> {/* 입력창 기본값: 홍길동 */}
            </p>
        </form>
      </article>

    </div>
  );
}

export default App;

import './App.scss';

function App() {
  return (
    <div>
      <article>
        <h1>Todo List</h1>
        <div>할 일 6개 남음</div>
        <ul>
          <li>
            <input type='checkbox' />
            <code>할 일</code>
            <button>수정</button>
            <button>삭제</button>
          </li>
        </ul>
        <form>
          <p>
            <input type='text' />
            <button>등록</button>
          </p>
        </form>
      </article>

    </div>
  );
}

export default App;

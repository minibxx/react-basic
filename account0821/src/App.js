import axios from 'axios';
import { HashRouter, Routes, Route,Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import List from './component/List';
import Insert from './component/Insert';
import Edit from './component/Edit';
import Context from './Context';

function App() {

  return (
    <Context>
      <HashRouter>
        <header>
          <nav>
            <Link to ="/">Home</Link>
            <Link to ="/insert">Insert</Link>
            {/* <Link to ="/edit">Edit</Link> */}
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<List/>} />
            <Route path='/insert' element={<Insert/>} />
            <Route path='/edit' element={<Edit/>} />
          </Routes>
        </main>
      </HashRouter>
    </Context>
  );
}

export default App;

import axios from 'axios';
import { HashRouter, Routes, Route,Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Login from './component/Login';


function App() {

  return (
      <HashRouter>
        <main>
          <Routes>
            <Route path='/' element={<Login/>} />
          </Routes>
        </main>
      </HashRouter>
  );
}

export default App;

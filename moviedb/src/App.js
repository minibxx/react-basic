import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Main from './component/Main';
import Home from './component/Home';
import Movie from './component/Movie';
import Tv from './component/Tv';
import axios from 'axios';
import Detail from './component/Detail';
import Movie2 from './component/Movie2';


function App() {

  return (
    
    <BrowserRouter>
      <nav>
        <div><Link to="/home">MFLIX</Link></div>
        <div className='nav-right'>
          <Link to="/home">Home</Link>
          <Link to="/movie">Movie</Link>
          <Link to="/tv">TV series</Link>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/movie' element={<Movie2 />}/>
          <Route path='/tv' element={<Tv />}/>
          <Route path='/:type/:id' element={<Detail />}/>
        </Routes>
      </main>
    </BrowserRouter>
);
}

export default App;

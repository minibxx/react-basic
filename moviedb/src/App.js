import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Main from './component/Main';
import Home from './component/Home';
import Movie from './component/Movie';
import Tv from './component/Tv';
import axios from 'axios';


function App() {

  return (
    
    <BrowserRouter>
    
      <nav>
        <div><Link to="/home">YFLIX</Link></div>
        <div className='nav-right'>
          <Link to="/home">Home</Link>
          <Link to="/movie">Movie</Link>
          <Link to="/tv">TV series</Link>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/movie' element={<Movie />}/>
          <Route path='/tv' element={<Tv />}/>
        </Routes>
      </main>
    </BrowserRouter>
);
}

export default App;

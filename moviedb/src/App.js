import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Main from './component/Main';
import Home from './component/Home';
import Movie from './component/Movie';
import Tv from './component/Tv';

function App() {
  return (
    
    <BrowserRouter>
      <nav>
        <Link to="">YFLIX</Link>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/movie">Movie</Link>
          <Link to="/tv">TV series</Link>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/movie' element={<Movie />}/>
          <Route path='/tv' element={<Tv />}/>
        </Routes>
      </main>
    </BrowserRouter>
);
}

export default App;

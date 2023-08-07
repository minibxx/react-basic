import {BrowserRouter,Routes, Route, Link} from 'react-router-dom';
import './App.scss';
import Home from './page/Home';
import Product from './page/Product';
import data from './page/data.json';
import fdata from './page/Fdata';
import ParamItem from './page/ParamItem';
import Family from './page/Family';

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Link to="/">HOME</Link>
        <Link to="/product">랏소 · 우디 · 버즈</Link>
        <Link to="/family">토이패밀리</Link>
      </header>

      <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<Product  data={data} />} />
            <Route path="/paramItem/:code" element={<ParamItem data={data}/>} />
            <Route path="/family" element={<Family data={fdata} />} />
          </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

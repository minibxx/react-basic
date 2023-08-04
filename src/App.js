import {BrowserRouter,Routes, Route, Link} from 'react-router-dom';
import './App.scss';
import Home from './page/Home';
import Product from './page/Product';
import Product_b from './page/Product_b';
import data from './page/data';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ParamItem from './page/ParamItem';

function App() {
  let [data_b,setData] = useState();

  useEffect(function(){  
    axios.get('./data_b.json')
    .then(d=>{
      setData(d.data);
    });

  },[]) 


  if(!data_b) return <>  로딩중....  </>;

  return (
    <BrowserRouter className="App">
      <header className="App-header">
        <Link to="/">HOME</Link>
        <Link to="/product">Product</Link>
        <Link to="/product_b">Product_b</Link>
        <Link to="/paramItem">Param Item</Link>
      </header>
      <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<Product  data={data} />} />
            <Route path="/product_b" element={<Product_b  data={data_b} />} />
            <Route path="/paramItem" element={<ParamItem />} />
          </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

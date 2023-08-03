import logo from './logo.svg';
import './App.scss';
import Home from './page/Home';
import Product from './page/Product';
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter> 
      <div className="wrap">
        <header>
          <nav> 
            <Link to ="/home">HOME</Link> 
            <Link to ="/product">PRODUCT</Link>
          </nav>
        </header>
        <main>  
          <Routes>
            <Route path='/home' element={ <Home/> }  />
            <Route path='/product' element={ <Product/> }  />
          </Routes>  
        </main>
        <footer>  </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

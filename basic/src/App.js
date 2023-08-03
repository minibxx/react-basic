import './App.scss';
import Css from './page/Css';
import Home from './page/Home';
import Image from "./page/Image";
import Not from "./page/Not";
import Router from "./page/Router";
import Props from "./page/Props";
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom'
import GitDeploy from './page/GitDeploy';

function App() {
  return (
    <BrowserRouter> 
      <div className="wrap">
        <header>
          <nav style={{border: '1px solid green'}}> {/* 객체 속성 값 */}
            <Link to ="/">HOME</Link> {/* 여기서 url 바꿈 */}
            <Link to ="/css">css 활용</Link>
            <Link to ="/img">img 활용</Link>
            <Link to ="/router" state='a100'>Router</Link>
            <Link to ="/props">Props</Link>
            <Link to ="/deploy">GitDeploy</Link>
            
          </nav>
        </header>
        <main>  
          <Routes>
            <Route path='/' element={ <Home/> }  />{/* 바뀐 url에 <.js> 연결 */}
            <Route path='/css' element={ <Css/> }  />
            <Route path='/img' element={ <Image/> }  />
            <Route path='/*' element={ <Not/> }  />
            <Route path='/router' element={ <Router/> }  />
            <Route path='/props*' element={ <Props data='1000' name='props'/> }  />
            <Route path='/deploy*' element={ <GitDeploy/> }  />
          </Routes>  
        </main>
        <footer>  </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

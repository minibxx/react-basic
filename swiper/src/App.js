import './App.scss';
import {BrowserRouter,Routes, Route, Link} from 'react-router-dom';
import $ from 'jquery';
import Selector from './page/Selector';
import Clickscroll from './page/Clickscroll';
import Jquery from './page/Jquery';
import Motion from './page/Motion';
import SlideSwiper from './page/SlideSwiper';
import Reactvideo from './page/Reactvideo';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="">Selector(useRef) </Link>
        <Link to="/scroll">Click & Scroll </Link>
        <Link to="/jquery">Jquery </Link>
        <Link to="/motion">Framer Motion </Link>
        <Link to="/swiper">Slide Swiper</Link>
        <Link to="/video">React Video </Link> 
        {/* 미리 선언되있는 swiper나 video 충돌나지 않게 컴포넌트 명 조심히 만들기 */}
      </nav>

      <main>
          <Routes>
            <Route path='/' element={<Selector/>}/>
            <Route path='/scroll' element={<Clickscroll/>}/>
            <Route path='/jquery' element={<Jquery />}/>
            <Route path='/motion' element={<Motion/>}/>
            <Route path='/swiper' element={<SlideSwiper/>}/>
            <Route path='/video' element={<Reactvideo/>}/>
          </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

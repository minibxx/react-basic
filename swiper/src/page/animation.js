/* js를 리액트에서 그냥 쓰려면 (?)
<script src="경로" type="module"> << 타입이 바뀜 
js들을 하나로 합쳐서(webpack 이용) 한번에 넣는 작업이 필요 

번들.js 에러 : 합치는 과정에서 에러 */


/* --------------첫번째 애니메이션------------- */
const txt = {
  init: {scale: 2, x: 1000, opacity:0},
  play: {scale: 1, x: 0},
  trans: {duration: 1}
} 

/* --------------두번째 애니메이션------------- */
const txt2 = {
  init: {scale: 5, rotate: 360},
  play: {scale: 1, rotate: 0}
} 

export {txt, txt2};
/* 하나만 내보낼 때는 export default txt, 여러 개는 객체 형태로 export {txt, txt2} */

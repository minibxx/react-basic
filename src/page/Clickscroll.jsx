import React, {useEffect} from 'react'




function Clickscroll() {

  let inter = () =>{
    const elScroll = document.querySelector('.scroll');
    HTMLCollection.prototype.forEach = Array.prototype.forEach;
    /* HTMLCollection 으로 포이치 프로토타입 생성, 원래는 포이치 없음 */

    elScroll.children.forEach((el)=>{
      if(el.offsetTop < window.pageYOffset + window.innerHeight ){
        el.classList.add('active');
      }
    })
  }

  useEffect(()=> {
    window.addEventListener('scroll', inter);
    /* 마운팅(되었을 때), 돔이 만들어지고 난 후에 inter 함수 실행 */
    return () => {
      console.log('unmounting');
      window.removeEventListener('scroll', inter);
      /* 해당 컴포넌트에서 다른 컴포넌트로 이동 시 언마운팅 발생 */
      /* 언마운팅 발생하는 곳에 remove리스너 해놓으면 다른 컴포넌트에서는 스크롤값 안찍음 */
    }
  },[])



  
  return (
    <>
      <h2>Scroll</h2>
      <div className="scroll">
        <figure>01</figure>
        <figure>02</figure>
        <figure>03</figure>
        <figure>04</figure>
        <figure>05</figure>
        <figure>06</figure>
      </div>
    </>
  )
}

export default Clickscroll
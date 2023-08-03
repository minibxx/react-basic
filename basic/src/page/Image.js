import logo from '../logo.svg';

function Image() {
  return (
    <>
        *src 폴더 안의 이미지 출력
        <img src={logo} /> 
        
        *public 폴더 안의 이미지 출력
        <img src="./logo512.png" />
    </>
  )
}

export default Image
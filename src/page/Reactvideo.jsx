import React from 'react'
import ReactPlayer from 'react-player';


function Reactvideo() {
  const endVideo = ()=>{
    console.log('끝났음...')
  }
  const playVideo = ()=>{
    console.log('플레이중...')
  }
  return (
    <article>
      <div>
        <h2>RectVideo</h2>
        <ReactPlayer 
        playing={false} /* 영상 정지를 default 값으로 두려고 false */
        loop
        controls
        muted
        onEnded={endVideo} /* 끝나는 시점에 endVideo함수를 실행시킴 */
        onPlay = {playVideo} /* 끝나는 시점에 playVideo함수를 실행시킴 */
        url='./Zootopia.mp4' />
      </div>
    </article>
  )
}

export default Reactvideo
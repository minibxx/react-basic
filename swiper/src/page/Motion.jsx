import React from 'react'
import {motion} from 'framer-motion'
/* import txt from './animation' // 애니메이션.js에 하나 있을 때 {} 없이 임포트! */
import {txt,txt2} from './animation'// 애니메이션.js에 여러 개 있을 때
import * as all from './animation'

function Motion() {
  
  /* 다른 페이지에도 적용하려면 const txt 통째로 가지고 다녀야 함 -> 애니.js로 분리 */

  return (
    <article>
        <h2>Framer Motion</h2>
        <motion.div variants={txt} initial={{scale:1, x:1000}} animate={{scale:1, x:0}}>
          바보바보바보바보
        </motion.div>
        <motion.div animate={{scale:1, rotate:360}} transition={{duration: 3}}>
            npm install framer-motion <br/>
            ㄴ import motion from "framer-motion"
        </motion.div>
    </article>
  )
}

export default Motion
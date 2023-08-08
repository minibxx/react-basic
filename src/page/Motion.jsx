import React from 'react'
import {motion} from 'framer-motion'

function Motion() {
  return (
    <article>
        <h2>Framer Motion</h2>
        <motion.div animate={{scale:2, rotate:360}} transition={{duration: 5}}>
            npm install framer-motion <br/>
            ㄴ import motion from "framer-motion"


        </motion.div>
    </article>
  )
}

export default Motion
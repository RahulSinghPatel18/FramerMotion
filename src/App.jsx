import { motion } from 'framer-motion'
import React from 'react'

const App = () => {
  
  const variants = {
    hidden:{opacity:0,scale:0,rotate:0,color:"black"},
    visible:{opacity:1,scale:1.5,
    left:[0,1100,1100,0,0], 
    top:[0,480,480,0,0],
    rotate:[0,360,0,-360,0],
    backgroundColor:["crimson"],},
    
  }
  motion
  return (
    <div className='flex  justify-center items-center p-[5%] '>
      
<motion.div className="w-[200px] h-[200px] bg-red-400 rounded-[10%]  text-center "
 variants={variants}
  initial="hidden"
  animate="visible"

  transition={{duration:3, delay:1, ease:"anticipate", repeat:4}}
  >
    
</motion.div>

<div className='p-[5%] flex justify-center'>
<motion.div className="w-[200px] h-[200px] bg-blue-400 rounded-[50%]  text-center "
  

  drag
  dragDirectionLock="true"
  dragConstraints={{left:0, top:0, right:500}}
  whileHover={{scale:1.1}}

  whileTap={{scale:0.8,background:"red"}}

 >
   Drag me!
 <br />left or right
</motion.div>
</div>


    </div>
  )
}

export default App

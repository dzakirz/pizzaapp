import React from 'react'
import { motion, useCycle } from 'framer-motion' 

const loaderVariants = {
  initial: {

  },
  animate: {
    x: [-20,20],
    y: [0,-30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut'
      }
    }
  },
  secondAnimate: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut'
      }
    }
  }
}

const Loader = () => {
  const [animation,cycleAnimation] = useCycle('animate','secondAnimate')

  return (
    <>
      <motion.div
        className='loader'
        variants={loaderVariants}
        animate={animation}
      ></motion.div>

      <motion.div 
        onClick={()=>cycleAnimation()}
        whileHover={{ cursor: 'pointer' }}
      >Ubah Loader</motion.div>
    </>
  )
}

export default Loader
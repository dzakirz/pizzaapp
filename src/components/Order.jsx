import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  initial: {
    opacity: 0,
    x: '100vw'
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4, //spring properti
      damping: 8, //spring properti
      when: 'beforeChildren', 
      staggerChildren: 0.4
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}
const childVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
}

const Order = ({ pizza, setShowModal }) => {
  useEffect(()=>{
    setTimeout(()=> {
      setShowModal(true)
    },5000)
  },[setShowModal])

  return (
    <motion.div 
      className="container order"
      variants={containerVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >

      <h2>Terimakasih Telah Memesan :)</h2>
      
      <motion.p
        variants={childVariants}
      >
      Kamu memesan {pizza.base} dengan:</motion.p>
      <motion.div
        variants={childVariants}
      >
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;
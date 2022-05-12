import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';

const buttonVariants = {
  whileHover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
}
const containerVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5, 
      duration: 1.5
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const Home = () => {
  return (
    <motion.div 
      className="home container"
      variants={containerVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <h2>
        Selamat datang !
      </h2>
      <Link to="/base">
        <motion.button 
          variants={buttonVariants}
          whileHover='whileHover'
          exit='exit'
        >
          Pesan Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home;
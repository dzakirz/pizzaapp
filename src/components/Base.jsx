import React from 'react';
import { Link } from 'react-router-dom';
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
      delay: 0.5
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const nextVariants = {
  initial: {
    x: '-100vw'
  },
  animate: {
    x: 0,
    transition: {
      type: 'spring', 
      stiffness: 120
    }
  }
}
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

const Base = ({ addBase, pizza }) => {
  const bases = ['Pizza Kecil', 'Pizza Sedang', 'Pizza Besar'];

  return (
    <motion.div 
      className="base container"
      variants={containerVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >

      <h3>Langkah 1: Pilih Pizza</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: '#f8e112'
              }}
              transition={{
                type: 'spring',
                stiffness: 300
              }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div 
          className="next"
          variants={nextVariants}
        >
          <Link to="/toppings">
            <motion.button
            variants={buttonVariants}
              whileHover='whileHover'
            >
            Lanjut</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;
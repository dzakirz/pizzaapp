import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const backdropVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
}

const modalVariants = {
  initial: {
    y: '-100vh',
    opacity: 0
  },
  animate: {
    y: 200,
    opacity: 1,
    transition: {
      delay: 0.5
    }
  }
}

const Modal = ({showModal,setShowModal}) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal &&(
        <motion.div 
          className='backdrop'
          variants={backdropVariants}
          initial='initial'
          animate='animate'
          exit='initial'
        >
          <motion.div 
            className="modal"
            variants={modalVariants}
          >
            <p>Mau pesan lagi?</p>
            <Link to='/'>
              <button>Pesan lagi</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
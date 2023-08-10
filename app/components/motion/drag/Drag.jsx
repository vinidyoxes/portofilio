'use client'

import { motion } from 'framer-motion';

const Drag = ({ children }) => {
  return (
    <motion.div drag
      whileDrag={{scale:'1'}}
    >
      {children}
    </motion.div>
  );
};

export default Drag;
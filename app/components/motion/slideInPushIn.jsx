'use client'
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedElement = ({ children, index }) => {
  const newIndex = (index + 1) / 2
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
      transition={{ duration: 1, delay: newIndex * 0.2 }} // Adjust the multiplier as needed
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;
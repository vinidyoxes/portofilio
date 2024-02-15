// components/FadeInUpAnimation.js
import { motion } from "framer-motion";

const FadeInUpAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        ease:"linear",
        duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUpAnimation;

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Reveal = ({ children, animation = 'fade-up', delay = 0, duration = 800 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const getVariants = () => {
    switch (animation) {
      case 'fade-up':
        return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
      case 'fade-down':
        return { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } };
      case 'fade-left':
        return { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };
      case 'fade-right':
        return { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
      case 'zoom-in':
        return { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } };
      default:
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={controls}
      transition={{ duration: duration / 1000, delay: delay / 1000, ease: [0.175, 0.885, 0.32, 1.275] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;

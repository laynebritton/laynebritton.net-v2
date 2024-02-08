import { motion } from 'framer-motion';
import { ChevronDown } from 'react-bootstrap-icons';

export const NudgeDownArrow = () => {
  const topStart = '85vh';
  const topEnd = '86vh';

  return (
    <motion.div
      style={{ position: 'absolute', left: '49vw' }}
      initial={{ opacity: 0, top: topStart }}
      animate={{
        opacity: [0, 0.6, 0.6, 0.5, 0],
        top: [topStart, topStart, topEnd, topEnd, topEnd]
      }}
      transition={{
        duration: 2.25,
        repeat: Infinity,
        repeatDelay: 1.5,
        delay: 3
      }}
    >
      <ChevronDown size={25} />
    </motion.div>
  );
};

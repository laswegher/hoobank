import React from 'react';
import { motion } from 'framer-motion';

const GetStartedV1 = () => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 500, bounce: 6 }}
      className="text-sm gradient-2 px-4 py-2 text-[#333] font-semibold rounded-lg"
    >
      Get Started
    </motion.button>
  );
};

export default GetStartedV1;

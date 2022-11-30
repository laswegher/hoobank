import React from 'react';
import { motion } from 'framer-motion';

//Icons
import { CgArrowTopRight } from 'react-icons/cg';

const GetStartedV2 = () => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 500 }}
      className="w-[90px] h-[90px] gradient-2  font-bold tracking-wider rounded-full cursor-pointer p-[2px]"
    >
      <div className="text-sm f-center flex-col w-full h-full bg-primary rounded-full">
        <div className="flex ">
          <p className="text-gradient">Get</p>{' '}
          <CgArrowTopRight size={20} />
        </div>
        <p className=" text-gradient">Started</p>
      </div>
    </motion.div>
  );
};

export default GetStartedV2;

/*


*/

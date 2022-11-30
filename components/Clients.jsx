import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

//constant
import { clients } from '../constants';

export const Clients = () => {
  return (
    <div className="my-10 px-4">
      <div className="max-w-6xl mx-auto grid place-items-start sm:place-items-center gap-20 grid-cols-1 ss:grid-cols-2 md:grid-cols-4">
        {clients.map((client) => (
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 500 }}
            className="col-span-1 w-[220px] h-[40px]"
            key={client.id}
          >
            <Image
              src={client.logo}
              alt={client.title}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

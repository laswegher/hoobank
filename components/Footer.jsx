import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

//Assets
import { logo } from '../public/assets';

//Constant data
import {
  usefullLinks,
  community,
  partner,
  social,
} from '../constants';

//icons
import { TbCopyright } from 'react-icons/tb';

const Footer = () => {
  return (
    <div className="mt-20 px-4">
      <div className="max-w-5xl mx-auto ">
        {/* Top */}
        <div className=" flex flex-col sm:flex-row gap-3 border-b border-[#3f3e45] pb-8">
          {/* Logo */}
          <div className="flex-1 flex flex-col">
            <div className="mb-4  ">
              <Image
                src={logo}
                alt="logo"
                className="w-[200px]"
              />
            </div>
            <p className="opacity-80 max-w-[300px] mb-4">
              A new way to make the payments easy, reliable and
              secure.
            </p>
          </div>

          <div className="flex-1 flex justify-between flex-wrap gap-4">
            {usefullLinks.map((arry) => {
              return (
                <ul className="">
                  <p className="font-semibold tracking-wide mb-2">
                    {arry.title}
                  </p>
                  {arry.links.map((item) => (
                    <motion.li
                      initial={{ scale: 1 }}
                      whileHover={{
                        scale: 1.05,
                        color: 'rgba(103, 232, 249, 1)',
                      }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      className=" text-sm  opacity-80 py-1"
                      key={item.id}
                    >
                      {item.item}
                    </motion.li>
                  ))}
                </ul>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <div className="my-5 flex flex-col gap-5 sm:flex-row items-center justify-between">
          {/* Copyright */}
          <div className="flex items-center flex-col xs:flex-row gap-4">
            <p className="flex items-center gap-4 text-sm opacity-80 tracking-widest">
              Copyright
              <TbCopyright />{' '}
            </p>

            <p className="text-sm opacity-80 tracking-widest">
              2021 HooBank. All Rights Reserved.
            </p>
          </div>
          {/* Icons */}
          <ul className="flex gap-8">
            {social.map((item) => (
              <motion.li
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ type: 'spring', stiffness: 500 }}
                key={item.id}
              >
                <Image
                  src={item.icon}
                  alt={item.id}
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

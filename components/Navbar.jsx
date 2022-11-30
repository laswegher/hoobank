import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Assets
import { logo, menu, close } from '../public/assets/index';

//constant
import { navLinks } from '../constants';

//framer motion

const list = {
  close: {
    x: -200,
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
};

const items = {
  close: {
    opacity: 0,
    x: -80,
  },
  open: {
    opacity: 1,
    x: 0,
  },
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  console.log(toggle);
  return (
    <div className=" w-full f-center h-20 px-4">
      <div className=" max-w-6xl mx-auto w-full f-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            alt="hoobank"
            className="w-[140px]"
          />
        </Link>

        {/* Navigation */}
        <ul className="hidden sm:flex gap-10  z-50">
          <div className="flex gap-20">
            {navLinks.map((item) => {
              return (
                <Link
                  onClick={() => console.log(item)}
                  href={item.link}
                >
                  <motion.li
                    key={item.id}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                    className="text-lg tracking-wide"
                  >
                    {item.title}
                  </motion.li>
                </Link>
              );
            })}
          </div>
        </ul>

        {/* Mobile Icon */}
        <div className="block sm:hidden">
          <Image
            src={toggle ? close : menu}
            alt="toggle icons"
            width={30}
            height={30}
            className="object-contain"
            onClick={() => setToggle((prevState) => !prevState)}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.ul
        variants={list}
        initial="close"
        animate={`${toggle ? 'open' : 'close'}`}
        className=" absolute  z-10 p-10 rounded-xl top-[100px] right-0 gradient-1 "
      >
        <div className="flex flex-col gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              onClick={() => setToggle((prevState) => !prevState)}
            >
              <motion.li
                variants={items}
                className="text-lg tracking-wide"
              >
                {item.title}
              </motion.li>
            </Link>
          ))}
        </div>
      </motion.ul>
    </div>
  );
};
export default Navbar;

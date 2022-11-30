import React from 'react';
import Image from 'next/image';

// Images
import heroImage from '../public/assets/robot.png';
import discountIcon from '../public/assets/Discount.svg';

// Components
import { GetStartedV2 } from './index';

const Hero = () => {
  return (
    <div className="relative w-full px-4 my-10">
      <div className="max-w-6xl mx-auto f-center gap-10 sm:gap-0 sm:flex-row flex-col">
        {/* Content */}
        <div className="relative flex-1 ">
          {/* Discount */}
          <div className="flex items-center gap- max-w-max px-5 rounded-xl bg-[#272727] font-bold">
            <Image
              src={discountIcon}
              alt="discount"
            />
            <p className="text-xs tracking-widest px-1 py-2">
              20% <span className="text-gray-400">DISCOUNT FOR</span>{' '}
              1 MONTH <span className="text-gray-400">ACCOUNT</span>
            </p>
          </div>

          <div className="flex justify-between sm:justify-start sm:items-center gap-16 mt-6">
            <h1 className=" leading-[40px] sm:leading-[60px] md:leading-[70px]">
              The Next <br />{' '}
              <span className="text-gradient">Generation</span>
            </h1>
            <div className="hidden ss:block">
              <GetStartedV2 />
            </div>
          </div>

          <h1 className="leading-[40px] sm:leading-[60px] md:leading-[70px] mb-8">
            Payment Method.
          </h1>

          <p className=" text-lg tracking-wider">
            Our team of experts uses a methodology to identify the
            credit cards most likely to fit your needs. We examine
            annual percentage rates, annual fees.
          </p>
        </div>

        {/* Image */}
        <div className="flex relative sm:h-[380px] md:h-[500px] flex-1">
          <Image
            priority
            src={heroImage}
            alt="hero image"
            className="w-full h-full object-fit"
          />

          <div className="absolute pink__gradient z-[0] w-[40%] h-[40%] top-0" />
          <div className="absolute white__gradient z-[1] w-[80%] h-[90%] bottom-40" />
          <div className="absolute blue__gradient z-[0] w-[50%] h-[50%] bottom-20" />
        </div>

        <div className="block ss:hidden">
          <GetStartedV2 />
        </div>
      </div>
    </div>
  );
};

export default Hero;

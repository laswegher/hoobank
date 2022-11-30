import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

//Constant data
import { stats } from '../constants/index';

const InfoBanner = () => {
  return (
    <div className="px-4 my-14">
      <div className="max-w-6xl mx-auto flex items-start flex-wrap gap-10 ">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex-1 min-w-[230px] flex justify-start items-center gap-5 text-[#9DEDF0] uppercase tracking-wider"
          >
            <p className=" text-white font-bold text-3xl lg:text-4xl">
              <Typewriter
                words={[`${stat.value}`]}
                delaySpeed={1300}
              />
            </p>
            <p>{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBanner;

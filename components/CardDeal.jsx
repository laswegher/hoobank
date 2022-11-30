import React from 'react';

//Components
import GetStartedV1 from './GetStartedV1';

//Assets
import { card } from '../public/assets';
import Image from 'next/image';

const CardDeal = () => {
  return (
    <div className="my-20 px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 sm:flex-row">
        {/* Left */}
        <div className="flex-1 flex items-start justify-center flex-col gap-5">
          <h2 className="leading-[50px]">
            Find a better card deal <br className="hidden sm:block" />{' '}
            in few easy steps.
          </h2>
          <p className="tracking-wider max-w-md opacity-80">
            Arcu tortor, purus in mattis at sed integer faucibus.
            Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices
            ac, ametau.
          </p>
          <GetStartedV1 />
        </div>

        {/* Right */}
        <div className="flex-1">
          <Image
            src={card}
            alt="card deal"
          />
        </div>
      </div>
    </div>
  );
};

export default CardDeal;

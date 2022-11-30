import React from 'react';
import { GetStartedV1 } from './index';

//Constant Data
import { features } from '../constants';

//Components
import FeatureCard from './FeatureCard';

const Business = () => {
  return (
    <div
      id="features"
      className="my-20 px-4"
    >
      <div className="max-w-6xl mx-auto flex sm:flex-row flex-col gap-10">
        {/* Left */}
        <div className="flex flex-col items-start justify-center gap-5 flex-1">
          <h2 className="leading-[50px] ">
            You do the business, <br className="sm:block hidden" />{' '}
            we`ll handle the money.
          </h2>
          <p className="tracking-wider max-w-md opacity-80">
            With the right credit card, you can improve your financial
            life by building credit, earning rewards and saving money.
            But with hundreds of credit cards on the market.
          </p>
          <GetStartedV1 />
        </div>
        {/* Right */}
        <div className="flex-1">
          {features.map((feature, i) => (
            <div
              key={feature.id}
              className={`${
                i % 2 === 1 ? 'gradient-1' : 'bg-transparent'
              } rounded-3xl`}
            >
              <FeatureCard
                i={i}
                length={features.length}
                {...feature}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Business;

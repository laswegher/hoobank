import React from 'react';
import GetStartedV1 from './GetStartedV1';

const CTA = () => {
  return (
    <div className="my-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 black__gradient px-16 py-12 rounded-xl ">
        {/* Content */}
        <div>
          <h2 className="mb-7">Let`s try our service now!</h2>
          <p className="tracking-wider max-w-md opacity-80">
            Everything you need to accept card payments and grow your
            business anywhere on the planet.
          </p>
        </div>
        <GetStartedV1 />
      </div>
    </div>
  );
};

export default CTA;

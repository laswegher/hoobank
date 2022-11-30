import Image from 'next/image';
import React from 'react';

// Assets
import { bill, apple, google } from '../public/assets';

const Billing = () => {
  return (
    <div className="my-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col-reverse gap-10 sm:flex-row sm:items-center">
        {/* left */}
        <div className="flex-1">
          <Image
            src={bill}
            alt="billing"
          />
        </div>

        {/* Right */}
        <div className="flex-1 ">
          <h2 className="leading-[50px]  mt-6 mb-4">
            Easily control your <br className="hidden sm:block" />{' '}
            billing & invoicing.
          </h2>
          <p className="tracking-wider max-w-md opacity-80">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices
            ametodio aenean neque. Fusce ipsum orci rhoncus
            aliporttitor integer platea placerat.
          </p>

          {/* Buttons */}
          <div className="flex mt-4">
            <Image
              src={apple}
              alt="app store"
            />
            <Image
              src={google}
              alt="google store"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;

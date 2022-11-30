import Image from 'next/image';
import React from 'react';

const FeatureCard = ({ icon, text, title, i, length }) => {
  console.log(i);
  return (
    <div
      className={`${
        i === length - 1 ? 'mb-0' : 'mb-4'
      } f-center gap-4 p-2 max-w-max`}
    >
      <div className="f-center min-w-[60px] min-h-[60px] rounded-full bg-dimBlue">
        <Image
          src={icon}
          alt={text}
          className="w-[30px] h-[30px] object-cover"
        />
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm tracking-widest mt-2">{text}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

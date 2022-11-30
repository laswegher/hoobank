import Image from 'next/image';
import React from 'react';

const FeedbackCard = ({
  icon,
  text,
  image,
  clientName,
  clientPosition,
}) => {
  return (
    <div className="flex flex-col h-full max-w-[300px] px-4 py-6 sm:py-10 border-b-2 border-cyan-400">
      <Image
        src={icon}
        alt="quotes"
        className="w-[30px] h-[30px]"
      />
      <p className="tracking-wider opacity-80 mt-8 mb-14">{text}</p>

      <div className="flex items-center gap-5 mt-auto">
        <Image
          src={image}
          alt={clientName}
          className="w-[40px] h-[40px] object-contain rounded-full"
        />
        <div className="">
          <p className="text-md tracking-wide">{clientName}</p>
          <p className="text-xs font-bold tracking-widest opacity-80">
            {clientPosition}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;

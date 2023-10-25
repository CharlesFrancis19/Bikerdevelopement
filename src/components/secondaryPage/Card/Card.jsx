import React from 'react';
import Image from 'next/image';

const Card = ({ imageUrl, content1, content2 }) => {
  return (
    <div className="flex gap-10 shadow-md p-4 rounded-2xl">
      <div className="flex flex-col  bg-white">
        <Image src={imageUrl} width={100} height={100} alt="Card" />
      </div>
      <div className="text-[#87A1AC] flex flex-col gap-2">
        <div className="font-bold text-4xl">{content1}</div>
        <div className="font-normal">{content2}</div>
      </div>
    </div>
  );
};

export default Card;

import React from 'react';
import Card from './Card';
import cardData from './cardData.json';

const CardComp = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col md:flex-row gap-8 max-w-[1200px]">
        {cardData.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            content1={card.content1}
            content2={card.content2}
          />
        ))}
      </div>
    </div>
  );
};

export default CardComp;

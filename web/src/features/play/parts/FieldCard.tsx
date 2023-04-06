import React, { useState } from 'react';
import { CardType } from '../../../libs/types/Card';
import Image from 'next/image';
import { useDeviceType } from 'libs/store/MediaQuery';

interface CardProps {
  card: CardType;
  isActive: boolean;
  onClick: (id: number) => void;
}

export const FieldCard: React.FC<CardProps> = (props) => {
  const { card, isActive, onClick } = props;
  const { isMiniPhone, isSmartPhone, isLaptopOrTablet, isBigScreen } = useDeviceType();

  const handleClick = () => {
    if (!card.is_selected && !isActive) return;
    onClick(card.id);
  };

  const cardHeight = isMiniPhone
    ? 90
    : isSmartPhone
    ? 100
    : isLaptopOrTablet
    ? 130
    : isBigScreen
    ? 200
    : 120;
  const cardWidth = isMiniPhone
    ? 70
    : isSmartPhone
    ? 80
    : isLaptopOrTablet
    ? 100
    : isBigScreen
    ? 160
    : 100;

  return (
    <>
      <div className="overlay" onClick={handleClick}>
        <Image src={card.img_src} alt="my card" width={cardWidth} height={cardHeight}></Image>
        {!card.is_selected && !isActive && <div className="blur"></div>}
      </div>
      <style jsx>{`
        .overlay {
          position: relative;
          transition: transform 0.2s ease;
          transform: ${card.is_selected ? 'translateY(-10px)' : ''};
          height: auto;
        }

        .blur {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgb(0, 0, 0, 30%);
          border-radius: 5px;
        }
      `}</style>
    </>
  );
};

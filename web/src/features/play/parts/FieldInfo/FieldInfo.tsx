import React from 'react';
import Android from '../../../../assets/Android.png';
import Apple from '../../../../assets/Apple.png';
import Linux from '../../../../assets/Linux.png';
import Windows from '../../../../assets/Windows.png';
import { useDeviceType } from '../../../../libs/store/MediaQuery';

import Image from 'next/image';

interface FieldInfoProps {
  round: number;
}

export const FieldInfo: React.FC<FieldInfoProps> = (props) => {
  const { isSmartPhone, isLaptopOrTablet, isBigScreen } = useDeviceType();
  const { round } = props;

  const decideOS = function (num: number) {
    if (num % 4 === 0) return Android;
    if (num % 4 === 1) return Apple;
    if (num % 4 === 2) return Linux;
    if (num % 4 === 3) return Windows;
    return Apple;
  };

  const currentFieldSize = isSmartPhone ? 30 : isLaptopOrTablet ? 50 : isBigScreen ? 60 : 40;
  const nextFieldSize = isSmartPhone ? 20 : isLaptopOrTablet ? 30 : isBigScreen ? 40 : 25;

  return (
    <>
      <div className="tern">
        <div className="tern-text">
          Round<span className="tern-number">{round}</span>
        </div>
        <div className="fields">
          <Image
            src={decideOS(round)}
            alt="current field"
            width={currentFieldSize}
            height={currentFieldSize}
          />
          <div>&gt;&gt;</div>
          <Image
            src={decideOS(round + 1)}
            alt="next field"
            width={nextFieldSize}
            height={nextFieldSize}
          />
        </div>
      </div>
      <style jsx>{`
        .tern {
          color: #fff;
          width: 100%;
        }

        .tern-text {
          border-bottom: 1px solid #00fff2;
          padding-bottom: 6px;
          margin-bottom: 6px;
        }

        .tern-number {
          padding-left: 5px;
          font-size: 20px;
        }

        .fields {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 10px;
        }

        @media screen and (min-width: 900px) {
          .tern-text {
            font-size: 20px;
            margin-bottom: 12px;
          }

          .tern-number {
            font-size: 26px;
          }
        }
      `}</style>
    </>
  );
};

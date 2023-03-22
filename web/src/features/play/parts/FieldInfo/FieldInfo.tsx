import React from 'react';
import Android from '../../../../assets/Android.png';
import Apple from '../../../../assets/Apple.png';
import Image from 'next/image';

interface FieldInfoProps {}

export const FieldInfo: React.FC<FieldInfoProps> = (props) => {
  const {} = props;

  return (
    <>
      <div className="tern">
        <div className="tern-text">Round2</div>
        <div className="fields">
          <Image src={Android} alt="current field" width={40} height={40} />
          <div>&gt;&gt;</div>
          <Image src={Apple} alt="next field" width={25} height={25} />
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

        .fields {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 10px;
        }
      `}</style>
    </>
  );
};

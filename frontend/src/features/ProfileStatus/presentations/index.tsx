import React from 'react';
import styled from './index.module.scss';

type Props = {
  name: string;
  rate: number;
};

export const ProfileStatusPresentation: React.FC<Props> = ({ name, rate }) => {
  return (
    <div className={styled.container}>
      <div className={styled.name}>{name}</div>
      <div className={styled.rate}>Rate:{rate}</div>
    </div>
  );
};

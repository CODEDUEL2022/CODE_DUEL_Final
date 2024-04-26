import React from 'react';
import styled from './index.module.scss';

type Props = {};

export const ProfileStatusPresentation: React.FC<Props> = (props) => {
  return (
    <div className={styled.container}>
      <div className={styled.name}>ゆってぃー</div>
      <div className={styled.rate}>Rate:2059</div>
    </div>
  );
};

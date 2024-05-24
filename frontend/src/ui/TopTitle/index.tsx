import React from 'react';
import styled from './index.module.scss';

type Props = {};

export const TopTitle: React.FC<Props> = (props) => {
  return (
    <div className={styled.titles}>
      <span className={styled.description}>programming card battle</span>
      <h1 className={styled.title}>CODE_DUEL</h1>
    </div>
  );
};

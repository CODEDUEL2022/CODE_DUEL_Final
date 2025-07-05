import React from 'react';
import styled from './index.module.scss';

type Props = {
  texts: string[];
};

export const Terminal: React.FC<Props> = ({ texts }) => {
  return (
    <div className={styled.container}>
      {texts.map((text) => (
        <p key={text}>&gt; {text}</p>
      ))}
    </div>
  );
};

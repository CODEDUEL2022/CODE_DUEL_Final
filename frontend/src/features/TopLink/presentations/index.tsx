import React from 'react';
import Link from 'next/link';
import styled from './index.module.scss';

type Props = {};

export const TopLinkPresentation: React.FC<Props> = (props) => {
  return (
    <Link href="/home" className={styled.link}>
      &gt; Hello, world!
    </Link>
  );
};

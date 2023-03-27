import React, { ReactNode } from 'react';
import { ArwesThemeProvider, Button } from '@arwes/core';
import { FrameCorners } from '@arwes/core/lib/FrameCorners/FrameCorners.component';
import { Animator } from '@arwes/animation';

interface ButtonProps {
  children: ReactNode;
  handleClick: () => void;
  able: boolean;
}

export const MainButton: React.FC<ButtonProps> = (props) => {
  const { children, handleClick, able } = props;

  const buttonOptions = {
    FrameComponent: FrameCorners,
    onClick: handleClick,
    disabled: !able,
  };

  return (
    <>
      {/* @ts-ignore */}
      <ArwesThemeProvider>
        {/* @ts-ignore */}
        <Animator>
          {/* @ts-ignore */}
          <Button {...buttonOptions}>{children}</Button>
        </Animator>
      </ArwesThemeProvider>
    </>
  );
};

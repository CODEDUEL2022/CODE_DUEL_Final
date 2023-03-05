import React, { ReactNode } from 'react';
import { ArwesThemeProvider, Button } from '@arwes/core';
import { FrameCorners } from '@arwes/core/lib/FrameCorners/FrameCorners.component';
import { Animator } from '@arwes/animation';

interface ButtonProps {
  children: ReactNode;
  handleClick: () => void;
}

export const MainButton: React.FC<ButtonProps> = (props) => {
  const { children, handleClick } = props;

  return (
    <>
      {/* @ts-ignore */}
      <ArwesThemeProvider>
        {/* @ts-ignore */}
        <Animator>
          {/* @ts-ignore */}
          <Button FrameComponent={FrameCorners} onClick={handleClick}>
            {children}
          </Button>
        </Animator>
      </ArwesThemeProvider>
    </>
  );
};

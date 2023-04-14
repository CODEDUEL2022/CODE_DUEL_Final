import React, { ReactNode } from 'react';
import { ArwesThemeProvider, Button } from '@arwes/core';
import { Animator } from '@arwes/animation';

interface SubButtonProps {
  children: ReactNode;
  handleClick: () => void;
}

export const SubButton: React.FC<SubButtonProps> = (props) => {
  const { children, handleClick } = props;

  const themeSettings = {
    palette: {
      primary: { main: '#fff' },
    },
  };

  return (
    <div>
      {/* @ts-ignore */}
      <ArwesThemeProvider themeSettings={themeSettings}>
        {/* @ts-ignore */}
        <Animator animator={{ animate: false }}>
          {/* @ts-ignore */}
          <Button onClick={handleClick}>
            <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
          </Button>
        </Animator>
      </ArwesThemeProvider>
    </div>
  );
};

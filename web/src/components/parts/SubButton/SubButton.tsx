import React, { ReactNode } from 'react';
import { ArwesThemeProvider, Button, Text } from '@arwes/core';

interface SubButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const SubButton: React.FC<SubButtonProps> = (props) => {
  const { children, onClick } = props;

  const themeSettings = {
    palette: {
      primary: { main: '#fff' },
    },
  };

  return (
    <div>
      <ArwesThemeProvider themeSettings={themeSettings}>
        <Button onClick={onClick} style={{ width: '130px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
        </Button>
      </ArwesThemeProvider>
    </div>
  );
};

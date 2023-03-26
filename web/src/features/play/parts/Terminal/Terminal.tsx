import React from 'react';
import { ComboType } from '../../../../libs/types/Combo';

interface TerminalProps {
  combos: Array<ComboType>;
}

export const Terminal: React.FC<TerminalProps> = (props) => {
  const { combos } = props;

  return (
    <>
      <div className="container">
        {combos.map((combo) => (
          <>
            <div>&gt; action : {combo.name}</div>
            <div>&gt; combo : {combo.combo}</div>
            <br />
          </>
        ))}
      </div>
      <style jsx>{`
        .container {
          background-color: #144f61;
          padding: 15px;
          color: #fff;
          width: 80%;
          height: 160px;
          overflow: scroll;
          text-shadow: 0 0 5px #d3fffd;
        }
      `}</style>
    </>
  );
};

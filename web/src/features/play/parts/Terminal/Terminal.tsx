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
          <div key={combo.id}>
            <div>&gt; action : {combo.name}</div>
            <div>
              &gt; combo : &#91;
              {combo.combo.map((num, index) => (
                <span key={index}>
                  {num}
                  &#044;
                </span>
              ))}
              &#93;
            </div>
            <br />
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          background-color: #144f61;
          padding: 15px;
          color: #fff;
          width: 80%;
          height: 40%;
          overflow: scroll;
          text-shadow: 0 0 5px #d3fffd;
          font-size: 14px;
        }

        @media screen and (min-width: 900px) {
          .container {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
};

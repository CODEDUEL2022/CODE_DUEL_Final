import React from 'react';
import Socket from '../../libs/socket/Socket';

export const HomePage = () => {
  const startMatching = (player_id: number) => {
    Socket.setupSocketConnection();
    Socket.matching(player_id);
  };

  return (
    <div>
      ホームです
      <button onClick={() => startMatching(1)}>aaa</button>
    </div>
  );
};

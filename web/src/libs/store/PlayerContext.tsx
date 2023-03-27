import { createContext, useState } from 'react';
import { UserType } from '../types/User';
import React from 'react';

// 参考：https://qiita.com/curry__30/items/526b45ede95cdbf2b2ee
export const UserContext = createContext(
  {} as {
    userInfo: UserType | undefined;
    setUserInfo: React.Dispatch<React.SetStateAction<UserType | undefined>>;
  }
);

export const GameIdContext = createContext(
  {} as {
    gameId: string | undefined;
    setGameId: React.Dispatch<React.SetStateAction<string | undefined>>;
  }
);

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<UserType | undefined>(undefined);
  const [gameId, setGameId] = useState<string | undefined>(undefined);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <GameIdContext.Provider value={{ gameId, setGameId }}>{children}</GameIdContext.Provider>
    </UserContext.Provider>
  );
};

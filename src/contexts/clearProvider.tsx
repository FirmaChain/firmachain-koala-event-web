import React, { useState } from 'react';

interface IClearContext {
  isClear: boolean;
  type: number;
  rewardValue: string;
  setClear: React.Dispatch<React.SetStateAction<boolean>>;
  setType: React.Dispatch<React.SetStateAction<number>>;
  setRewardValue: React.Dispatch<React.SetStateAction<string>>;
}

export const ClearContext = React.createContext<IClearContext | null>(null);

const ClearProvider = ({ children }: { children: React.ReactNode }) => {
  const [isClear, setClear] = useState(false);
  const [type, setType] = useState(0);
  const [rewardValue, setRewardValue] = useState('0');

  return (
    <ClearContext.Provider
      value={{
        isClear,
        type,
        rewardValue,
        setClear,
        setType,
        setRewardValue,
      }}
    >
      {children}
    </ClearContext.Provider>
  );
};

export default ClearProvider;

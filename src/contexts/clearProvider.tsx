import React, { useState } from 'react';

interface IClearContext {
  isClear: boolean;
  type: number;
  setClear: React.Dispatch<React.SetStateAction<boolean>>;
  setType: React.Dispatch<React.SetStateAction<number>>;
}

export const ClearContext = React.createContext<IClearContext | null>(null);

const ClearProvider = ({ children }: { children: React.ReactNode }) => {
  const [isClear, setClear] = useState(false);
  const [type, setType] = useState(0);

  return (
    <ClearContext.Provider
      value={{
        isClear,
        type,
        setClear,
        setType,
      }}
    >
      {children}
    </ClearContext.Provider>
  );
};

export default ClearProvider;

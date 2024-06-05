import React, { useState } from 'react';

interface IModalState {
  type: string | null;
  props: any;
}

interface IModalContext {
  state: IModalState;
  setState: React.Dispatch<React.SetStateAction<IModalState>>;
}

export const ModalStateContext = React.createContext<IModalContext | null>(null);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<IModalState>({
    type: null,
    props: null,
  });

  return <ModalStateContext.Provider value={{ setState, state }}>{children}</ModalStateContext.Provider>;
};

export default ModalProvider;

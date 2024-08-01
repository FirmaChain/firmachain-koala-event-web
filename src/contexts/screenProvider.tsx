import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface IScreenContext {
  isSmall: boolean;
  isMobile: boolean;
}

export const ScreenContext = React.createContext<IScreenContext | null>(null);

const ScreenProvider = ({ children }: { children: React.ReactNode }) => {
  const isSmallWidth = useMediaQuery({ query: '(max-width: 1400px)' });
  const isSmallHeight = useMediaQuery({ query: '(max-height: 750px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

  return (
    <ScreenContext.Provider value={{ isSmall: isSmallWidth || isSmallHeight, isMobile }}>
      {children}
    </ScreenContext.Provider>
  );
};

export default ScreenProvider;

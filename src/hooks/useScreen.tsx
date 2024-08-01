import { useContext } from 'react';
import { ScreenContext } from '../contexts/screenProvider';

const useScreen = () => {
  const screenConteext = useContext(ScreenContext);

  if (!screenConteext) throw new Error('context must be use inside provider');

  const { isSmall, isMobile } = screenConteext;

  return {
    isSmall,
    isMobile,
  };
};

export default useScreen;

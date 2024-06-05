import { useContext } from 'react';
import { ScreenContext } from '../contexts/screenProvider';

const useScreen = () => {
  const screenConteext = useContext(ScreenContext);

  if (!screenConteext) throw new Error('context must be use inside provider');

  const { isSmall } = screenConteext;

  return {
    isSmall,
  };
};

export default useScreen;

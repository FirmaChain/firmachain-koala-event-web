import { useContext } from 'react';
import { ClearContext } from '../contexts/clearProvider';

const useClear = () => {
  const context = useContext(ClearContext);

  if (!context) throw new Error('useClear must be used within a ClearContext');

  return {
    isClear: context.isClear,
    type: context.type,
    setClear: context.setClear,
    setType: context.setType,
  };
};

export default useClear;

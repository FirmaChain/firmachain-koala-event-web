import { useContext } from 'react';
import { ClearContext } from '../contexts/clearProvider';

const useClear = () => {
  const context = useContext(ClearContext);

  if (!context) throw new Error('useClear must be used within a ClearContext');

  return {
    isClear: context.isClear,
    type: context.type,
    rewardValue: context.rewardValue,
    setClear: context.setClear,
    setType: context.setType,
    setRewardValue: context.setRewardValue,
  };
};

export default useClear;

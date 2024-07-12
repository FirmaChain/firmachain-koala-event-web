import React, { useEffect } from 'react';

import { DimmedLayer, ClearBg1, ClearBg2, ClearBg3, TierIcon } from './styles';
import useMission from '../../hooks/useMission';
import useClear from '../../hooks/useClear';

const ClearScreen = () => {
  const { currentTier } = useMission();
  const { isClear, setClear, type } = useClear();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isClear) {
      timer = setTimeout(() => {
        setClear(false);
      }, 2000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isClear, setClear]);

  const handleDimmedLayerClick = () => {
    setClear(false);
  };

  return (
    <DimmedLayer $isLoading={isClear} onClick={() => handleDimmedLayerClick()}>
      <ClearBg1 />
      <ClearBg2 />
      <ClearBg3 $type={type} />
      <TierIcon $type={type} $tier={currentTier.order} />
    </DimmedLayer>
  );
};

export default React.memo(ClearScreen);

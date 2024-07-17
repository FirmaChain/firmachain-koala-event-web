import React, { useEffect, useState } from 'react';

import { DimmedLayer, LoadingSpinner, SpinnerImage, CurtainLeft, CurtainRight, LoadingTypo } from './styles';

const LoadingScreen = ({
  isPlayStageLoading,
  handleLoaded,
  handleEnded,
}: {
  isPlayStageLoading: boolean;
  handleLoaded: () => void;
  handleEnded: () => void;
}) => {
  const [isPlayOpen, setIsPlayOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isPlayStageLoading) {
      setIsLoading(true);
      setTimeout(() => {
        handleLoaded();
        setIsLoaded(true);
        setTimeout(() => {
          setIsPlayOpen(true);
          setIsLoaded(false);
          setTimeout(() => {
            handleEnded();
            setIsLoading(false);
            setIsPlayOpen(false);
          }, 500);
        }, 2000);
      }, 1000);
    }
  }, [isPlayStageLoading]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <DimmedLayer $isLoading={isLoading} $isPlayOpen={isPlayOpen}>
      <CurtainLeft />
      <CurtainRight />
      {isLoaded && (
        <LoadingSpinner>
          <SpinnerImage />
          <LoadingTypo>KOALA KNIGHT</LoadingTypo>
        </LoadingSpinner>
      )}
    </DimmedLayer>
  );
};

export default React.memo(LoadingScreen);

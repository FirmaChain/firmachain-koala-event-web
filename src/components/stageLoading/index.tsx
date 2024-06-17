import React, { useEffect } from 'react';

import { DimmedLayer, LoadingSpinner, SpinnerImage, CurtainLeft, CurtainRight, LoadingTypo } from './styles';

const LoadingScreen = ({
  isPlayStageLoading,
  onLoaded,
  onEnded,
}: {
  isPlayStageLoading: boolean;
  onLoaded: () => void;
  onEnded: () => void;
}) => {
  const [isPlayOpen, setIsPlayOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    if (isPlayStageLoading) {
      setIsLoading(true);
      setTimeout(() => {
        onLoaded();
        setIsLoaded(true);
        setTimeout(() => {
          setIsPlayOpen(true);
          setIsLoaded(false);
          setTimeout(() => {
            onEnded();
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

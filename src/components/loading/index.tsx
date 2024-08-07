import React from 'react';

import { DimmedLayer, LoadingSpinner, SpinnerImage, LoadingTypo } from './styles';

interface ILoadingScreen {
  isLoading: boolean;
  opacity: string;
}

const LoadingScreen = ({ isLoading, opacity }: ILoadingScreen) => (
  <DimmedLayer $isLoading={isLoading} $opacity={opacity}>
    <LoadingSpinner>
      <SpinnerImage />
      <LoadingTypo>KOALA KNIGHT</LoadingTypo>
    </LoadingSpinner>
  </DimmedLayer>
);

export default React.memo(LoadingScreen);

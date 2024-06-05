import React from 'react';

import { DimmedLayer, LoadingSpinner, SpinnerImage, LoadingTypo } from './styles';

interface ILoadingScreen {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: ILoadingScreen) => (
  <DimmedLayer $isLoading={isLoading}>
    <LoadingSpinner>
      <SpinnerImage />
      <LoadingTypo>KOALA KNIGHT</LoadingTypo>
    </LoadingSpinner>
  </DimmedLayer>
);

export default React.memo(LoadingScreen);

import React, { useEffect } from 'react';

import useWallet from '../hooks/useWallet';

import StageLoading from '../components/stageLoading';
import Header from '../layouts/header';
import Intro from '../layouts/intro';
import Footer from '../layouts/footer';

import { MainContainer } from '../styles/common';

const HomePage = () => {
  const { isLogin, logout, address } = useWallet();
  const [isPlayStageLoading, setPlayStageLoading] = React.useState(false);
  const [isOnLoaded, setOnLoaded] = React.useState(false);
  const [inOnEnded, setOnEnded] = React.useState(false);

  useEffect(() => {
    if (isLogin) {
      setOnLoaded(true);
      setOnEnded(true);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLoading = () => setPlayStageLoading(true);
  const handleOnLoaded = async () => {
    setOnLoaded(true);
  };
  const handleOnEnded = () => setOnEnded(true);
  const handleOnLogout = () => reset();

  const reset = () => {
    setPlayStageLoading(false);
    setOnLoaded(false);
    setOnEnded(false);
  };

  const shouldShowIntro = React.useMemo(() => !isOnLoaded, [isOnLoaded]);
  const shouldShowStage = React.useMemo(() => isLogin && isOnLoaded, [isLogin, isOnLoaded]);

  return (
    <MainContainer>
      <Header isLogin={shouldShowStage} handleOnLogout={handleOnLogout} />
      <StageLoading isPlayStageLoading={isPlayStageLoading} onLoaded={handleOnLoaded} onEnded={handleOnEnded} />
      {shouldShowIntro && <Intro handleLoading={handleLoading} />}
      <Footer isLogin={shouldShowStage} />
    </MainContainer>
  );
};

export default React.memo(HomePage);

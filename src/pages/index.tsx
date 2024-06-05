import React, { useEffect } from 'react';

import Header from '../layouts/header';
import Intro from '../layouts/intro';
import Footer from '../layouts/footer';

import { MainContainer } from '../styles/common';

const HomePage = () => {
  const [isOnLoaded, setOnLoaded] = React.useState(false);

  const handleLoading = () => {};
  const handleOnLogout = () => reset();

  const reset = () => {
    setOnLoaded(false);
  };

  const shouldShowIntro = React.useMemo(() => !isOnLoaded, [isOnLoaded]);

  return (
    <MainContainer>
      <Header isLogin={false} handleOnLogout={handleOnLogout} />
      {shouldShowIntro && <Intro handleLoading={handleLoading} />}
      <Footer isLogin={false} />
    </MainContainer>
  );
};

export default React.memo(HomePage);

import React, { useEffect, useState } from 'react';

import useViewport from './hooks/useViewport';
import useScreen from './hooks/useScreen';

import Homepage from './pages';
import MobileGuideLine from './layouts/mobile';
import Loading from './components/loading';
import Clear from './components/clear';
import PreloadImages from './components/preload';

import './styles/reset.css';
import './styles/normalize.css';
import theme from './styles/themes';

function App() {
  const { isSmall } = useScreen();
  const [loaded, setLoad] = useState(false);

  useViewport();

  useEffect(() => {
    setTimeout(() => setLoad(true), 1000);
  }, []);

  return (
    <React.Fragment>
      <PreloadImages images={[theme.urls.signHover, theme.urls.stakingHover, theme.urls.shopHover]} />
      {isSmall ? (
        <MobileGuideLine />
      ) : (
        <React.Fragment>
          <Loading isLoading={!loaded} />
          <Clear />
          <Homepage />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;

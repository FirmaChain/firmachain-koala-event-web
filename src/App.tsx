import React from 'react';

import useViewport from './hooks/useViewport';
import useScreen from './hooks/useScreen';

import Homepage from './pages';
import MobileGuideLine from './layouts/mobile';
import Clear from './components/clear';
import PreloadImages from './components/preload';

import './styles/reset.css';
import './styles/normalize.css';
import theme from './styles/themes';

function App() {
  const { isSmall } = useScreen();

  useViewport();

  return (
    <React.Fragment>
      <PreloadImages images={[theme.urls.signHover, theme.urls.stakingHover, theme.urls.shopHover]} />
      {isSmall ? (
        <MobileGuideLine />
      ) : (
        <React.Fragment>
          <Clear />
          <Homepage />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;

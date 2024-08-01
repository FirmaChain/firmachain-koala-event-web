import React from 'react';

import useViewport from './hooks/useViewport';

import Homepage from './pages';
import Clear from './components/clear';
import PreloadImages from './components/preload';

import './styles/reset.css';
import './styles/normalize.css';
import theme from './styles/themes';

function App() {
  useViewport();

  return (
    <React.Fragment>
      <PreloadImages images={[theme.urls.signHover, theme.urls.stakingHover, theme.urls.shopHover]} />
      <React.Fragment>
        <Clear />
        <Homepage />
      </React.Fragment>
    </React.Fragment>
  );
}

export default App;

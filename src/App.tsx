import React, { useEffect, useState } from 'react';

import useViewport from './hooks/useViewport';
import useScreen from './hooks/useScreen';

import Homepage from './pages';
import MobileGuideLine from './layouts/mobile';
import Loading from './components/loading';

import './styles/reset.css';
import './styles/normalize.css';

function App() {
  const { isSmall } = useScreen();
  const [loaded, setLoad] = useState(false);

  useViewport();

  useEffect(() => {
    setTimeout(() => setLoad(true), 1000);
  }, []);

  return (
    <React.Fragment>
      {isSmall ? (
        <MobileGuideLine />
      ) : (
        <React.Fragment>
          <Loading isLoading={!loaded} />
          <Homepage />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;

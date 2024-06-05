import React, { useEffect, useState } from 'react';

import useViewport from './hooks/useViewport';

import Homepage from './pages';
import Loading from './components/loading';

import './styles/reset.css';
import './styles/normalize.css';

function App() {
  const [loaded, setLoad] = useState(false);

  useViewport();

  useEffect(() => {
    setTimeout(() => setLoad(true), 1000);
  }, []);

  return (
    <React.Fragment>
      <Loading isLoading={!loaded} />
      <Homepage />
    </React.Fragment>
  );
}

export default App;

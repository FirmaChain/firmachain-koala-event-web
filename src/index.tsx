import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import ModalProvider from './contexts/modalProvider';
import ScreenProvider from './contexts/screenProvider';
import WalletProvider from './contexts/walletProvider';
import MissionProvider from './contexts/missionProvider';
import ClearProvider from './contexts/clearProvider';

import store from './redux/store';

import App from './App';
import Portal from './components/modal/base/portal';
import theme from './styles/themes';
import { customSnackbarStyles } from './styles/common';

const persistor = persistStore(store);
const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <ScreenProvider>
            <WalletProvider>
              <MissionProvider>
                <ClearProvider>
                  <SnackbarProvider
                    maxSnack={3}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    Components={customSnackbarStyles}
                  >
                    <Portal />
                    <App />
                  </SnackbarProvider>
                </ClearProvider>
              </MissionProvider>
            </WalletProvider>
          </ScreenProvider>
        </ModalProvider>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

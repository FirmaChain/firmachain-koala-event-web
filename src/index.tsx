import ReactDOM from 'react-dom/client';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import ModalProvider from './contexts/modalProvider';
import ScreenProvider from './contexts/screenProvider';
import WalletProvider from './contexts/walletProvider';

import store from './redux/store';

import App from './App';
import Portal from './components/modal/base/portal';
import theme from './styles/themes';

const persistor = persistStore(store);
const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <ScreenProvider>
            <WalletProvider>
              <SnackbarProvider
                maxSnack={3}
                style={{ fontSize: '1rem' }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
              >
                <Portal />
                <App />
              </SnackbarProvider>
            </WalletProvider>
          </ScreenProvider>
        </ModalProvider>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

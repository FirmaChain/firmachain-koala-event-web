import ReactDOM from 'react-dom/client';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from 'styled-components';

import ModalProvider from './contexts/modalProvider';
import ScreenProvider from './contexts/screenProvider';

import App from './App';
import theme from './styles/themes';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <ModalProvider>
      <ScreenProvider>
        <SnackbarProvider
          maxSnack={3}
          style={{ fontSize: '1rem' }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <App />
        </SnackbarProvider>
      </ScreenProvider>
    </ModalProvider>
  </ThemeProvider>
);

import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['modal'],
};

export default configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: [ReduxThunk],
  devTools: true,
});

import { configureStore } from '@reduxjs/toolkit';
import filterLangReducer from '../pages/Settings/Language/languageSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from '../pages/Settings/commonSlice/userSlice';
import authentication from '../pages/Auth/reducer/auth';
import Level from '../pages/Settings/Level/reducer/Level';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['userInfor'],
};
const persistedReducer = persistReducer(persistConfig, authentication);
const store = configureStore({
  reducer: {
    auth: persistedReducer,
    level: Level,
    filterLang: filterLangReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
export default store;

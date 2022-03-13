import { configureStore } from '@reduxjs/toolkit';
import { authentication } from '../reducer/auth';

const store = configureStore({
  reducer: {
    auth: authentication,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';

import walletReducer from './slices/walletSlice';

export default configureStore({
  reducer: {
    wallet: walletReducer,
  },
});

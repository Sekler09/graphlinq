import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isConnected: false,
};

const walletSlice = createSlice({
  initialState,
  name: 'wallet',
  reducers: {
    connectWallet(state) {
      state.isConnected = true;
    },
  },
});

export const { connectWallet } = walletSlice.actions;
export default walletSlice.reducer;

import { createAction, createReducer } from '@reduxjs/toolkit';
import { HANDLE_WALLET_ADDRESS, HANDLE_WALLET_BALANCE } from '../types';

export interface IWalletState {
  address: string;
  balance: string;
}

const initialState = {
  address: '',
  balance: '0',
};

const handleWalletAddress = createAction<string>(HANDLE_WALLET_ADDRESS);
const handleWalletBalance = createAction<string>(HANDLE_WALLET_BALANCE);

export default createReducer(initialState, (builder) => {
  builder
    .addCase(handleWalletAddress, (state, action) => {
      state.address = action.payload;
    })
    .addCase(handleWalletBalance, (state, action) => {
      state.balance = action.payload;
    });
});

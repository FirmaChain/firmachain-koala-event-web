import { HANDLE_WALLET_ADDRESS, HANDLE_WALLET_BALANCE } from '../types';

export const handleWalletAddress = (payload: string) => ({ type: HANDLE_WALLET_ADDRESS, payload });

export const handleWalletBalance = (payload: string) => ({ type: HANDLE_WALLET_BALANCE, payload });

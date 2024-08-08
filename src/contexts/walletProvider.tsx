import React, { useMemo } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FirmaSDK, FirmaUtil } from '@firmachain/firma-js';

import { rootState } from '../redux/reducers';

import { CHAIN_CONFIG } from '../config';
import { walletActions } from '../redux/action';
import { convertToFctString } from '../utils/common';

interface IWalletContext {
  isLogin: boolean;
  address: string;
  balance: string;
  setUserData: () => Promise<void>;
  logout: () => void;
}

export const WalletContext = React.createContext<IWalletContext | null>(null);

const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const firmaSDK = new FirmaSDK(CHAIN_CONFIG.FIRMACHAIN_CONFIG);
  const { address, balance } = useSelector((state: rootState) => state.wallet);

  useEffect(() => {
    address && setUserData();
  }, [address]); // eslint-disable-line react-hooks/exhaustive-deps

  const isLogin = useMemo(() => address !== '', [address]);

  const getAddress = (): string => {
    if (address === '' || address === null || address === undefined) throw new Error('INVALID WALLET');
    return address;
  };

  const setUserData = async () => {
    try {
      const userAddress = getAddress();
      if (FirmaUtil.isValidAddress(userAddress)) {
        const balance = await firmaSDK.Bank.getBalance(userAddress);
        walletActions.handleWalletBalance(convertToFctString(balance));
      } else {
        walletActions.handleWalletBalance('0');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const logout = () => {
    try {
      walletActions.handleWalletAddress('');
      walletActions.handleWalletBalance('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <WalletContext.Provider
      value={{
        isLogin,
        address,
        balance,
        setUserData,
        logout,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;

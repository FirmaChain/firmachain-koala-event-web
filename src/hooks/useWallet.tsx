import { useContext } from 'react';
import { WalletContext } from '../contexts/walletProvider';

const useWallet = () => {
  const context = useContext(WalletContext);

  if (!context) throw new Error('useWallet must be used within a WalletContext');

  return {
    isLogin: context.isLogin,
    address: context.address,
    balance: context.balance,
    setUserData: context.setUserData,
    logout: context.logout,
  };
};

export default useWallet;

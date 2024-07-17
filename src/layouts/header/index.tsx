import React, { useEffect, useMemo, useState } from 'react';
import { useSnackbar } from 'notistack';

import useWallet from '../../hooks/useWallet';
import useMission from '../../hooks/useMission';
import { copyToClipboard, createTextEllipsis } from '../../utils/common';
import { FIRMACHAIN_URL, FIRMASTATION_URL, KOALA_KNIGHTS_URL } from '../../constants/common';

import theme from '../../styles/themes';
import {
  AddressTypo,
  AddressWrapper,
  DailyLabelTypo,
  DailyValueTypo,
  DailyWrapper,
  FCTIcon,
  HeaderContainer,
  HeaderLogoImage,
  HeaderWrapper,
  KOAIcon,
  RightWrapper,
  TimerIcon,
  TimerWrapper,
  UserInfoWrapper,
  AddressInfo,
  UserCharacter,
  AddressTypo2,
  CopyIcon,
  TierLabel,
  MenuWrapper,
  MenuItem,
  MenueLabel,
  MenuTypo,
  MenuValue,
  CoinList,
  CoinItem,
  CoinLabel,
  CoinIcon,
  CoinTypo,
  CoinValue,
  MenuLabel,
  MenuIcon,
  TierIcon,
  TierTypo,
  TimerText,
  TimerValue,
  EcosystemWrapper,
  EcosystemIcon,
  EcosystemList,
  EcosystemItem,
  EcosystemExternal,
  EcosystemDivider,
} from './styles';

const Header = ({ isLogin, handleLogout }: { isLogin: boolean; handleLogout: () => void }) => {
  const { address, logout } = useWallet();
  const { currentTier, userData } = useMission();
  const { enqueueSnackbar } = useSnackbar();
  const [remainingTime, setRemainingTime] = useState('00h 00m 00s');

  const dailyFloatingCount = useMemo(() => {
    return userData.floating.count ? userData.floating.count : 0;
  }, [userData]);

  const handleLogoutHeader = () => {
    logout();
    handleLogout();
  };

  const handleClipboard = () => {
    copyToClipboard(address);

    enqueueSnackbar('Copied', {
      variant: 'success',
      autoHideDuration: 1000,
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const nextDate = new Date(userData.floating.nextDate);
      const timeDiff = nextDate.getTime() - now.getTime();

      if (timeDiff > 0) {
        const hours = Math.floor(timeDiff / (1000 * 60 * 60))
          .toString()
          .padStart(2, '0');
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
          .toString()
          .padStart(2, '0');
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)
          .toString()
          .padStart(2, '0');
        setRemainingTime(`${hours}h ${minutes}m ${seconds}s`);
      } else {
        setRemainingTime('00h 00m 00s');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [userData.floating.nextDate]);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLogoImage src={theme.urls.headerLogo} />
        {isLogin && (
          <RightWrapper>
            <TimerWrapper>
              <TimerIcon />
              <TimerText>
                <TimerValue>{remainingTime}</TimerValue>
              </TimerText>
            </TimerWrapper>
            <DailyWrapper>
              <KOAIcon />
              <DailyLabelTypo>Lucky Coin</DailyLabelTypo>

              <DailyValueTypo>{dailyFloatingCount}</DailyValueTypo>
            </DailyWrapper>
            <AddressWrapper>
              <FCTIcon src={theme.urls.headerFCT} />
              <AddressTypo>{createTextEllipsis(address, 8, 8)}</AddressTypo>

              <UserInfoWrapper>
                <AddressInfo onClick={() => handleClipboard()}>
                  <UserCharacter />
                  <AddressTypo2>{createTextEllipsis(address, 6, 6)}</AddressTypo2>
                  <CopyIcon src={theme.urls.copy} />
                </AddressInfo>

                <TierLabel $tier={currentTier.order}>
                  <TierIcon />
                  <TierTypo>{currentTier.name}</TierTypo>
                </TierLabel>

                <MenuWrapper>
                  <MenuItem>
                    <MenueLabel>
                      <MenuTypo>My Point</MenuTypo>
                    </MenueLabel>
                    <MenuValue>0</MenuValue>
                  </MenuItem>
                  <MenuItem>
                    <CoinList>
                      <CoinItem>
                        <CoinLabel>
                          <CoinIcon $src={theme.urls.koa} />
                          <CoinTypo>KOA</CoinTypo>
                        </CoinLabel>
                        <CoinValue>0</CoinValue>
                      </CoinItem>
                      <CoinItem>
                        <CoinLabel>
                          <CoinIcon $src={theme.urls.fct} />
                          <CoinTypo>FCT</CoinTypo>
                        </CoinLabel>
                        <CoinValue>0</CoinValue>
                      </CoinItem>
                    </CoinList>
                  </MenuItem>
                  <MenuItem onClick={() => handleLogoutHeader()}>
                    <MenuLabel>
                      <MenuIcon src={theme.urls.logout} />
                      <MenuTypo>Logout</MenuTypo>
                    </MenuLabel>
                  </MenuItem>
                </MenuWrapper>
              </UserInfoWrapper>
            </AddressWrapper>
          </RightWrapper>
        )}
        {isLogin === false && (
          <EcosystemWrapper>
            <EcosystemIcon src={theme.urls.headerEcosystem} />
            <EcosystemList>
              <EcosystemItem onClick={() => window.open(FIRMACHAIN_URL)}>
                FIRMACHAIN <EcosystemExternal src={theme.urls.external} />
              </EcosystemItem>
              <EcosystemDivider />
              <EcosystemItem onClick={() => window.open(FIRMASTATION_URL)}>
                Firmastation <EcosystemExternal src={theme.urls.external} />
              </EcosystemItem>
              <EcosystemDivider />
              <EcosystemItem onClick={() => window.open(KOALA_KNIGHTS_URL)}>
                Koala knights <EcosystemExternal src={theme.urls.external} />
              </EcosystemItem>
            </EcosystemList>
          </EcosystemWrapper>
        )}
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default React.memo(Header);

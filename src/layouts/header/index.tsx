import React, { useState } from 'react';
import { useSnackbar } from 'notistack';

import useWallet from '../../hooks/useWallet';
import { copyToClipboard, createTextEllipsis } from '../../utils/common';

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
  TimerLabel,
  TimerValue,
} from './styles';

const Header = ({ isLogin, handleOnLogout }: { isLogin: boolean; handleOnLogout: () => void }) => {
  const { address, logout } = useWallet();
  const { enqueueSnackbar } = useSnackbar();
  const [currentTier, setCurrentTier] = useState(0);

  const handleLogout = () => {
    logout();
    handleOnLogout();
  };

  const handleClipboard = () => {
    copyToClipboard(address);

    enqueueSnackbar('Copied', {
      variant: 'success',
      autoHideDuration: 1000,
    });
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLogoImage />
        {isLogin && (
          <RightWrapper>
            <TimerWrapper>
              <TimerIcon />
              <TimerText>
                <TimerLabel>Daily ends in</TimerLabel>
                <TimerValue>23h 59m 59s</TimerValue>
              </TimerText>
            </TimerWrapper>
            <DailyWrapper>
              <KOAIcon />
              <DailyLabelTypo>Daily Check-In</DailyLabelTypo>
              <DailyValueTypo>0</DailyValueTypo>
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

                <TierLabel $tier={currentTier}>
                  <TierIcon />
                  <TierTypo>Beginner</TierTypo>
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
                        <CoinValue>1,000.00</CoinValue>
                      </CoinItem>
                      <CoinItem>
                        <CoinLabel>
                          <CoinIcon $src={theme.urls.fct} />
                          <CoinTypo>FCT</CoinTypo>
                        </CoinLabel>
                        <CoinValue>1,000.00</CoinValue>
                      </CoinItem>
                    </CoinList>
                  </MenuItem>
                  <MenuItem onClick={() => handleLogout()}>
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
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default React.memo(Header);

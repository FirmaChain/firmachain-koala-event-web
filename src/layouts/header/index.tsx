import React, { useMemo } from 'react';
import { useSnackbar } from 'notistack';

import useWallet from '../../hooks/useWallet';
import { copyToClipboard, createTextEllipsis } from '../../utils/common';
import { ITier, IUserData } from '../../contexts/missionProvider';
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
  TimerLabel,
  TimerValue,
  EcosystemWrapper,
  EcosystemIcon,
  EcosystemList,
  EcosystemItem,
  EcosystemExternal,
  EcosystemDivider,
} from './styles';

const Header = ({
  isLogin,
  tierList,
  userData,
  handleLogout,
}: {
  isLogin: boolean;
  tierList: ITier[];
  userData: IUserData;
  handleLogout: () => void;
}) => {
  const { address, logout } = useWallet();
  const { enqueueSnackbar } = useSnackbar();

  const currentTier = useMemo(() => {
    const tier = tierList.reduceRight<ITier | undefined>((found, tier) => {
      if (!found && tier.value <= userData.currentMissionStep) {
        return tier;
      }
      return found;
    }, undefined);

    if (!tier) return { order: 0, name: 'Beginner', value: 0 };

    return tier;
  }, [tierList, userData]);

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

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLogoImage src={theme.urls.headerLogo} />
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

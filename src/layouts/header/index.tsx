import React from 'react';

import { createTextEllipsis } from '../../utils/common';

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
  TimerText,
  TimerLabel,
  TimerValue,
} from './styles';

const Header = ({ isLogin, handleOnLogout }: { isLogin: boolean; handleOnLogout: () => void }) => {
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
              <AddressTypo>{createTextEllipsis('address', 8, 8)}</AddressTypo>
            </AddressWrapper>
          </RightWrapper>
        )}
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default React.memo(Header);

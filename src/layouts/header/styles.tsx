import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const HeaderContainer = styled.header`
  z-index: 20;
  width: 100%;
  height: ${({ theme }) => theme.sizes.headerHeight};
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  padding: 0 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogoImage = styled.div`
  width: 158px;
  height: 35px;
  background-image: url('${({ theme }) => theme.urls.headerLogo}');
  background-repeat: no-repeat;
  background-size: contain;
`;

export const RightWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const TimerWrapper = styled.div`
  height: 46px;
  line-height: 20px;
  display: flex;
  padding: 12px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 2px solid rgba(54, 60, 96, 0.32);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
  pointer-events: auto;

  transition: all 0.3s ease-out;

  &:hover {
    & > div:last-child {
      display: flex;
    }
  }
`;

export const TimerIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-top: 1px;
  background-image: url('${({ theme }) => theme.urls.timer}');
  background-repeat: no-repeat;
  background-size: contain;
`;

export const DailyWrapper = styled.div`
  height: 46px;
  line-height: 20px;
  gap: 8px;
  display: flex;
  padding: 12px 18px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 2px solid rgba(54, 60, 96, 0.32);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
  pointer-events: auto;
`;

export const DailyLabelTypo = styled.div`
  line-height: 20px;
  margin-top: 2px;
  color: var(--Blue-900, #363c60);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

export const DailyValueTypo = styled.div`
  line-height: 20px;
  color: rgba(54, 60, 96, 0.6);
  text-align: right;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

export const AddressWrapper = styled.div`
  position: relative;
  height: 46px;
  line-height: 20px;
  gap: 10px;
  display: flex;
  padding: 12px 18px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 2px solid #ffc700;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  pointer-events: auto;

  &:hover {
    & > div:last-child {
      max-height: 500px;
      padding: 16px 15px 20px 15px;
    }
  }
`;

export const AddressTypo = styled.div`
  line-height: 20px;
  margin-top: 2px;
  text-align: center;
  font-family: Poppins;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-style: normal;
  font-weight: 600;
  background: linear-gradient(90deg, #ffc700 -21.18%, #f4763b 45.39%, #fa5c12 99.87%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const KOAIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-top: 1px;
  background-image: url('${({ theme }) => theme.urls.koa}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const FCTIcon = styled(ReactSVG)`
  width: 20px;
  height: 20px;
  div {
    line-height: 0;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const UserInfoWrapper = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  max-height: 0;
  padding: 0 15px 0 15px;
  overflow: hidden;
  display: flex;
  transition: max-height 0.3s ease-out, padding 0.2s ease-out;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.16);
`;

export const AddressInfo = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  padding: 4px 12px 4px 6px;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background: rgba(251, 176, 59, 0.16);
`;

export const UserCharacter = styled.div`
  width: 34px;
  height: 34px;
  transform: scaleX(-1);
  margin-top: -1px;
  background-image: url('${({ theme }) => theme.urls.character10}');
  background-repeat: no-repeat;
  background-size: contain;
`;

export const AddressTypo2 = styled.div`
  color: var(--Gray-Gray-800, #383838);
  flex: 1;
  text-align: center;
  font-family: Poppins;
  text-align: left;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

export const CopyIcon = styled(ReactSVG)`
  cursor: pointer;

  div {
    line-height: 0;
  }
  svg {
    width: 12px;
    height: 12px;
  }
`;

const tierColors = ['#ACACAC', '#DB6B40', '#909090', '#FEBB03', '#5E8FB1', '#048AFA'];

export const TierLabel = styled.div<{ $tier: number }>`
  display: flex;
  padding: 4px 8px;
  align-items: center;
  gap: 4px;
  margin-bottom: -12px;
  border-radius: 100px;
  border: 1px solid ${({ $tier }) => tierColors[$tier]};
  background: #fff;

  & > div:first-child {
    ${({ theme, $tier }) =>
      $tier === 0 ? 'display:none' : `background-image: url('${theme.urls.tierList[$tier - 1]}');`}
  }

  & > div:last-child {
    ${({ $tier }) => `color:${tierColors[$tier]};`}
  }
`;

export const TierIcon = styled.div`
  width: 12px;
  height: 12px;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const TierTypo = styled.div`
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 13.2px */
`;

export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const MenuItem = styled.div`
  width: 100%;
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ededed;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
    cursor: pointer;
  }
`;

export const MenueLabel = styled.div``;

export const MenuTypo = styled.div`
  color: #535353;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

export const MenuValue = styled.div`
  color: #acacac;
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

export const CoinList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CoinItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CoinLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CoinIcon = styled.div<{ $src: string }>`
  width: 20px;
  height: 20px;
  margin-top: -1px;
  background-image: url('${({ $src }) => $src}');
  background-repeat: no-repeat;
  background-size: contain;
`;

export const CoinTypo = styled.div`
  color: #535353;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.12px;
`;

export const CoinValue = styled.div`
  color: #535353;
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

export const MenuLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MenuIcon = styled(ReactSVG)`
  width: 20px;
  height: 20px;

  div {
    line-height: 0;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const TimerText = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-left: 5px;
`;

export const TimerLabel = styled.div`
  color: var(--Blue-900, #363c60);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-top: 1px;
`;

export const TimerValue = styled.div`
  color: var(--Gray-Gray-800, #383838);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

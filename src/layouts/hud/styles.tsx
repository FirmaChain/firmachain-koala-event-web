import styled from 'styled-components';

export const SideMenuHUDWrapper = styled.div`
  z-index: 12;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  position: fixed;
  bottom: 34px;
  left: 60px;

  @media screen and (min-width: ${({ theme }) => theme.sizes.maxWidth}) {
    left: calc(50% - (${({ theme }) => theme.sizes.maxWidth} / 2) + 60px);
  }
`;

export const SideMenuItem = styled.div`
  width: 90px;
  height: 90px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const SideMenuItemBoxImage = styled.div`
  position: absolute;
  width: 90px;
  height: 90px;
  background-image: url('${({ theme }) => theme.urls.sideHudBox}');
  background-repeat: no-repeat;
  background-size: contain;
`;

export const SideMenuItemMissionImage = styled.div`
  z-index: 3;
  width: 53px;
  height: 42px;
  background-image: url('${({ theme }) => theme.urls.missionIcon}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const SideMenuItemAchieveImage = styled.div`
  z-index: 3;
  width: 48px;
  height: 46px;
  background-image: url('${({ theme }) => theme.urls.achieveIcon}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const AchievementHUDWrapper = styled.div`
  z-index: 12;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  position: fixed;
  bottom: 20px;
  right: 55px;

  @media screen and (min-width: ${({ theme }) => theme.sizes.maxWidth}) {
    right: calc(50% - (${({ theme }) => theme.sizes.maxWidth} / 2) + 55px);
  }
`;

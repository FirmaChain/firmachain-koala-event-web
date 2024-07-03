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

export const SideMenuMessageBox2 = styled.div`
  display: none;
  position: absolute;
  right: 70px;
  top: 7px;
  z-index: 15;
  height: 51px;
  cursor: pointer;
  filter: drop-shadow(3px 3px 2px #333333aa); /*그림자*/

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    top: 2px;
    right: 60px;
  }
`;

export const SideMenuMessageBoxLeft2 = styled.div`
  width: 11px;
  transform: scaleX(-1);
  background-image: url('${({ theme }) => theme.urls.hudHoverRight}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const SideMenuMessageBoxRight2 = styled.div`
  width: 22px;
  transform: scaleX(-1);

  background-image: url('${({ theme }) => theme.urls.hudHoverLeft}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const SideMenuMessageBoxCenter2 = styled.div`
  flex: 1;
  margin-left: -1px;
  margin-right: -1px;
  padding: 0 10px;
  padding-bottom: 1px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  color: #171717;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.16px;

  background-image: url('${({ theme }) => theme.urls.hudHoverCenter}');
  background-repeat: repeat no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const SideMenuMessageBox = styled.div`
  display: none;
  position: absolute;
  left: 100px;
  z-index: 15;
  height: 51px;
  cursor: pointer;
  filter: drop-shadow(3px 3px 2px #333333aa); /*그림자*/
`;

export const SideMenuMessageBoxLeft = styled.div`
  width: 22px;

  background-image: url('${({ theme }) => theme.urls.hudHoverLeft}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const SideMenuMessageBoxRight = styled.div`
  width: 11px;

  background-image: url('${({ theme }) => theme.urls.hudHoverRight}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const SideMenuMessageBoxCenter = styled.div`
  flex: 1;
  margin-left: -1px;
  margin-right: -1px;
  padding: 0 10px;
  padding-bottom: 1px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  color: #171717;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.16px;

  background-image: url('${({ theme }) => theme.urls.hudHoverCenter}');
  background-repeat: repeat no-repeat;
  background-size: contain;
  image-rendering: pixelated;
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

  &:hover {
    & > ${SideMenuMessageBox} {
      display: flex;
    }
  }
`;

export const SideMenuItemBoxImage = styled.div`
  position: absolute;
  width: 90px;
  height: 90px;
  background-image: url('${({ theme }) => theme.urls.sideHudBox}');
  background-repeat: no-repeat;
  background-size: contain;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(90px * 0.9);
    height: calc(90px * 0.9);
  }
`;

export const SideMenuItemMissionImage = styled.div`
  z-index: 3;
  width: 53px;
  height: 42px;
  background-image: url('${({ theme }) => theme.urls.missionIcon}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(53px * 0.9);
    height: calc(42px * 0.9);
  }
`;

export const SideMenuItemAchieveImage = styled.div`
  z-index: 3;
  width: 48px;
  height: 46px;
  background-image: url('${({ theme }) => theme.urls.achieveIcon}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(48px * 0.9);
    height: calc(46px * 0.9);
  }
`;

export const TierHUDWrapper = styled.div`
  z-index: 12;
  position: relative;
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

export const TierBg = styled.div`
  width: 90px;
  height: 696px;
  background-image: url('${({ theme }) => theme.urls.tierBg}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(90px * 0.8);
    height: calc(696px * 0.8);
  }
`;

export const TierCoin = styled.div`
  width: 90px;
  height: 90px;
  position: absolute;
  bottom: 2px;
  left: calc(50% - 45px);
  background-image: url('${({ theme }) => theme.urls.tierCoin}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(90px * 0.8);
    height: calc(90px * 0.8);
    left: calc(50% - 36px);
  }
`;

export const TierIcon = styled.div<{ $index: number; $active: boolean }>`
  ${({ $active }) => ($active ? 'display:flex' : 'display:none;')}
  z-index: 13;
  position: absolute;
  bottom: calc(${({ $index }) => `124px * ${$index}`} + 140px);
  left: calc(50% - 30px);
  width: 60px;
  height: 60px;
  background-image: url('${({ theme, $index }) => theme.urls.tierList[$index]}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(60px * 0.8);
    height: calc(60px * 0.8);
    left: calc(50% - (30px * 0.8));
    bottom: calc(${({ $index }) => `124px * 0.8 * ${$index}`} + (140px * 0.8));
  }

  &:hover {
    & > ${SideMenuMessageBox2} {
      display: flex;
    }
  }
`;

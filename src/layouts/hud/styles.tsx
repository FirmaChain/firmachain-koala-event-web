import styled from 'styled-components';

export const SideMenuHUDWrapper = styled.div`
  z-index: 12;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  position: fixed;
  bottom: 70px;
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
    top: 0px;
    right: 54px;
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
  width: calc(90px * 0.9);
  height: calc(90px * 0.9);
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
  width: calc(90px * 0.9);
  height: calc(90px * 0.9);
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
  width: calc(53px * 0.9);
  height: calc(42px * 0.9);
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
  width: calc(48px * 0.9);
  height: calc(46px * 0.9);
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
  position: fixed;
  right: 45px;
  width: 81px;
  height: 610px;

  top: calc(50% + 37px);
  transform: translateY(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaQHDWidth}) {
    right: calc(50% - (${({ theme }) => theme.sizes.maxWidth} / 2) + 40px);
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    height: 540px;
  }
`;

export const TierGauge = styled.div`
  position: absolute;
  bottom: -5px;
  display: flex;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    bottom: -5px;
  }
`;

export const TierBg = styled.div`
  z-index: 13;
  width: calc(38px * 0.9);
  height: calc(594px * 0.9);
  margin-bottom: 50px;
  background-image: url('${({ theme }) => theme.urls.tierBg}');
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(38px * 0.8);
    height: calc(594px * 0.8);
  }
`;

export const TierActiveBg = styled.div<{ $fillPercent: number }>`
  z-index: 14;
  position: absolute;
  bottom: 0;
  width: calc(38px * 0.9);
  height: calc(594px * 0.9);
  margin-bottom: 50px;
  background-image: url('${({ theme }) => theme.urls.tierBgActive}');
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;

  clip-path: inset(${({ $fillPercent }) => 100 - $fillPercent}% 0 0 0);

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(38px * 0.8);
    height: calc(594px * 0.8);
  }
`;

export const TierCoin = styled.div`
  z-index: 15;
  width: calc(90px * 0.9);
  height: calc(90px * 0.9);
  position: absolute;
  bottom: 3px;
  left: calc(50% - 40px);
  background-image: url('${({ theme }) => theme.urls.tierCoin}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(90px * 0.8);
    height: calc(90px * 0.8);
    left: calc(50% - 35px);
    bottom: 8px;
  }
`;

export const TierIcon = styled.div<{ $index: number; $active: boolean }>`
  z-index: 16;
  display: flex;
  position: absolute;
  bottom: calc(${({ $index }) => `110px * ${$index}`} + 120px);
  left: calc(50% - 28px);
  width: 55px;
  height: 55px;
  background-image: url('${({ theme, $active, $index }) =>
    $active ? theme.urls.tierList[$index] : `${theme.urls.tierList[$index].split('.')[0]}_disable.png`}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(55px * 0.8);
    height: calc(55px * 0.8);
    left: calc(50% - (28px * 0.8));
    bottom: calc(${({ $index }) => `120px * 0.8 * ${$index}`} + (150px * 0.8));
  }

  &:hover {
    & > ${SideMenuMessageBox2} {
      display: flex;
    }
  }
`;

export const UpButton = styled.div<{ $active: boolean }>`
  z-index: 16;
  position: absolute;
  bottom: 0;
  width: calc(60px * 0.9);
  height: calc(65px * 0.9);
  background-image: url('${({ theme }) => theme.urls.up}');
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  image-rendering: pixelated;

  ${({ $active }) => ($active ? 'cursor: pointer;' : 'opacity:0.5;')}

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(60px * 0.8);
    height: calc(65px * 0.8);
  }
`;

export const SideMenuMobile = styled.div<{ $isShow: boolean }>`
  position: fixed;
  right: 20px;
  bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  z-index: 10;

  ${({ $isShow }) =>
    $isShow &&
    `
    & > div:last-child {
      max-height: 500px;
      padding: 16px 15px 45px 15px;
    }
  `}
`;

export const SideMenuIconMobile = styled.div`
  width: 60px;
  height: 66px;
  z-index: 3;
  cursor: pointer;
  background-image: url('${({ theme }) => theme.urls.hudIconMobile}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  filter: drop-shadow(0px 4px 1px rgba(0, 0, 0, 0.3));
`;

export const SideMenuMobileList = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 35px;
  right: 0;
  width: 100%;

  max-height: 0;
  padding: 0;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  transition: max-height 0.3s ease-out, padding 0.2s ease-out;

  border-radius: 100px 100px 0px 0px;
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.16);
`;

export const SideMenuMobileItem = styled.div<{ $disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ $disabled }) => $disabled && `filter: grayscale(100%); opacity: 0.5;`}
`;

export const SideMenuIcon = styled.div<{ $src: string }>`
  width: 40px;
  height: 40px;
  background-image: url('${({ $src }) => $src}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const SideMenuTypo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #171717;
  text-align: center;
  font-size: 10px;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.4px;
`;

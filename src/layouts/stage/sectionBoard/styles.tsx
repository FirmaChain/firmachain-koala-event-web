import { ReactSVG } from 'react-svg';
import styled, { css, keyframes } from 'styled-components';

export const jumpAnim = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
`;

const spawnAnim = (flip: boolean) => keyframes`
  0% {
    transform: ${flip ? 'scaleX(-1) scale(0.1)' : 'scale(0.1)'};
  }
  100% {
    transform: ${flip ? 'scaleX(-1) scale(1)' : 'scale(1)'};
  }
`;

const showAnim = () => keyframes`
  0% {
    transform: scale(0.1);
    transform-origin: bottom;
  }
  100% {
    transform: scale(1);
    transform-origin: bottom;
  }
`;

export const Container = styled.div`
  z-index: 2;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 3400px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackgroundGrass = styled.div`
  width: 100%;
  height: 3400px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-image: url('${({ theme }) => theme.urls.grass}');
  background-repeat: repeat;
  background-position: top center;
  background-size: contain;
  background-color: #a9bb42;
`;

export const BackgroundRoad = styled.div`
  width: 80%;
  height: calc(4014px * 0.8);
  position: absolute;
  top: 0;
  background-image: url('${({ theme }) => theme.urls.road}');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
`;

export const BackgroundMobileWrapper = styled.div`
  width: 100%;
  height: 3100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackgroundMobileGrass = styled.div`
  width: 100%;
  height: 3100px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-image: url('${({ theme }) => theme.urls.grassMobile}');
  background-repeat: repeat;
  background-position: top center;
  background-size: contain;
  background-color: #a9bb42;
`;

export const BackgroundMobileRoad = styled.div`
  width: 45%;
  min-width: 200px;
  height: calc(3010px);
  position: absolute;
  top: 0;
  background-image: url('${({ theme }) => theme.urls.roadMobile}');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
`;

export const CharacterWrapper = styled.div<{ $xOffset: number; $yOffset: number; $flip: boolean; $animate: boolean }>`
  width: calc(200px * 0.8);
  height: calc(200px * 0.8);
  pointer-events: auto;
  cursor: pointer;
  position: absolute;
  display: ${({ $animate }) => ($animate ? 'flex' : 'none')};

  top: calc(${({ $yOffset }) => $yOffset * (208 * 0.8)}px - 35px);
  left: calc(50% - 162px / 2 + ${({ $xOffset }) => $xOffset * (285 * 0.8)}px);

  transform: ${({ $flip }) => ($flip ? 'scaleX(-1)' : 'scaleX(1)')};
  transition: top 0.4s ease, left 0.4s ease;
  z-index: 10;
  ${({ $animate, $flip }) =>
    $animate &&
    css`
      animation: ${spawnAnim($flip)} 0.5s forwards;
    `}
`;

export const CharacterImage = styled.div<{ $animate: boolean; $isRun: boolean }>`
  width: calc(200px * 0.8);
  height: calc(200px * 0.8);
  background-image: url('${({ theme, $isRun }) => ($isRun ? theme.urls.character2 : theme.urls.character1)}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${jumpAnim} 0.5s forwards;
    `}
`;

export const CharacterMobileWrapper = styled.div<{
  $xOffset: number;
  $yOffset: number;
  $flip: boolean;
  $animate: boolean;
}>`
  width: calc(106px);
  height: calc(106px);
  pointer-events: auto;
  cursor: pointer;
  position: absolute;
  display: ${({ $animate }) => ($animate ? 'flex' : 'none')};

  top: calc(${({ $yOffset }) => $yOffset * 110}px - 45px);
  left: calc(50% - 106px / 2 + ${({ $xOffset }) => $xOffset * 0}px);

  transform: ${({ $flip }) => ($flip ? 'scaleX(-1)' : 'scaleX(1)')};
  transition: top 0.4s ease, left 0.4s ease;
  z-index: 10;
  ${({ $animate, $flip }) =>
    $animate &&
    css`
      animation: ${spawnAnim($flip)} 0.5s forwards;
    `}
`;

export const CharacterMobileImage = styled.div<{ $animate: boolean; $isRun: boolean }>`
  width: calc(106px);
  height: calc(106px);
  background-image: url('${({ theme, $isRun }) => ($isRun ? theme.urls.character2 : theme.urls.character1)}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${jumpAnim} 0.5s forwards;
    `}
`;

export const Fance = styled.div`
  width: 100%;
  height: calc(12px * 0.8);
  z-index: 2;
  position: absolute;
  top: -6px;
  left: 0;
  background-image: url('${({ theme }) => theme.urls.fance}');
  background-repeat: repeat;
  background-position: top center;
  background-size: contain;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    background-size: cover;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 3;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  height: calc(3690px * 0.8);
`;

export const MissionMessageBox = styled.div<{ $xOffset: number; $yOffset: number; $show: boolean }>`
  z-index: 50;
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;

  top: calc(${({ $yOffset }) => $yOffset * (208 * 0.8)}px - 300px);
  left: calc(50% + ${({ $xOffset }) => $xOffset * (285 * 0.8)}px - 230px);

  width: calc(574px * 0.8);

  ${({ $show }) =>
    $show &&
    css`
      animation: ${showAnim} 0.5s forwards;
    `}
`;

export const MissionMessageBoxMobile = styled.div<{
  $xOffset: number;
  $yOffset: number;
  $show: boolean;
  $isGoal: boolean;
}>`
  z-index: 50;
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;

  top: calc(${({ $yOffset }) => $yOffset * 110}px - 105px);
  left: calc(50% - 31px);

  width: 62px;
  height: 62px;

  background-image: url('${({ theme, $isGoal }) =>
    $isGoal ? theme.urls.messageBoxGoalMobile : theme.urls.messageBoxMobile}');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;

  ${({ $show }) =>
    $show &&
    css`
      animation: ${showAnim} 0.5s forwards;
    `}
`;

export const MissionMessageBoxTop = styled.div`
  width: 100%;
  height: calc(30px * 0.8);
  background-image: url('${({ theme }) => theme.urls.messageBoxTop}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const MissionMessageBoxMiddle = styled.div`
  width: 100%;
  display: flex;
  margin-top: -1px;
  margin-bottom: -1px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0 20px 0;
  background-image: url('${({ theme }) => theme.urls.messageBoxMiddle}');
  background-repeat: repeat;
  background-size: contain;
`;

export const MissionMessageBoxBottom = styled.div`
  width: 100%;
  height: calc(55px * 0.8);
  background-image: url('${({ theme }) => theme.urls.messageBoxBottom}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const MissionLabel = styled.div`
  display: flex;
  padding: 3px 14px 3px 11px;
  align-items: center;
  gap: 6px;
  border-radius: 100px;
  background: #ff6d3a;
  margin-bottom: 14px;
`;

export const MissionLabelIcon = styled(ReactSVG)`
  width: calc(19px * 0.9);
  height: calc(18px * 0.9);
  div {
    line-height: 0;
    svg {
      width: calc(19px * 0.9);
      height: calc(18px * 0.9);
    }
  }
`;

export const MissionLabelTypo = styled.div`
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.18px;
`;

export const MissionTitleTypo = styled.div`
  color: #171717;
  text-align: center;
  font-family: Poppins;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.28px;
  margin-bottom: 10px;
`;

export const MissionDescriptionTypo = styled.div`
  color: #707070;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.18px;
  margin-bottom: 24px;
`;

export const PrimaryButton = styled.div`
  width: auto;
  min-width: calc(180px * 0.8);
  height: calc(48px * 0.8);
  display: flex;
  cursor: pointer;
`;

export const ButtonLeft = styled.div`
  width: calc(50px * 0.8);
  height: 100%;

  background-image: url('${({ theme }) => theme.urls.buttonLeft}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const ButtonRight = styled.div`
  width: calc(50px * 0.8);
  height: 100%;

  background-image: url('${({ theme }) => theme.urls.buttonRight}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const ButtonCenter = styled.div`
  width: 100%;
  flex: 1;
  margin-left: -2px;
  margin-right: -2px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;
  text-align: center;
  font-family: 'Press Start 2P';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.15px;
  text-transform: uppercase;

  background-image: url('${({ theme }) => theme.urls.buttonCenter}');
  background-repeat: repeat no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const StageStone = styled.div<{
  $active: boolean;
  $xOffset: number;
  $yOffset: number;
  $tier: { enable: string; disable: string } | null;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 52px;
  padding-top: 8px;
  padding-left: 2px;
  text-shadow: #999 0px -3px;

  color: ${({ $active }) => ($active ? '#f2f2f2' : '#d8d8d8')};
  text-align: center;
  font-family: 'Press Start 2P';
  font-size: 30px;
  font-weight: 400;

  position: absolute;
  top: calc((85px * 0.8) + ${({ $yOffset }) => $yOffset * (208 * 0.8)}px);
  left: calc(50% - (165px * 0.8) / 2 + ${({ $xOffset }) => $xOffset * (285 * 0.8)}px);
  width: calc(164px * 0.8);
  height: calc(143px * 0.8);
  background-image: url('${({ theme, $active, $tier }) =>
    $active ? ($tier ? $tier.enable : theme.urls.stageEnable) : $tier ? $tier.disable : theme.urls.stageDisable}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const StageStoneMobile = styled.div<{
  $active: boolean;
  $xOffset: number;
  $yOffset: number;
  $tier: { enable: string; disable: string } | null;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  padding-top: 8px;
  padding-left: 2px;
  text-shadow: #999 0px -2px;

  color: ${({ $active }) => ($active ? '#f2f2f2' : '#d8d8d8')};
  text-align: center;
  font-family: 'Press Start 2P';
  font-size: 20px;
  font-weight: 400;

  position: absolute;
  top: calc((25px) + ${({ $yOffset }) => $yOffset * 110}px);
  left: calc(50% - (82px) / 2 + ${({ $xOffset }) => $xOffset * 0}px);
  width: calc(82px);
  height: calc(72px);
  background-image: url('${({ theme, $active, $tier }) =>
    $active ? ($tier ? $tier.enable : theme.urls.stageEnable) : $tier ? $tier.disable : theme.urls.stageDisable}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const StageStoneGoal = styled.div<{
  $xOffset: number;
  $yOffset: number;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 52px;
  padding-top: 8px;
  padding-left: 2px;
  text-shadow: #999 0px -3px;
  z-index: 3;

  position: absolute;
  top: calc((85px * 0.8) + ${({ $yOffset }) => $yOffset * (208 * 0.8)}px - 35px);
  left: calc(50% - (165px * 0.8) / 2 + ${({ $xOffset }) => $xOffset * (285 * 0.8)}px);
  width: calc(170px * 0.8);
  height: calc(198px * 0.8);
  background-image: url('${({ theme }) => theme.urls.stageGoal}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const StageStoneGoalMobile = styled.div<{
  $xOffset: number;
  $yOffset: number;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  padding-top: 8px;
  padding-left: 2px;
  text-shadow: #999 0px -2px;
  z-index: 3;

  text-align: center;
  font-family: 'Press Start 2P';
  font-size: 20px;
  font-weight: 400;

  position: absolute;
  top: calc((-4px) + ${({ $yOffset }) => $yOffset * 110}px);
  left: calc(50% - (88px) / 2 + ${({ $xOffset }) => $xOffset * 0}px);
  width: calc(88px);
  height: calc(102px);
  background-image: url('${({ theme }) => theme.urls.stageGoal}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const GoalEffect = styled.div<{
  $active: boolean;
  $xOffset: number;
  $yOffset: number;
}>`
  ${({ $active }) => $active === false && 'display:none;'}
  width: calc(360px * 0.85);
  height: calc(360px * 0.85);
  position: absolute;
  opacity: 0.9;
  top: calc(-80px + ${({ $yOffset }) => $yOffset * (208 * 0.8)}px);
  left: calc(50% - 5px - 290px / 2 + ${({ $xOffset }) => $xOffset * (285 * 0.8)}px);
  background-image: url('${({ theme }) => theme.urls.stageGoalEffect}');
  background-repeat: no-repeat;
  background-size: contain;
  mix-blend-mode: plus-lighter;
  filter: blur(7px);
`;

export const GoalEffectMobile = styled.div<{
  $active: boolean;
  $xOffset: number;
  $yOffset: number;
}>`
  ${({ $active }) => $active === false && 'display:none;'}
  width: calc(170px);
  height: calc(170px);
  position: absolute;

  top: calc(${({ $yOffset }) => $yOffset * 110}px - 55px);
  left: calc(50% - 85px);
  background-image: url('${({ theme }) => theme.urls.stageGoalEffect}');
  background-repeat: no-repeat;
  background-size: contain;
  mix-blend-mode: plus-lighter;
  filter: blur(7px);
`;

export const Character4Image = styled.div`
  z-index: 3;
  position: absolute;
  top: 550px;
  left: calc(50% - 640px);
  transform: scaleX(-1);
  width: calc(160px * 0.8);
  height: calc(160px * 0.8);
  background-image: url('${({ theme }) => theme.urls.character4}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(160px * 0.7);
    height: calc(160px * 0.7);
    top: 500px;
    left: calc(50% - 520px);
  }
`;

export const Character7Image = styled.div`
  z-index: 3;
  position: absolute;
  top: 830px;
  left: calc(50% - 300px);
  width: calc(142px * 0.8);
  height: calc(142px * 0.8);
  background-image: url('${({ theme }) => theme.urls.character7}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(142px * 0.7);
    height: calc(142px * 0.7);
    top: 850px;
    left: calc(50% - 240px);
  }
`;

export const Character8Image = styled.div`
  z-index: 3;
  position: absolute;
  top: 1800px;
  left: calc(50% - 300px);
  width: calc(190px * 0.8);
  height: calc(190px * 0.8);
  transform: scaleX(-1);
  background-image: url('${({ theme }) => theme.urls.character8}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(190px * 0.7);
    height: calc(190px * 0.7);
    top: 1800px;
    left: calc(50% - 300px);
  }
`;

export const Character9Image = styled.div`
  z-index: 3;
  position: absolute;
  top: 2950px;
  left: calc(50% - 220px);
  width: calc(214px * 0.8);
  height: calc(214px * 0.8);
  background-image: url('${({ theme }) => theme.urls.character9}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(214px * 0.8);
    height: calc(214px * 0.8);
    top: 2950px;
    left: calc(50% - 190px);
  }
`;

export const Character3Image = styled.div`
  z-index: 3;
  position: absolute;
  top: 2450px;
  left: calc(50% - 80px);
  width: calc(308px * 0.8);
  height: calc(180px * 0.8);
  background-image: url('${({ theme }) => theme.urls.character3}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(308px * 0.7);
    height: calc(180px * 0.7);
    top: 2470px;
    left: calc(50% - 60px);
  }
`;

export const SignWood = styled.div`
  position: absolute;
  top: -190px;
  left: calc(50% + 600px);
  width: calc(163px * 0.8);
  height: calc(258px * 0.8);
  cursor: pointer;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(163px * 0.7);
    height: calc(258px * 0.7);
    top: -170px;
    left: calc(50% + 490px);
  }
`;

export const SignWood2 = styled.div`
  z-index: 3;
  position: absolute;
  top: 400px;
  left: calc(50% - 520px);
  width: calc(235px * 0.8);
  height: calc(342px * 0.8);
  cursor: pointer;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(235px * 0.7);
    height: calc(342px * 0.7);
    top: 370px;
    left: calc(50% - 420px);
  }
`;

export const Tree = styled.div`
  z-index: 3;
  position: absolute;
  top: 1100px;
  left: calc(50% + 350px);
  width: calc(153px * 0.8);
  height: calc(311px * 0.8);
  background-image: url('${({ theme }) => theme.urls.tree}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(153px * 0.7);
    height: calc(311px * 0.7);
    top: 1100px;
    left: calc(50% + 300px);
  }
`;

export const Tree2 = styled.div`
  z-index: 3;
  position: absolute;
  top: 2110px;
  left: calc(50% + 10px);
  width: calc(153px * 0.8);
  height: calc(311px * 0.8);
  background-image: url('${({ theme }) => theme.urls.tree}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(153px * 0.7);
    height: calc(311px * 0.7);
    top: 2150px;
    left: calc(50% + 20px);
  }
`;

export const StarStone = styled.div`
  z-index: 3;
  position: absolute;
  top: 710px;
  left: calc(50% - 180px);
  width: calc(232px * 0.8);
  height: calc(292px * 0.8);
  background-image: url('${({ theme }) => theme.urls.star}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(232px * 0.7);
    height: calc(292px * 0.7);
    top: 740px;
    left: calc(50% - 140px);
  }
`;

export const CharacterStone = styled.div`
  z-index: 3;
  position: absolute;
  top: 1220px;
  left: calc(50%);
  width: calc(266px * 0.8);
  height: calc(274px * 0.8);
  background-image: url('${({ theme }) => theme.urls.characterStone}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(266px * 0.7);
    height: calc(274px * 0.7);
    top: 1250px;
    left: calc(50%);
  }
`;

export const GemBox = styled.div`
  z-index: 3;
  position: absolute;
  top: 1765px;
  left: calc(50% - 160px);
  width: calc(234px * 0.8);
  height: calc(234px * 0.8);
  background-image: url('${({ theme }) => theme.urls.gemBox}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(234px * 0.7);
    height: calc(234px * 0.7);
    top: 1780px;
    left: calc(50% - 160px);
  }
`;

export const Chest2 = styled.div`
  z-index: 3;
  position: absolute;
  top: 2300px;
  left: calc(50% + 250px);
  width: calc(188px * 0.8);
  height: calc(225px * 0.8);
  background-image: url('${({ theme }) => theme.urls.chest2}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(188px * 0.8);
    height: calc(225px * 0.8);
    top: 2340px;
    left: calc(50% + 300px);
  }
`;

export const Gem = styled.div`
  z-index: 3;
  position: absolute;
  top: 2380px;
  left: calc(50% + 150px);
  width: 88px;
  height: 88px;
  transform: scaleX(-1);
  background-image: url('${({ theme }) => theme.urls.gem}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
  filter: drop-shadow(0 5px 0px #00000040);

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(88px * 0.9);
    height: calc(88px * 0.9);
    top: 2430px;
    left: calc(50% + 220px);
  }
`;

export const TorchWrapper = styled.div<{ $active: boolean }>`
  display: ${({ $active }) => ($active ? '' : 'none')};
`;

export const TorchLeft = styled.div`
  z-index: 3;
  position: absolute;
  top: -120px;
  left: calc(50% - 230px);
  width: 108px;
  height: 130px;
  background-image: url('${({ theme }) => theme.urls.torch}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(108px * 0.9);
    height: calc(130px * 0.9);
    top: -105px;
    left: calc(50% - 230px);
  }
`;

export const TorchRight = styled.div`
  z-index: 3;
  position: absolute;
  top: -120px;
  left: calc(50% + 122px);
  width: 108px;
  height: 130px;
  background-image: url('${({ theme }) => theme.urls.torch}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(108px * 0.9);
    height: calc(130px * 0.9);
    top: -105px;
    left: calc(50% + 122px);
  }
`;

export const Character11Image = styled.div`
  z-index: 3;
  position: absolute;
  top: -195px;
  left: calc(50% - 115px);
  width: 226px;
  height: 226px;
  background-image: url('${({ theme }) => theme.urls.character11}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(226px * 0.9);
    height: calc(226px * 0.9);
    top: -175px;
    left: calc(50% - 105px);
  }
`;

export const GoToCharacter = styled.div`
  position: fixed;
  bottom: 25px;
  z-index: 100;
  cursor: pointer;
  padding: 12px 24px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;

  border-radius: 100px;
  border: 2px solid #fa5c12;
  background: linear-gradient(90deg, #ffc700 -34.18%, #f4763b 47.61%, #fa5c12 114.54%);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    padding: 10px 12px;
    font-size: 14px;
  }
`;

export const BackArrow = styled.div`
  width: 24px;
  height: 24px;
  background-image: url('${({ theme }) => theme.urls.backArrow}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: 16px;
    height: 16px;
  }
`;

export const Staking = styled.div`
  z-index: 3;
  position: absolute;
  top: -180px;
  left: calc(50% - 600px);
  width: calc(346px * 0.8);
  height: calc(320px * 0.8);

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(346px * 0.7);
    height: calc(320px * 0.7);
    top: -150px;
    left: calc(50% - 520px);
  }
`;

export const KOASpin = styled.div`
  z-index: 4;
  width: calc(58px * 0.8);
  height: calc(59px * 0.8);
  position: absolute;
  top: -240px;
  left: calc(50% - 485px);
  background-image: url('${({ theme }) => theme.urls.koaSpin}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(58px * 0.7);
    height: calc(59px * 0.7);
    top: -210px;
    left: calc(50% - 420px);
  }
`;

export const Shop = styled.div`
  z-index: 3;
  position: absolute;
  top: -200px;
  left: calc(50% + 320px);
  width: calc(237px * 0.8);
  height: calc(340px * 0.8);

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(237px * 0.7);
    height: calc(340px * 0.7);
    top: -170px;
    left: calc(50% + 290px);
  }
`;

export const Diamond = styled.div`
  z-index: 4;
  width: calc(60px * 0.8);
  height: calc(60px * 0.8);
  position: absolute;
  top: -255px;
  left: calc(50% + 390px);
  background-image: url('${({ theme }) => theme.urls.diamond}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(60px * 0.7);
    height: calc(60px * 0.7);
    top: -220px;
    left: calc(50% + 350px);
  }
`;

export const Plate = styled.div`
  z-index: 3;
  position: absolute;
  top: -250px;
  left: calc(50% - 50vw);
  width: 157px;
  height: 45px;
  background-image: url('${({ theme }) => theme.urls.plate}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(157px * 0.9);
    height: calc(45px * 0.9);
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: calc(157px * 0.5);
    height: calc(45px * 0.5);
    top: -50px;
    left: 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaQHDWidth}) {
    left: calc(50% - 40vw);
  }
`;

export const TreasureBoxImage = styled.div`
  width: 142px;
  height: 142px;
  transform: scaleX(-1);
  background-image: url('${({ theme }) => theme.urls.chest}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
  filter: drop-shadow(0 5px 0px #00000040);
  z-index: 5;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(142px * 0.9);
    height: calc(142px * 0.9);
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: calc(142px * 0.5);
    height: calc(142px * 0.5);
  }
`;

export const RewardIcon = styled.div<{ $src: string }>`
  z-index: 6;
  display: flex;
  width: calc(155px * 0.44);
  height: calc(155px * 0.44);
  margin-bottom: -15px;
  background-image: url('${({ $src }) => $src}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
  animation: scaleAnimation 1.5s infinite;
  animation-timing-function: ease-in-out;

  @keyframes scaleAnimation {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  @keyframes laserGlow {
    0%,
    100% {
      transform: translate(-50%, -50%) scale(0.6);
      opacity: 0.5;
    }
    50% {
      transform: translate(-50%, -50%) scale(0.7);
      opacity: 1;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 1) 80%);
    transform: translate(-50%, -50%) scale(0.6);
    animation: laserGlow 0.6s infinite;
    animation-timing-function: ease-in-out;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(155px * 0.45);
    height: calc(155px * 0.45);
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: calc(155px * 0.3);
    height: calc(155px * 0.3);
    margin-bottom: -8px;
  }
`;

export const TreasureBoxWrapper = styled.div<{ $active: boolean }>`
  z-index: 3;
  position: absolute;
  top: -415px;
  left: calc(50% - 49.5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ $active }) => $active && 'cursor:pointer;'}

  & > ${RewardIcon} {
    visibility: ${({ $active }) => ($active ? 'visible' : 'hidden')};
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    top: -400px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    top: -138px;
    left: 3px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaQHDWidth}) {
    left: calc(50% - 39.7vw);
  }
`;

export const RewardEffect = styled.div`
  width: calc(360px * 0.6);
  height: calc(360px * 0.6);
  position: absolute;
  background-image: url('${({ theme }) => theme.urls.stageRewardEffect}');
  background-repeat: no-repeat;
  background-size: contain;
  mix-blend-mode: plus-lighter;
  filter: blur(5px);
  bottom: 5px;
`;

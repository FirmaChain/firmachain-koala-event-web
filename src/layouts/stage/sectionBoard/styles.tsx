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
  z-index: 10;
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

export const StageStone = styled.div<{ $active: boolean; $xOffset: number; $yOffset: number }>`
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
  font-size: 32px;
  font-weight: 400;

  position: absolute;
  top: calc((85px * 0.8) + ${({ $yOffset }) => $yOffset * (208 * 0.8)}px);
  left: calc(50% - (165px * 0.8) / 2 + ${({ $xOffset }) => $xOffset * (285 * 0.8)}px);
  width: calc(164px * 0.8);
  height: calc(143px * 0.8);
  background-image: url('${({ theme, $active }) => ($active ? theme.urls.stageEnable : theme.urls.stageDisable)}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
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
  width: calc(146px * 0.8);
  height: calc(258px * 0.8);
  cursor: pointer;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(146px * 0.7);
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

export const TreasureBoxWrapper = styled.div`
  z-index: 3;
  position: absolute;
  top: 280px;
  left: calc(50% - 950px);

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    top: 230px;
    left: calc(50% - 750px);
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaQHDWidth}) {
    top: 500px;
    left: calc(50% - 792px);
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

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(142px * 0.9);
    height: calc(142px * 0.9);
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
`;

export const BackArrow = styled.div`
  width: 24px;
  height: 24px;
  background-image: url('${({ theme }) => theme.urls.backArrow}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
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

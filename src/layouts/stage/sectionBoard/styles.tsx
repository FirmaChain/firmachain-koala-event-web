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
  height: 3750px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackgroundGrass = styled.div`
  width: 100%;
  height: 3750px;
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
  width: 100%;
  height: 3552px;
  position: absolute;
  top: 0;
  left: 0px;
  background-image: url('${({ theme }) => theme.urls.road}');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
`;

export const CharacterWrapper = styled.div<{ $xOffset: number; $yOffset: number; $flip: boolean; $animate: boolean }>`
  width: 200px;
  height: 200px;
  pointer-events: auto;
  cursor: pointer;
  position: absolute;
  display: ${({ $animate }) => ($animate ? 'flex' : 'none')};

  top: calc(${({ $yOffset }) => $yOffset * 199}px - 40px);
  left: calc(50% - 200px / 2 + ${({ $xOffset }) => $xOffset * 285}px);

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
  width: 200px;
  height: 200px;
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
  height: 12px;
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
  height: 3690px;
`;

export const MissionMessageBox = styled.div<{ $xOffset: number; $yOffset: number; $show: boolean }>`
  z-index: 50;
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;

  top: calc(${({ $yOffset }) => $yOffset * 199}px - 340px);
  left: calc(50% + ${({ $xOffset }) => $xOffset * 285}px - 290px);

  width: 574px;

  ${({ $show }) =>
    $show &&
    css`
      animation: ${showAnim} 0.5s forwards;
    `}
`;

export const MissionMessageBoxTop = styled.div`
  width: 100%;
  height: 30px;
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
  height: 55px;
  background-image: url('${({ theme }) => theme.urls.messageBoxBottom}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const MissionLabel = styled.div`
  display: flex;
  padding: 4px 16px 4px 12px;
  align-items: center;
  gap: 6px;
  border-radius: 100px;
  background: #ff6d3a;
  margin-bottom: 14px;
`;

export const MissionLabelIcon = styled(ReactSVG)`
  width: 19px;
  height: 18px;
  div {
    line-height: 0;
  }
`;

export const MissionLabelTypo = styled.div`
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.18px;
`;

export const MissionTitleTypo = styled.div`
  color: #171717;
  text-align: center;
  font-family: Poppins;
  font-size: 28px;
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
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.18px;
  margin-bottom: 24px;
`;

export const PrimaryButton = styled.div`
  width: auto;
  min-width: 172px;
  height: 48px;
  display: flex;
  cursor: pointer;
`;

export const ButtonLeft = styled.div`
  width: 49px;
  height: 100%;

  background-image: url('${({ theme }) => theme.urls.buttonLeft}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const ButtonRight = styled.div`
  width: 49px;
  height: 100%;

  background-image: url('${({ theme }) => theme.urls.buttonRight}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const ButtonCenter = styled.div`
  width: 100%;
  flex: 1;
  margin-left: -1px;
  margin-right: -1px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;
  text-align: center;
  font-family: 'Press Start 2P';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.15px;
  text-transform: uppercase;

  background-image: url('${({ theme }) => theme.urls.buttonCenter}');
  background-repeat: no-repeat;
  background-size: cover;
  image-rendering: pixelated;
`;

export const StageStone = styled.div<{ $active: boolean; $xOffset: number; $yOffset: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 52px;
  padding-left: 4px;
  text-shadow: #999 0px -3px;

  color: ${({ $active }) => ($active ? '#f2f2f2' : '#d8d8d8')};
  text-align: center;
  font-family: 'Press Start 2P';
  font-size: 38px;
  font-weight: 400;

  position: absolute;
  top: calc(85px + ${({ $yOffset }) => $yOffset * 199}px);
  left: calc(50% - 164px / 2 + ${({ $xOffset }) => $xOffset * 285}px);
  width: 164px;
  height: 143px;
  background-image: url('${({ theme, $active }) => ($active ? theme.urls.stageEnable : theme.urls.stageDisable)}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const MissionBoardImage = styled.div`
  z-index: 3;
  position: absolute;
  top: -110px;
  left: calc(50% - 700px);
  width: 238px;
  height: 218px;
  background-image: url('${({ theme }) => theme.urls.missionBoard}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(238px * 0.8);
    height: calc(218px * 0.8);
    left: calc(50% - 540px);
  }
`;

export const BirdImage = styled.div`
  z-index: 3;
  position: absolute;
  top: -220px;
  left: calc(50% - 740px);
  width: 122px;
  height: 143px;
  background-image: url('${({ theme }) => theme.urls.character5}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(122px * 0.8);
    height: calc(143px * 0.8);
    left: calc(50% - 574px);
    top: -202px;
  }
`;

export const Character6Image = styled.div`
  z-index: 3;
  position: absolute;
  top: -120px;
  left: calc(50% + 350px);
  width: 200px;
  height: 200px;
  background-image: url('${({ theme }) => theme.urls.character6}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(200px * 0.8);
    height: calc(200px * 0.8);
    top: -90px;
    left: calc(50% + 300px);
  }
`;

export const Character4Image = styled.div`
  z-index: 3;
  position: absolute;
  top: 620px;
  left: calc(50% - 690px);
  transform: scaleX(-1);
  width: 160px;
  height: 160px;
  background-image: url('${({ theme }) => theme.urls.character4}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(160px * 0.8);
    height: calc(160px * 0.8);
    top: 640px;
    left: calc(50% - 570px);
  }
`;

export const Character7Image = styled.div`
  z-index: 3;
  position: absolute;
  top: 990px;
  left: calc(50% - 300px);
  width: 142px;
  height: 142px;
  background-image: url('${({ theme }) => theme.urls.character7}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(142px * 0.9);
    height: calc(142px * 0.9);
    top: 1000px;
    left: calc(50% - 270px);
  }
`;

export const Character8Image = styled.div`
  z-index: 3;
  position: absolute;
  top: 2140px;
  left: calc(50% - 390px);
  width: 190px;
  height: 190px;
  transform: scaleX(-1);
  background-image: url('${({ theme }) => theme.urls.character8}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(190px * 0.9);
    height: calc(190px * 0.9);
    top: 2160px;
    left: calc(50% - 350px);
  }
`;

export const Character9Image = styled.div`
  z-index: 3;
  position: absolute;
  top: 3400px;
  left: calc(50% + 390px);
  width: 214px;
  height: 214px;
  background-image: url('${({ theme }) => theme.urls.character9}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(214px * 0.9);
    height: calc(214px * 0.9);
    top: 3400px;
    left: calc(50% + 390px);
  }
`;

export const Character3Image = styled.div`
  z-index: 3;
  position: absolute;
  top: 2920px;
  left: calc(50% - 100px);
  width: 308px;
  height: 180px;
  background-image: url('${({ theme }) => theme.urls.character3}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(308px * 0.9);
    height: calc(180px * 0.9);
    top: 2920px;
    left: calc(50% - 80px);
  }
`;

export const SignWood = styled.div`
  position: absolute;
  top: -220px;
  left: calc(50% + 600px);
  width: 146px;
  height: 258px;
  background-image: url('${({ theme }) => theme.urls.signNormal}');
  background-repeat: no-repeat;
  background-size: contain;
  transition: background-image 0.1s ease-in-out;

  &:hover {
    background-image: url('${({ theme }) => theme.urls.signHover}');
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(146px * 0.8);
    height: calc(258px * 0.8);
    top: -180px;
    left: calc(50% + 480px);
  }
`;

export const SignWood2 = styled.div`
  z-index: 3;
  position: absolute;
  top: 450px;
  left: calc(50% - 570px);
  width: 235px;
  height: 266px;
  background-image: url('${({ theme }) => theme.urls.sign2}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(235px * 0.8);
    height: calc(266px * 0.8);
    top: 490px;
    left: calc(50% - 470px);
  }
`;

export const Tree = styled.div`
  z-index: 3;
  position: absolute;
  top: 1250px;
  left: calc(50% + 450px);
  width: 153px;
  height: 311px;
  background-image: url('${({ theme }) => theme.urls.tree}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(235px * 0.9);
    height: calc(266px * 0.9);
    top: 1320px;
    left: calc(50% + 450px);
  }
`;

export const Tree2 = styled.div`
  z-index: 3;
  position: absolute;
  top: 2600px;
  left: calc(50% + 60px);
  width: 153px;
  height: 311px;
  background-image: url('${({ theme }) => theme.urls.tree}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(235px * 0.9);
    height: calc(266px * 0.9);
    top: 2630px;
    left: calc(50% + 60px);
  }
`;

export const StarStone = styled.div`
  z-index: 3;
  position: absolute;
  top: 850px;
  left: calc(50% - 200px);
  width: 232px;
  height: 292px;
  background-image: url('${({ theme }) => theme.urls.star}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(232px * 0.9);
    height: calc(292px * 0.9);
    top: 870px;
    left: calc(50% - 180px);
  }
`;

export const CharacterStone = styled.div`
  z-index: 3;
  position: absolute;
  top: 1450px;
  left: calc(50%);
  width: 266px;
  height: 274px;
  background-image: url('${({ theme }) => theme.urls.characterStone}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(266px * 0.9);
    height: calc(274px * 0.9);
    top: 1450px;
    left: calc(50%);
  }
`;

export const GemBox = styled.div`
  z-index: 3;
  position: absolute;
  top: 2100px;
  left: calc(50% - 200px);
  width: 234px;
  height: 234px;
  background-image: url('${({ theme }) => theme.urls.gemBox}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(234px * 0.9);
    height: calc(234px * 0.9);
    top: 2120px;
    left: calc(50% - 190px);
  }
`;

export const Chest2 = styled.div`
  z-index: 3;
  position: absolute;
  top: 2800px;
  left: calc(50% + 350px);
  width: 188px;
  height: 225px;
  background-image: url('${({ theme }) => theme.urls.chest2}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(188px * 0.9);
    height: calc(225px * 0.9);
    top: 2800px;
    left: calc(50% + 330px);
  }
`;

export const Gem = styled.div`
  z-index: 3;
  position: absolute;
  top: 2910px;
  left: calc(50% + 260px);
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
    top: 2910px;
    left: calc(50% + 240px);
  }
`;

export const TreasureBoxWrapper = styled.div`
  z-index: 3;
  position: absolute;
  top: 180px;
  left: calc(50% - 595px);

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    top: 125px;
    left: calc(50% - 493px);
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaQHDWidth}) {
    top: 330px;
    left: calc(50% - 694px);
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

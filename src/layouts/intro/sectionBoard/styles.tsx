import styled, { keyframes } from 'styled-components';

export const jumpAnim = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 3690px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackgroundGrass = styled.div`
  width: 100%;
  height: 3690px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: #a9bb42;
  background-image: url('${({ theme }) => theme.urls.grass}');
  background-repeat: repeat no-repeat;
  background-position: top center;
  background-size: contain;
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

export const MissionBoardImage = styled.div`
  z-index: 3;
  position: absolute;
  top: -110px;
  left: 100px;
  width: 238px;
  height: 218px;
  background-image: url('${({ theme }) => theme.urls.missionBoard}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const BirdImage = styled.div`
  z-index: 3;
  position: absolute;
  top: -228px;
  left: 59px;
  width: 122px;
  height: 143px;
  background-image: url('${({ theme }) => theme.urls.character5}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const NinjaCharacterImage = styled.div`
  z-index: 3;
  position: absolute;
  top: -3vh;
  left: 400px;
  width: 190px;
  height: 190px;
  transform: scaleX(-1);
  background-image: url('${({ theme }) => theme.urls.character4}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: 140px;
    height: 140px;
    left: 360px;
  }
`;

export const NinjaCharacter2Image = styled.div`
  z-index: 3;
  position: absolute;
  top: 5.5vh;
  left: 300px;
  width: 100px;
  height: 100px;
  transform: scaleX(-1);
  background-image: url('${({ theme }) => theme.urls.character4}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: 70px;
    height: 70px;
    left: 220px;
  }
`;

export const TreeImage = styled.div`
  z-index: 3;
  position: absolute;
  top: -25vh;
  left: 100px;
  width: 153px;
  height: 311px;
  transform: scaleX(-1);
  background-image: url('${({ theme }) => theme.urls.tree}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: 100px;
    height: 203px;
    left: 80px;
    top: -20vh;
  }
`;

export const PoweredFirma = styled.div`
  z-index: 3;
  position: absolute;
  top: -22vh;
  right: 220px;
  width: 262px;
  height: 151px;
  background-image: url('${({ theme }) => theme.urls.introPoweredFirma}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: 190px;
    height: 109px;
    right: 210px;
    top: -21vh;
  }
`;

export const SubCharacterImage = styled.div`
  z-index: 3;
  position: absolute;
  top: -8vh;
  right: 150px;
  width: 350px;
  height: 231px;
  background-image: url('${({ theme }) => theme.urls.character3}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: 250px;
    height: 165px;
  }
`;

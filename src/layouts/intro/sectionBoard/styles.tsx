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
  background-repeat: repeat no-repeat;
  background-position: top center;
  background-size: contain;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    background-size: cover;
  }
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
  left: 190px;
  width: calc(238px * 0.8);
  height: calc(218px * 0.8);
  background-image: url('${({ theme }) => theme.urls.missionBoard}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const BirdImage = styled.div`
  z-index: 3;
  position: absolute;
  top: -200px;
  left: 155px;
  width: calc(122px * 0.8);
  height: calc(143px * 0.8);
  background-image: url('${({ theme }) => theme.urls.character5}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const NinjaCharacterImage = styled.div`
  z-index: 3;
  position: absolute;
  top: -30px;
  left: 480px;
  width: calc(190px * 0.8);
  height: calc(190px * 0.8);
  transform: scaleX(-1);
  background-image: url('${({ theme }) => theme.urls.character4}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(190px * 0.7);
    height: calc(190px * 0.7);
    left: 440px;
  }
`;

export const PoweredFirma = styled.div`
  z-index: 3;
  position: absolute;
  top: -200px;
  right: 320px;
  width: calc(262px * 0.8);
  height: calc(151px * 0.8);
  background-image: url('${({ theme }) => theme.urls.introPoweredFirma}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(262px * 0.7);
    height: calc(151px * 0.7);
    right: 250px;
    top: -160px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaQHDWidth}) {
    top: -240px;
  }
`;

export const SubCharacterImage = styled.div`
  z-index: 3;
  position: absolute;
  top: -80px;
  right: 250px;
  width: calc(350px * 0.8);
  height: calc(231px * 0.8);
  background-image: url('${({ theme }) => theme.urls.character3}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaQHDWidth}) {
    top: -120px;
  }
`;

export const SubCharacterMobileImage = styled.div`
  z-index: 5;
  position: absolute;
  top: 50px;
  right: 20px;
  width: calc(350px * 0.4);
  height: calc(231px * 0.4);
  background-image: url('${({ theme }) => theme.urls.character3}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const SignWoodMobileImage = styled.div`
  z-index: 3;
  position: absolute;
  top: 60px;
  left: 30px;
  width: calc(68px);
  height: calc(84px);
  background-image: url('${({ theme }) => theme.urls.signMobile}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

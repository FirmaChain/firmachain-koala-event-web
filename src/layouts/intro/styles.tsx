import styled from 'styled-components';

export const IntroContainer = styled.div`
  width: 100%;
  position: fixed;
  overflow: hidden;
  min-height: calc(var(--vh, 1vh) * 100);
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  z-index: 3;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleLogoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleLogoCharacter = styled.div`
  z-index: 3;
  width: 189px;
  height: 118px;
  margin-left: -70px;
  background-image: url('${({ theme }) => theme.urls.introChar}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(189px * 0.8);
    height: calc(118px * 0.8);
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaQHDWidth}) {
    width: calc(189px * 1.4);
    height: calc(118px * 1.4);
  }
`;

export const TitleLogoImage = styled.div`
  z-index: 4;
  width: 915px;
  height: 256px;
  margin-top: -50px;
  background-image: url('${({ theme }) => theme.urls.titleLogo}');
  background-repeat: no-repeat;
  background-size: contain;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(915px * 0.8);
    height: calc(256px * 0.8);
    margin-top: calc(-40px * 0.9);
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaQHDWidth}) {
    width: calc(915px * 1.4);
    height: calc(256px * 1.4);
    margin-top: calc(-40px * 1.6);
  }
`;

export const TitleLabelImage = styled.div`
  z-index: 4;
  width: 400px;
  height: 85px;
  margin-top: 40px;
  margin-bottom: 150px;
  background-image: url('${({ theme }) => theme.urls.introLabel}');
  background-repeat: no-repeat;
  background-size: contain;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(400px * 0.8);
    height: calc(85px * 0.8);
    margin-top: calc(40px * 0.8);
    margin-bottom: calc(150px * 0.8);
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaQHDWidth}) {
    width: calc(400px * 1.4);
    height: calc(85px * 1.4);
    margin-top: calc(40px * 1.4);
    margin-bottom: calc(150px * 1.4);
  }
`;

export const TitleButton = styled.div`
  z-index: 4;
  width: 356px;
  height: 88px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-family: 'Press Start 2P';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.24px;
  text-transform: uppercase;
  background-image: url('${({ theme }) => theme.urls.introButtonBg}');
  background-repeat: no-repeat;
  background-size: contain;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(356px * 0.8);
    height: calc(88px * 0.8);
    font-size: 20px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaQHDWidth}) {
    width: calc(356px * 1.4);
    height: calc(88px * 1.4);
    font-size: 26px;
  }
`;

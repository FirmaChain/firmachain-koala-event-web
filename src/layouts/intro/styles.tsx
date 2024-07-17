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

export const TitleLogoImage = styled.div`
  z-index: 4;
  width: calc(920px * 0.8);
  height: calc(420px * 0.8);
  margin-top: -50px;
  background-image: url('${({ theme }) => theme.urls.titleLogo}');
  background-repeat: no-repeat;
  background-size: contain;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(920px * 0.7);
    height: calc(420px * 0.7);
    margin-top: calc(-40px * 0.9);
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaQHDWidth}) {
    width: calc(920px * 1.2);
    height: calc(420px * 1.2);
    margin-top: calc(-40px * 1.2);
  }
`;

export const TitleLabelImage = styled.div`
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.24px;

  width: calc(400px * 0.8);
  height: calc(85px * 0.8);
  margin-top: 30px;
  margin-bottom: 150px;
  background-image: url('${({ theme }) => theme.urls.introLabel}');
  background-repeat: no-repeat;
  background-size: contain;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(400px * 0.7);
    height: calc(85px * 0.7);
    margin-top: calc(40px * 0.7);
    margin-bottom: calc(150px * 0.7);
    font-size: 16px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaQHDWidth}) {
    width: calc(400px * 1.3);
    height: calc(85px * 1.3);
    margin-top: calc(40px * 1.3);
    margin-bottom: calc(150px * 1.3);
    font-size: 32px;
  }
`;

export const TitleButton = styled.div`
  z-index: 4;
  width: calc(356px * 0.8);
  height: calc(88px * 0.8);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-family: 'Press Start 2P';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.24px;
  text-transform: uppercase;
  background-image: url('${({ theme }) => theme.urls.introButtonBg}');
  background-repeat: no-repeat;
  background-size: contain;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(356px * 0.7);
    height: calc(88px * 0.7);
    font-size: 20px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaQHDWidth}) {
    width: calc(356px * 1.2);
    height: calc(88px * 1.2);
    font-size: 26px;
  }
`;

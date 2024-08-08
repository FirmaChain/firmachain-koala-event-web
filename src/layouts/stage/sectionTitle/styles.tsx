import { ReactSVG } from 'react-svg';
import styled, { keyframes } from 'styled-components';

export const dungdung = keyframes`
  0% {
    transform: translateY(0%);
  }
  50%{
    transform: translateY(10%);
  }
  100% {
    transform: translateY(0%);
  }
`;

export const SectionTitleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  pointer-events: none;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #46d3ff 3.56%, #92ddf4 80.23%);

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    height: 65vh;
  }
`;

export const TitleCoinImage = styled.img<{ $top: string; $left: string; $widthCustom: string }>`
  z-index: 2;
  position: absolute;
  top: ${({ $top }) => $top};
  left: calc(50% + ${({ $left }) => $left});
  width: ${({ $widthCustom }) => $widthCustom};
  animation-duration: 3s;
  animation-delay: 0.4s;
  animation-timing-function: linear;
  animation-name: ${dungdung};
  animation-iteration-count: infinite;
`;

export const TitleLogoImage = styled(ReactSVG)`
  z-index: 4;
  width: calc(673px * 0.9);
  height: calc(230px * 0.9);
  margin-top: 0px;

  div {
    line-height: 0;
  }
  svg {
    width: calc(673px * 0.9);
    height: calc(230px * 0.9);
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(673px * 0.6);
    height: calc(230px * 0.6);

    svg {
      width: calc(673px * 0.6);
      height: calc(230px * 0.6);
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaQHDWidth}) {
    width: calc(673px * 1.4);
    height: calc(230px * 1.4);

    svg {
      width: calc(673px * 1.4);
      height: calc(230px * 1.4);
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: calc(335px);
    height: calc(131px);

    svg {
      width: calc(335px);
      height: calc(131px);
    }
  }
`;

export const Plate2 = styled.div`
  z-index: 3;
  position: absolute;
  top: 285px;
  left: calc(50% - 600px);
  width: 157px;
  height: 45px;
  background-image: url('${({ theme }) => theme.urls.plate}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(157px * 0.9);
    height: calc(45px * 0.9);
    top: 220px;
    left: calc(50% - 500px);
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaQHDWidth}) {
    left: calc(50% - 700px);
    top: 430px;
  }
`;

export const Plate = styled.div`
  z-index: 3;
  position: absolute;
  top: 380px;
  left: calc(50% - 960px);
  width: 157px;
  height: 45px;
  background-image: url('${({ theme }) => theme.urls.plate}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(157px * 0.9);
    height: calc(45px * 0.9);
    top: 320px;
    left: calc(50% - 755px);
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaQHDWidth}) {
    left: calc(50% - 800px);
    top: 600px;
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
    margin-bottom: calc(60px);
    font-size: 16px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaQHDWidth}) {
    width: calc(400px * 1.3);
    height: calc(85px * 1.3);
    margin-top: calc(40px * 1.3);
    margin-bottom: calc(150px * 1.3);
    font-size: 32px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: calc(400px * 0.6);
    height: calc(85px * 0.6);
    margin-top: calc(40px * 0.6);
    margin-bottom: calc(40px);
    font-size: 14px;
  }
`;

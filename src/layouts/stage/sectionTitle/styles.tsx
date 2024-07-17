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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #46d3ff 3.56%, #92ddf4 80.23%);
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
  width: 673px;
  height: 230px;
  margin-top: -280px;

  div {
    line-height: 0;
  }
  svg {
    width: 673px;
    height: 230px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(673px * 0.6);
    height: calc(230px * 0.6);
    margin-top: calc(-240px);

    svg {
      width: calc(673px * 0.6);
      height: calc(230px * 0.6);
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaQHDWidth}) {
    width: calc(673px * 1.4);
    height: calc(230px * 1.4);
    margin-top: calc(-280px * 1.2);

    svg {
      width: calc(673px * 1.4);
      height: calc(230px * 1.4);
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

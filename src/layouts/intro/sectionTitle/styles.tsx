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

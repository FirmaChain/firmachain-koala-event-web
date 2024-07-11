import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

// 스케일 애니메이션
const scaleUp = keyframes`
  from {
    transform: translate(-50%, -50%) scale(0);
  }
  to {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const DimmedLayer = styled.div<{ $isLoading: boolean }>`
  display: ${({ $isLoading }) => ($isLoading ? 'block' : 'none')};
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
`;

export const ClearBg1 = styled.div`
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 920px;
  height: 907px;
  background-image: url('${({ theme }) => theme.urls.clearBg1}');
  background-repeat: no-repeat;
  background-size: contain;
  animation: ${scaleUp} 1s ease-out forwards, ${rotate} 10s linear infinite;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(920px * 0.8);
    height: calc(907px * 0.8);
  }
`;

export const ClearBg2 = styled.div`
  z-index: 4;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 888px;
  height: 793px;
  background-image: url('${({ theme }) => theme.urls.clearBg2}');
  background-repeat: no-repeat;
  background-size: contain;
  animation: ${scaleUp} 0.5s ease-out forwards;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(888px * 0.8);
    height: calc(793px * 0.8);
  }
`;

export const ClearBg3 = styled.div<{ $type: number }>`
  z-index: 5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  height: 532px;
  background-image: url('${({ theme, $type }) => ($type === 0 ? theme.urls.clearBg3 : theme.urls.clearBg4)}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  animation: ${scaleUp} 0.4s ease-out forwards;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(650px * 0.8);
    height: calc(532px * 0.8);
  }
`;

export const TierIcon = styled.div<{ $type: number; $tier: number }>`
  ${({ $type }) => $type !== 1 && `display: none;`}
  z-index: 6;
  position: absolute;
  top: calc(50% + 40px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  background-image: url('${({ theme, $tier }) => theme.urls.tierList[$tier]}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  image-rendering: pixelated;

  animation: ${scaleUp} 0.4s ease-out forwards;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(120px * 0.8);
    height: calc(120px * 0.8);
    top: calc(50% + 40px);
  }
`;

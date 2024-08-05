import styled, { css, keyframes } from 'styled-components';

const curtainCloseLeft = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: 0;
  }
`;

const curtainCloseRight = keyframes`
  0% {
    right: -100%;
  }
  100% {
    right: 0;
  }
`;

const curtainOpenLeft = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: -100%;
  }
`;

const curtainOpenRight = keyframes`
  0% {
    right: 0;
  }
  100% {
    right: -100%;
  }
`;

export const DimmedLayer = styled.div<{ $isLoading: boolean; $isPlayOpen: boolean }>`
  display: ${({ $isLoading }) => ($isLoading ? 'block' : 'none')};
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  ${({ $isLoading, $isPlayOpen }) =>
    $isLoading &&
    ($isPlayOpen
      ? css`
          & > div:nth-child(1) {
            animation: ${curtainOpenLeft} 0.8s forwards;
          }
          & > div:nth-child(2) {
            animation: ${curtainOpenRight} 0.8s forwards;
          }
        `
      : css`
          & > div:nth-child(1) {
            animation: ${curtainCloseLeft} 0.8s forwards;
          }
          & > div:nth-child(2) {
            animation: ${curtainCloseRight} 0.8s forwards;
          }
        `)}
`;

export const CurtainLeft = styled.div`
  position: fixed;
  left: -100%;
  top: 0;
  width: 50vw;
  height: 100%;
  background: rgba(0, 0, 0, 1);
`;

export const CurtainRight = styled.div`
  position: fixed;
  right: -100%;
  top: 0;
  width: 50vw;
  height: 100%;
  background: rgba(0, 0, 0, 1);
`;

export const LoadingSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SpinnerImage = styled.div`
  width: 100px;
  height: 100px;
  background-image: url('${({ theme }) => theme.urls.character2}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: pixelated;
`;

export const LoadingTypo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

import styled, { css, keyframes } from 'styled-components';

const move = (direction: 'left' | 'right') => keyframes`
  0% {
    left:${direction === 'left' ? '100%' : '-20%'};
  }
  100% {
    left:${direction === 'left' ? '-20%' : '100%'};
  }
`;

export const ImageContainer = styled.div<{ $height: string; $top: string }>`
  position: absolute;
  width: 100vw;
  overflow: hidden;
  height: ${({ $height }) => $height};
  top: ${({ $top }) => $top};

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    height: calc(${({ $height }) => $height} * 0.7);
  }
`;

export const ImageAnimation = styled.img<{
  $speed: number;
  $direction: 'left' | 'right';
  $left: number;
}>`
  position: absolute;
  animation-duration: ${(props) => props.$speed}s;
  animation-delay: -${(props) => props.$left}s;
  animation-timing-function: linear;
  animation-name: ${({ $direction }) =>
    css`
      ${move($direction)}
    `};
  animation-iteration-count: infinite;
`;

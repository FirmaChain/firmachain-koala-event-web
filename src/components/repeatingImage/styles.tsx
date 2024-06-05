import styled, { keyframes, css } from 'styled-components';

const move = (direction: 'left' | 'right') => keyframes`
  from {
    transform: translateX(${direction === 'left' ? '0%' : '-100%'});
  }
  to {
    transform: translateX(${direction === 'left' ? '-100%' : '0%'});
  }
`;

export const ImageContainer = styled.div<{ $height: string; $bottom: string }>`
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  width: 100%;
  height: ${({ $height }) => $height};
  min-height: ${({ $height }) => $height};
  max-height: ${({ $height }) => $height};
  bottom: ${({ $bottom }) => $bottom};
`;

export const ImageAnimation = styled.div<{
  $src: string;
  $height: string;
  $speed: number;
  $direction: 'left' | 'right';
}>`
  width: 100%;
  animation: ${({ $direction, $speed }) =>
    css`
      ${move($direction)} ${$speed}s linear infinite
    `};
  position: absolute;
  top: 0;
  height: 100%;
  background-image: url('${({ $src }) => $src}');
  background-repeat: repeat no-repeat;
  background-position: right top;
  background-size: contain;
`;

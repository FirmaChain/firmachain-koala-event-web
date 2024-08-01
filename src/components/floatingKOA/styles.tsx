import styled from 'styled-components';

export const KOA = styled.div<{ $left: number; $top: number; $duration: number }>`
  width: calc(178px * 0.7);
  height: calc(98px * 0.7);
  z-index: 30;
  position: fixed;
  cursor: pointer;
  filter: drop-shadow(0 4px 0px #00000066);
  background-image: url('${({ theme }) => theme.urls.floatingKoa}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  transition: top ${({ $duration }) => $duration}s linear, left ${({ $duration }) => $duration}s linear;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(178px * 0.6);
    height: calc(98px * 0.6);
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: calc(178px * 0.5);
    height: calc(98px * 0.5);
  }
`;

export const MessageBox = styled.div<{ $left: number; $top: number }>`
  position: fixed;
  z-index: 100;
  width: calc(129px * 0.7);
  height: calc(66px * 0.7);
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  pointer-events: none;

  background-image: url('${({ theme }) => theme.urls.floatingKoaMessage}');
  background-repeat: no-repeat;
  background-size: contain;
`;

import styled from 'styled-components';

export const KOA = styled.div<{ $left: number; $top: number; $duration: number }>`
  width: calc(178px * 0.7);
  height: calc(98px * 0.7);
  z-index: 100;
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
`;

export const MessageBox = styled.div<{ $left: number; $top: number }>`
  position: fixed;
  z-index: 100;
  width: 40px;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  background-color: white;
  color: black;
  text-align: center;
  font-weight: 900;
  padding: 5px;
  filter: drop-shadow(0 4px 0px #00000066);
  border-radius: 4px;
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }
`;

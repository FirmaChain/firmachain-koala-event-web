import styled, { keyframes, css } from 'styled-components';

const scaleAnim = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`;

export const QRWrapper = styled.div<{ $isLoading: boolean }>`
  width: 140px;
  height: 140px;
  padding: 12px;
  ${(props) => (props.$isLoading ? '' : 'background-color: white;')}
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: none;
  animation-duration: 0.4s;
  animation-timing-function: ease-out;
  ${(props) =>
    props.$isLoading === false &&
    css`
      animation-name: ${scaleAnim};
    `}
`;

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
  width: 180px;
  height: 180px;
  ${(props) => (props.$isLoading ? '' : 'background-color: white;')}

  padding: 20px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 4px 4px 0px 0px rgba(81, 41, 12, 0.6) inset;

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

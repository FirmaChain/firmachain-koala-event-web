import styled from 'styled-components';

export const ModalWrapper = styled.div<{ $visible: boolean; $type?: string }>`
  font-family: Poppins;
  display: ${(props) => (props.$visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: hidden;
  outline: 0;
  height: auto;

  top: ${({ $type }) => ($type === 'bottom-sheet' ? 'auto' : '0')};
  bottom: ${({ $type }) => ($type === 'bottom-sheet' ? '0' : 'auto')};
  height: ${({ $type }) => ($type === 'bottom-sheet' ? 'auto' : '100%')};
`;

export const ModalOverlay = styled.div<{ $visible: boolean }>`
  display: ${(props) => (props.$visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  pointer-events: auto;
  z-index: 999;
`;

export const ModalInner = styled.div<{ $width: string; $type?: string }>`
  position: relative;
  width: ${({ $width }) => ($width ? $width : '300px')};
  max-width: ${({ $width }) => ($width ? $width : '300px')};
  height: auto;
  top: ${({ $type }) => ($type === 'bottom-sheet' ? 'auto' : '50%')};
  transform: ${({ $type }) => ($type === 'bottom-sheet' ? 'none' : 'translateY(-50%)')};
  margin: 0 auto;
  bottom: ${({ $type }) => ($type === 'bottom-sheet' ? '0' : 'auto')};

  @media only screen and (max-width: 700px) {
    width: 100vw;
    max-width: 100vw;
    margin: 0;
  }
`;

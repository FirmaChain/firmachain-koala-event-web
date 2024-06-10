import styled from 'styled-components';

export const ModalWrapper = styled.div<{ $visible: boolean }>`
  font-family: 'Poppins', sans-serif;
  display: ${(props) => (props.$visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
  height: auto;
`;

export const ModalOverlay = styled.div<{ $visible: boolean }>`
  display: ${(props) => (props.$visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

export const ModalInner = styled.div<{ $width: string }>`
  position: relative;
  width: ${(props) => (props.$width ? props.$width : '300px')};
  max-width: ${(props) => (props.$width ? props.$width : '300px')};
  height: auto;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;

  @media only screen and (max-width: 700px) {
    width: calc(100% - 40px);
    margin: 0 20px;
  }
`;

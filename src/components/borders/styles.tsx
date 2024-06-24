import styled from 'styled-components';

const CornerStyle = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  z-index: 1;
`;

const BorderStyle = styled.div`
  position: absolute;
  z-index: 1;
`;

export const BorderLeftTopCorner = styled(CornerStyle)`
  top: 0;
  left: 0;
`;

export const BorderRightTopCorner = styled(CornerStyle)`
  top: 0;
  right: 0;
  transform: scaleX(-1);
`;

export const BorderLeftBottomCorner = styled(CornerStyle)`
  bottom: 0;
  left: 0;
  transform: scaleY(-1);
`;

export const BorderRightBottomCorner = styled(CornerStyle)`
  bottom: 0;
  right: 0;
  transform: scale(-1);
`;

export const BordersContainer = styled.div<{ $color: string }>`
  width: 100%;
  position: relative;
  ${CornerStyle} {
    background-color: ${({ $color }) => $color};
  }

  ${BorderStyle} {
    background-color: ${({ $color }) => $color};
  }
`;

export const BorderDefaultWrapper = styled.div`
  width: 100%;
  background: #f1c09c;
`;

export const BorderDefaultContents = styled.div``;

export const BorderBorderLeft = styled(BorderStyle)`
  top: 8px;
  left: -8px;
  width: 8px;
  height: calc(100% - 16px);
`;

export const BorderBorderRight = styled(BorderStyle)`
  top: 8px;
  right: -8px;
  width: 8px;
  height: calc(100% - 16px);
`;

export const BorderBorderTop = styled(BorderStyle)`
  top: -8px;
  left: 8px;
  width: calc(100% - 16px);
  height: 8px;
`;

export const BorderBorderBottom = styled(BorderStyle)`
  bottom: -8px;
  left: 8px;
  width: calc(100% - 16px);
  height: 8px;
`;

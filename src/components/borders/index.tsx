import React from 'react';

import useScreen from '../../hooks/useScreen';

import {
  BordersContainer,
  BorderBorderBottom,
  BorderBorderLeft,
  BorderBorderRight,
  BorderBorderTop,
  BorderDefaultContents,
  BorderDefaultWrapper,
  BorderLeftBottomCorner,
  BorderLeftTopCorner,
  BorderRightBottomCorner,
  BorderRightTopCorner,
} from './styles';

const Borders = ({ color, children }: { color: string; children: React.ReactNode }) => {
  const { isMobile } = useScreen();

  return isMobile ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <BordersContainer $color={color}>
      <BorderBorderLeft />
      <BorderBorderRight />
      <BorderBorderTop />
      <BorderBorderBottom />
      <BorderDefaultWrapper>
        <BorderLeftTopCorner />
        <BorderRightTopCorner />
        <BorderLeftBottomCorner />
        <BorderRightBottomCorner />
        <BorderDefaultContents>{children}</BorderDefaultContents>
      </BorderDefaultWrapper>
    </BordersContainer>
  );
};

export default React.memo(Borders);

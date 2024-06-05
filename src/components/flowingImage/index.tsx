import React from 'react';
import { ImageAnimation, ImageContainer } from './styles';

interface IFlowingImageProps {
  src: string;
  direction: 'left' | 'right';
  speed: number;
  left: number;
  height: string;
  top: string;
}

const FlowingImage: React.FC<IFlowingImageProps> = ({ src, direction, speed, left, top, height }) => {
  return (
    <ImageContainer $height={height} $top={top}>
      <ImageAnimation src={src} $speed={speed} $direction={direction} $left={left} />
    </ImageContainer>
  );
};

export default FlowingImage;

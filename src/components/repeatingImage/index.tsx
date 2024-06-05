import React from 'react';
import { ImageAnimation, ImageContainer } from './styles';

interface IRepeatingImageProps {
  src: string;
  direction: 'left' | 'right';
  speed: number;
  height: string;
  bottom: string;
}

const RepeatingImage = ({ src, direction, speed, height, bottom }: IRepeatingImageProps) => {
  return (
    <ImageContainer $height={height} $bottom={bottom}>
      <ImageAnimation $src={src} $height={height} $speed={speed} $direction={direction} style={{ left: 0 }} />
      <ImageAnimation $src={src} $height={height} $speed={speed} $direction={direction} style={{ left: '100%' }} />
    </ImageContainer>
  );
};

export default React.memo(RepeatingImage);

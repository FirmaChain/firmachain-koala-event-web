import { useEffect } from 'react';

const PreloadImages = ({ images }: { images: string[] }) => {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return null;
};

export default PreloadImages;

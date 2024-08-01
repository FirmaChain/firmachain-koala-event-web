import React from 'react';

import useScreen from '../../../hooks/useScreen';

import { SectionTitleContainer, TitleCoinImage } from './styles';

import RepeatingImage from '../../../components/repeatingImage';
import FlowingImage from '../../../components/flowingImage';
import theme from '../../../styles/themes';

interface ICloud {
  src: string;
  direction: 'left' | 'right';
  height: string;
  top: string;
  speed: number;
  left: number;
}

interface ICoin {
  src: string;
  width: string;
  top: string;
  left: string;
}

interface IRepatingCloud {
  src: string;
  direction: 'left' | 'right';
  speed: number;
  height: string;
  bottom: string;
}

const SectionTitle = () => {
  const { isSmall } = useScreen();

  const cloudList: ICloud[] = [
    { src: theme.urls.cloud, direction: 'right', height: '11vh', top: '8vh', speed: 300, left: 100 },
    { src: theme.urls.cloud, direction: 'right', height: '16vh', top: '18vh', speed: 200, left: 40 },
    { src: theme.urls.cloud, direction: 'right', height: '14vh', top: '12vh', speed: 500, left: 0 },
    { src: theme.urls.cloud, direction: 'left', height: '20vh', top: '12vh', speed: 500, left: 120 },
    { src: theme.urls.cloud, direction: 'left', height: '9vh', top: '28vh', speed: 200, left: 70 },

    // { src: theme.urls.cloud, direction: 'left', height: '15vh', top: '12vh', speed: 400, left: 0 },
    // { src: theme.urls.cloud, direction: 'right', height: '14vh', top: '12vh', speed: 200, left: 10 },
  ];

  const coinList: ICoin[] = [
    { src: theme.urls.coin, width: '6.5vh', top: '34vh', left: '22vw' },
    { src: theme.urls.coin, width: '4.5vh', top: '12vh', left: '36vw' },
    { src: theme.urls.coin, width: '5.5vh', top: '36vh', left: '-28vw' },
    { src: theme.urls.coin, width: '4.5vh', top: '22vh', left: '-38vw' },
  ];

  const repeatingCloudList: IRepatingCloud[] = [
    { src: theme.urls.cloud4, direction: 'left', speed: 150, height: '50vh', bottom: '-15vh' },
    { src: theme.urls.cloud5, direction: 'right', speed: 250, height: '50vh', bottom: '-25vh' },
  ];

  return (
    <SectionTitleContainer>
      {isSmall === false &&
        coinList.map((coin, index) => (
          <TitleCoinImage src={coin.src} key={index} $widthCustom={coin.width} $top={coin.top} $left={coin.left} />
        ))}
      {cloudList.map((cloud, index) => (
        <FlowingImage
          src={cloud.src}
          key={index}
          direction={cloud.direction}
          height={cloud.height}
          top={cloud.top}
          speed={cloud.speed}
          left={cloud.left}
        />
      ))}
      {repeatingCloudList.map((cloud, index) => (
        <RepeatingImage
          src={cloud.src}
          key={index}
          direction={cloud.direction}
          speed={cloud.speed}
          height={cloud.height}
          bottom={cloud.bottom}
        />
      ))}
    </SectionTitleContainer>
  );
};

export default React.memo(SectionTitle);

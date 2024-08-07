import React, { useEffect } from 'react';

import useMission from '../../hooks/useMission';
import useClear from '../../hooks/useClear';

import theme from '../../styles/themes';

import {
  DimmedLayer,
  ClearEffect1,
  ClearEffect2,
  ClearType0,
  TierIcon,
  ClearDescription,
  SquareIcon,
  DescriptionTypo,
  NftLabel,
  ClearType1,
  ClearType2,
  MedalIcon,
  ClearType3,
  LuckyCoinWrapper,
  LuckyCoinIcon,
  LuckyCoinTypo,
  LuckyCoinValueLabel,
  FCTIcon,
  DescriptionTypo2,
  SquareIcon2,
  ClearDescription2,
  ClearType4,
} from './styles';

const ClearScreen = () => {
  const { currentTier, achievementList } = useMission();
  const { isClear, setClear, type, rewardValue, setRewardValue } = useClear();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isClear) {
      timer = setTimeout(() => {
        // setClear(false);
      }, 2000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isClear, setClear]);

  const handleDimmedLayerClick = () => {
    setClear(false);
    setRewardValue('0');
  };

  return (
    <DimmedLayer $isLoading={isClear} onClick={() => handleDimmedLayerClick()}>
      <ClearEffect1 $type={type} />
      <ClearEffect2 />
      {type === 100 && (
        <React.Fragment>
          <ClearType0 />
        </React.Fragment>
      )}
      {type === 101 && (
        <React.Fragment>
          <ClearType1 />
          <ClearDescription>
            <SquareIcon />
            <DescriptionTypo>Check the treasure box!</DescriptionTypo>
            <SquareIcon />
          </ClearDescription>
          <TierIcon $src={theme.urls.achievementList[currentTier.order].enable} />
        </React.Fragment>
      )}
      {type === 200 && (
        <React.Fragment>
          <ClearType3 />
          <ClearDescription>
            <SquareIcon2 />
            <DescriptionTypo2>Got the Lucky Coin!</DescriptionTypo2>
            <SquareIcon2 />
          </ClearDescription>
          <LuckyCoinWrapper>
            <LuckyCoinIcon />
            <LuckyCoinTypo>Lucky Coin</LuckyCoinTypo>
            <LuckyCoinValueLabel>x 1</LuckyCoinValueLabel>
          </LuckyCoinWrapper>
        </React.Fragment>
      )}
      {type === 201 && (
        <React.Fragment>
          <ClearType4 />
          <ClearDescription>
            <SquareIcon2 />
            <DescriptionTypo2>Got the FCT Coin!</DescriptionTypo2>
            <SquareIcon2 />
          </ClearDescription>
          <LuckyCoinWrapper>
            <FCTIcon />
            <LuckyCoinTypo>FCT Coin</LuckyCoinTypo>
            <LuckyCoinValueLabel>x {rewardValue}</LuckyCoinValueLabel>
          </LuckyCoinWrapper>
        </React.Fragment>
      )}

      {achievementList.find((v) => v.id === type) && (
        <React.Fragment>
          <ClearType2 />
          <ClearDescription2>
            <SquareIcon2 />
            <DescriptionTypo2>Check in your Firma Station!</DescriptionTypo2>
            <SquareIcon2 />
          </ClearDescription2>
          <NftLabel>NFT</NftLabel>
          <MedalIcon $src={theme.urls.achievementList[type].enable} />
        </React.Fragment>
      )}
    </DimmedLayer>
  );
};

export default React.memo(ClearScreen);

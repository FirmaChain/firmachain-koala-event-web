import React, { useEffect } from 'react';

import {
  DimmedLayer,
  ClearBg1,
  ClearBg2,
  ClearBg3,
  TierIcon,
  KOA,
  ResultWrapper,
  KOAIcon,
  CountWrapper,
  CountLabelTypo,
  CountValueTypo,
  TimerWrapper,
  TimerIcon,
  TitleWrapper,
  ContentsWrapper,
  SubTitleWrapper,
} from './styles';
import useMission from '../../hooks/useMission';
import useClear from '../../hooks/useClear';
import Borders from '../borders';
import { TimerText, TimerValue } from '../../layouts/header/styles';

const ClearScreen = () => {
  const { currentTier } = useMission();
  const { isClear, setClear, type } = useClear();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isClear) {
      timer = setTimeout(() => {
        setClear(false);
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
  };

  return (
    <DimmedLayer $isLoading={isClear} onClick={() => handleDimmedLayerClick()}>
      <ClearBg1 $type={type} />
      <ClearBg2 />
      {type < 2 && (
        <React.Fragment>
          <ClearBg3 $type={type} />
          <TierIcon $type={type} $tier={currentTier.order} />
        </React.Fragment>
      )}
      {type === 2 && (
        <React.Fragment>
          <KOA />
          <ResultWrapper>
            <Borders color='#51290c'>
              <ContentsWrapper>
                <TitleWrapper>Congratulations!</TitleWrapper>
                <SubTitleWrapper>You’ve found the Lucky Coin!</SubTitleWrapper>
                <CountWrapper>
                  <KOAIcon />
                  <CountLabelTypo>Lucky Coin x</CountLabelTypo>
                  <CountValueTypo>5</CountValueTypo>
                </CountWrapper>

                <TimerWrapper>
                  <TimerIcon />
                  <TimerText>
                    <TimerValue>{'00h 00m 00s'}</TimerValue>
                  </TimerText>
                </TimerWrapper>
              </ContentsWrapper>
            </Borders>
          </ResultWrapper>
        </React.Fragment>
      )}
    </DimmedLayer>
  );
};

export default React.memo(ClearScreen);

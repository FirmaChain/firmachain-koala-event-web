import React, { useEffect } from 'react';

import useWallet from '../hooks/useWallet';
import useMission from '../hooks/useMission';
import { IMission, ITier, IUserData } from '../contexts/missionProvider';
import { EVENT_OPEN_STATUS, MISSION_COUNT, TIER_COUNT } from '../constants/common';

import StageLoading from '../components/stageLoading';
import Header from '../layouts/header';
import Intro from '../layouts/intro';
import Footer from '../layouts/footer';
import Stage from '../layouts/stage';

import { MainContainer } from '../styles/common';

const HomePage = () => {
  const { isLogin, logout, address } = useWallet();
  const { getMissionStatus, getMissionList, getTierList, getUserMissionData } = useMission();
  const [isPlayStageLoading, setPlayStageLoading] = React.useState(false);
  const [isOnLoaded, setOnLoaded] = React.useState(false);
  const [inOnEnded, setOnEnded] = React.useState(false);

  const [missionList, setMissionList] = React.useState<IMission[]>([]);
  const [tierList, setTierList] = React.useState<ITier[]>([]);
  const [userData, setUserData] = React.useState<IUserData>({
    currentMissionStep: 0,
    treasure: { count: 0, isAvailable: false, prevDate: '', nextDate: '' },
    floating: { count: 0, isAvailable: false, prevDate: '', nextDate: '' },
  });

  const initialize = async () => {
    try {
      const missionStatus = await getMissionStatus();

      if (missionStatus.status === EVENT_OPEN_STATUS) {
        const [missionList, tierList, userData] = await Promise.all([
          getMissionList(),
          getTierList(),
          getUserMissionData(address),
        ]);

        if (missionList.length !== MISSION_COUNT) throw new Error('Failed to get mission data');
        if (tierList.length !== TIER_COUNT) throw new Error('Failed to get tier data');

        setMissionList(missionList);
        setTierList(tierList);
        setUserData(userData);
      } else {
        throw new Error('Event is not open');
      }
    } catch (e) {
      console.error(e);
      // TODO : error handling
      // logout();
      // window.location.reload();
    }
  };

  useEffect(() => {
    if (isLogin) {
      initialize()
        .then(() => {
          setOnLoaded(true);
          setOnEnded(true);
        })
        .catch(() => {});
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLoading = () => setPlayStageLoading(true);
  const handleOnLoaded = async () => {
    await initialize();
    setOnLoaded(true);
  };
  const handleOnEnded = () => setOnEnded(true);
  const handleOnLogout = () => reset();

  const reset = () => {
    setPlayStageLoading(false);
    setOnLoaded(false);
    setOnEnded(false);
  };

  const shouldShowIntro = React.useMemo(() => !isOnLoaded, [isOnLoaded]);
  const shouldShowStage = React.useMemo(() => isLogin && isOnLoaded, [isLogin, isOnLoaded]);

  return (
    <MainContainer>
      <Header isLogin={shouldShowStage} handleOnLogout={handleOnLogout} />
      <StageLoading isPlayStageLoading={isPlayStageLoading} onLoaded={handleOnLoaded} onEnded={handleOnEnded} />
      {shouldShowIntro && <Intro handleLoading={handleLoading} />}
      {shouldShowStage && <Stage isReady={inOnEnded} missionList={missionList} userData={userData} />}
      <Footer isLogin={shouldShowStage} />
    </MainContainer>
  );
};

export default React.memo(HomePage);

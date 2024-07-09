import React, { useEffect } from 'react';

import useWallet from '../hooks/useWallet';
import useMission from '../hooks/useMission';
import { IAchievement, IMission, ITier, IUserData } from '../contexts/missionProvider';
import { EVENT_OPEN_STATUS, MISSION_COUNT, TIER_COUNT } from '../constants/common';

import StageLoading from '../components/stageLoading';
import Header from '../layouts/header';
import Intro from '../layouts/intro';
import Footer from '../layouts/footer';
import Stage from '../layouts/stage';
import Hud from '../layouts/hud';

import { MainContainer } from '../styles/common';

const HomePage = () => {
  const { isLogin, logout, address } = useWallet();
  const { getMissionStatus, getMissionList, getTierList, getAchievementList, getUserMissionData } = useMission();
  const [isPlayStageLoading, setPlayStageLoading] = React.useState(false);
  const [isLoaded, setLoaded] = React.useState(false);
  const [isEnded, setEnded] = React.useState(false);

  const [missionList, setMissionList] = React.useState<IMission[]>([]);
  const [tierList, setTierList] = React.useState<ITier[]>([]);
  const [achievementList, setAchievementList] = React.useState<IAchievement[]>([]);
  const [userData, setUserData] = React.useState<IUserData>({
    currentMissionStep: 0,
    achievementList: [],
    treasure: { count: 0, isAvailable: false, prevDate: '', nextDate: '' },
    floating: { count: 0, isAvailable: false, prevDate: '', nextDate: '' },
  });

  const initialize = async () => {
    try {
      const missionStatus = await getMissionStatus();

      if (missionStatus.status === EVENT_OPEN_STATUS) {
        const [missionList, tierList, achievementList, userData] = await Promise.all([
          getMissionList(),
          getTierList(),
          getAchievementList(),
          getUserMissionData(address),
        ]);

        // if (missionList.length !== MISSION_COUNT) throw new Error('Failed to get mission data');
        // if (tierList.length !== TIER_COUNT) throw new Error('Failed to get tier data');
        // userData.currentMissionStep = 15;

        setMissionList(missionList);
        setTierList(tierList);
        setAchievementList(achievementList);
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
          setLoaded(true);
          setEnded(true);
        })
        .catch(() => {});
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLoading = () => setPlayStageLoading(true);
  const handleLoaded = async () => {
    await initialize();
    setLoaded(true);
  };
  const handleEnded = () => setEnded(true);
  const handleLogout = () => reset();

  const reset = () => {
    setPlayStageLoading(false);
    setLoaded(false);
    setEnded(false);
  };

  const shouldShowIntro = React.useMemo(() => !isLoaded, [isLoaded]);
  const shouldShowStage = React.useMemo(() => isLogin && isLoaded, [isLogin, isLoaded]);

  return (
    <MainContainer>
      <Header isLogin={shouldShowStage} handleLogout={handleLogout} />
      <StageLoading isPlayStageLoading={isPlayStageLoading} handleLoaded={handleLoaded} handleEnded={handleEnded} />
      {shouldShowIntro && <Intro handleLoading={handleLoading} />}
      {shouldShowStage && <Stage isReady={isEnded} missionList={missionList} userData={userData} />}
      {shouldShowStage && <Hud tierList={tierList} achievementList={achievementList} userData={userData} />}
      <Footer isLogin={shouldShowStage} />
    </MainContainer>
  );
};

export default React.memo(HomePage);

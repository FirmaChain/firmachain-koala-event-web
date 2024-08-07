import { useContext } from 'react';
import { MissionContext } from '../contexts/missionProvider';

const useMission = () => {
  const context = useContext(MissionContext);

  if (!context) throw new Error('useMission must be used within a MissionContext');

  return {
    missionList: context.missionList,
    tierList: context.tierList,
    achievementList: context.achievementList,
    userData: context.userData,
    userRewardDataList: context.userRewardDataList,
    currentTier: context.currentTier,
    getMissionStatus: context.getMissionStatus,
    getMissionList: context.getMissionList,
    getTierList: context.getTierList,
    getAchievementList: context.getAchievementList,
    getUserMissionData: context.getUserMissionData,
    getUserRewardData: context.getUserRewardData,
    completeMission: context.completeMission,
    rewardAchievement: context.rewardAchievement,
    clickFloatingCoin: context.clickFloatingCoin,
    openTreasureBox: context.openTreasureBox,
  };
};

export default useMission;

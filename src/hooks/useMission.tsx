import { useContext } from 'react';
import { MissionContext } from '../contexts/missionProvider';

const useMission = () => {
  const context = useContext(MissionContext);

  if (!context) throw new Error('useMission must be used within a MissionContext');

  return {
    getMissionStatus: context.getMissionStatus,
    getMissionList: context.getMissionList,
    getTierList: context.getTierList,
    getAchievementList: context.getAchievementList,
    getUserMissionData: context.getUserMissionData,
    completeMission: context.completeMission,
    clickFloatingCoin: context.clickFloatingCoin,
    openTreasureBox: context.openTreasureBox,
  };
};

export default useMission;

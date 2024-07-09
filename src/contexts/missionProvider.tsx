import axios from 'axios';
import React from 'react';

interface IMissionContext {
  getMissionStatus: () => Promise<IMissionStatus>;
  getMissionList: () => Promise<IMission[]>;
  getTierList: () => Promise<ITier[]>;
  getAchievementList: () => Promise<IAchievement[]>;
  getUserMissionData: (userAddress: string) => Promise<IUserData>;
  completeMission: () => Promise<void>;
  clickFloatingCoin: () => Promise<void>;
  openTreasureBox: () => Promise<void>;
}

export interface IMissionStatus {
  startDate: string;
  endDate: string;
  status: number;
}

export interface IMission {
  step: number;
  title: string;
  description: string;
  btn1: string;
  btn2: string;
  hint: string;
}

export interface ITier {
  order: number;
  name: string;
  value: number;
}

export interface IAchievement {
  id: number;
  type: string;
  name: string;
  value: number;
}

export interface IUserData {
  currentMissionStep: number;
  achievementList: number[];
  treasure: IParticipation;
  floating: IParticipation;
}

export interface IParticipation {
  count: number;
  isAvailable: boolean;
  prevDate: string;
  nextDate: string;
}

export const MissionContext = React.createContext<IMissionContext | null>(null);

const MissionProvider = ({ children }: { children: React.ReactNode }) => {
  const apiHost = 'http://localhost:3001';
  const getMissionStatus = async (): Promise<IMissionStatus> => {
    try {
      // const response = await axios.get(`${apiHost}/missions/status`);
      // console.log(response.data);

      return {
        startDate: '',
        endDate: '',
        status: 1,
      };
    } catch (e) {
      console.error(e);

      return {
        startDate: '',
        endDate: '',
        status: -1,
      };
    }
  };

  const getMissionList = async (): Promise<IMission[]> => {
    try {
      // const response = await axios.get(`${apiHost}/missions`);
      // const missionList = response.data.result.missionList;

      // if (missionList === undefined) throw new Error('No Mission List');

      let dummyMissionList: IMission[] = [];

      for (let i = 0; i < 26; i++) {
        dummyMissionList.push({
          step: i,
          title: `Mission ${i + 1}`,
          description: `Mission ${i + 1} description`,
          btn1: `button1`,
          btn2: `button2`,
          hint: `hint`,
        });
      }

      return dummyMissionList;
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  const getTierList = async (): Promise<ITier[]> => {
    try {
      // const response = await axios.get(`${apiHost}/missions/tiers`);
      // console.log(response.data);

      return [
        { order: 1, name: 'Tier1', value: 1 },
        { order: 2, name: 'Tier2', value: 2 },
        { order: 3, name: 'Tier3', value: 3 },
        { order: 4, name: 'Tier4', value: 4 },
        { order: 5, name: 'Tier5', value: 5 },
      ];
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  const getAchievementList = async (): Promise<IAchievement[]> => {
    try {
      // const response = await axios.get(`${apiHost}/missions/achievements`);
      // console.log(response.data);

      return [
        { id: 0, type: 'tier', name: '', value: 1 },
        { id: 1, type: 'tier', name: '', value: 1 },
        { id: 2, type: 'tier', name: '', value: 1 },
        { id: 3, type: 'tier', name: '', value: 1 },
        { id: 4, type: 'tier', name: '', value: 1 },
        { id: 5, type: 'medal', name: '', value: 1 },
        { id: 6, type: 'medal', name: '', value: 1 },
        { id: 7, type: 'medal', name: '', value: 1 },
      ];
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  const getUserMissionData = async (userAddress: string): Promise<IUserData> => {
    try {
      // const response = await axios.get(`${apiHost}/missions/${userAddress}`);
      // console.log(response.data);

      return {
        currentMissionStep: 0,
        achievementList: [],
        treasure: { count: 0, isAvailable: false, prevDate: '', nextDate: '' },
        floating: { count: 0, isAvailable: false, prevDate: '', nextDate: '' },
      };
    } catch (e) {
      console.error(e);

      return {
        currentMissionStep: 0,
        achievementList: [],
        treasure: { count: 0, isAvailable: false, prevDate: '', nextDate: '' },
        floating: { count: 0, isAvailable: false, prevDate: '', nextDate: '' },
      };
    }
  };

  const completeMission = async () => {
    try {
      const response = await axios.get(`${apiHost}/missions/complete`);
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const clickFloatingCoin = async () => {
    try {
      const response = await axios.get(`${apiHost}/missions/coin`);
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const openTreasureBox = async () => {
    try {
      const response = await axios.get(`${apiHost}/missions/treasure`);
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <MissionContext.Provider
      value={{
        getMissionStatus,
        getMissionList,
        getTierList,
        getAchievementList,
        getUserMissionData,
        completeMission,
        clickFloatingCoin,
        openTreasureBox,
      }}
    >
      {children}
    </MissionContext.Provider>
  );
};

export default MissionProvider;

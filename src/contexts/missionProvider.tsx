import axios from 'axios';
import React from 'react';

interface IMissionContext {
  getMissionStatus: () => Promise<IMissionStatus>;
  getMissionList: () => Promise<IMission[]>;
  getTierList: () => Promise<ITier[]>;
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

      return [];
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  const getTierList = async (): Promise<ITier[]> => {
    try {
      // const response = await axios.get(`${apiHost}/missions/tiers`);
      // console.log(response.data);

      return [];
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

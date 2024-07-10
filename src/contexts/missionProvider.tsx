// import axios from 'axios';
import React, { useMemo } from 'react';

interface IMissionContext {
  getMissionStatus: () => Promise<IMissionStatus>;
  getMissionList: () => Promise<IMission[]>;
  getTierList: () => Promise<ITier[]>;
  getAchievementList: () => Promise<IAchievement[]>;
  getUserMissionData: (userAddress: string) => Promise<IUserData>;
  completeMission: () => Promise<void>;
  clickFloatingCoin: () => Promise<void>;
  openTreasureBox: () => Promise<void>;
  missionList: IMission[];
  tierList: ITier[];
  achievementList: IAchievement[];
  userData: IUserData;
  currentTier: ITier;
}
export enum MissionType {
  GENERAL = 'general',
  FLOATING = 'floating',
  TREASURE = 'treasure',
  WALLET_CONNECT = 'walletconnect',
  WALLET_BALANCE = 'walletbalance',
  WALLET_SEND = 'walletsend',
  WALLET_STAKING = 'walletstaking',
  WALLET_TRANSACTION = 'wallettransaction',
  QUIZ = 'quiz',
  SURVEY = 'survey',
  TIER = 'tier',
}

export interface IMissionStatus {
  startDate: string;
  endDate: string;
  status: number;
}

export interface IMission {
  step: number;
  type: MissionType;
  title: string;
  description: string;
  btn1: string;
  btn2: string;
  hint: string;
  value: number;
  extra1?: any;
  extra2?: any;
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
  // const apiHost = 'http://localhost:3001';

  const [missionList, setMissionList] = React.useState<IMission[]>([]);
  const [tierList, setTierList] = React.useState<ITier[]>([]);
  const [achievementList, setAchievementList] = React.useState<IAchievement[]>([]);
  const [userData, setUserData] = React.useState<IUserData>({
    currentMissionStep: 0,
    achievementList: [],
    treasure: { count: 0, isAvailable: false, prevDate: '', nextDate: '' },
    floating: { count: 0, isAvailable: false, prevDate: '', nextDate: '' },
  });

  const [dummyStep, setDummyStep] = React.useState(0);

  const getMissionStatus = async (): Promise<IMissionStatus> => {
    try {
      // const response = await axios.get(`${apiHost}/missions/status`);
      // console.log(response.data);
      console.log('getMissionStatus');

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
      console.log('getMissionList');
      let dummyMissionList: IMission[] = [];

      for (let i = 0; i < 26; i++) {
        dummyMissionList.push({
          step: i,
          type: MissionType.GENERAL,
          title: `Mission ${i + 1}`,
          description: `Mission ${i + 1} description`,
          btn1: `button1`,
          btn2: `button2`,
          hint: `hint`,
          value: 1,
          extra1: '',
          extra2: '',
        });
      }

      setMissionList(dummyMissionList);

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
      console.log('getTierList');

      const dummyTierList: ITier[] = [
        { order: 1, name: 'Bronze', value: 3 },
        { order: 2, name: 'Silver', value: 7 },
        { order: 3, name: 'Gold', value: 11 },
        { order: 4, name: 'Platinum', value: 18 },
        { order: 5, name: 'Diamond', value: 25 },
      ];

      setTierList(dummyTierList);
      return dummyTierList;
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  const getAchievementList = async (): Promise<IAchievement[]> => {
    try {
      // const response = await axios.get(`${apiHost}/missions/achievements`);
      // console.log(response.data);
      console.log('getAchievementList');

      const dummyAchievementList: IAchievement[] = [
        { id: 0, type: MissionType.TIER, name: '', value: 1 },
        { id: 1, type: MissionType.TIER, name: '', value: 1 },
        { id: 2, type: MissionType.TIER, name: '', value: 1 },
        { id: 3, type: MissionType.TIER, name: '', value: 1 },
        { id: 4, type: MissionType.TIER, name: '', value: 1 },
        { id: 5, type: 'medal', name: '', value: 1 },
        { id: 6, type: 'medal', name: '', value: 1 },
        { id: 7, type: 'medal', name: '', value: 1 },
      ];

      setAchievementList(dummyAchievementList);

      return dummyAchievementList;
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  const getUserMissionData = async (userAddress: string): Promise<IUserData> => {
    try {
      // const response = await axios.get(`${apiHost}/missions/${userAddress}`);
      // console.log(response.data);
      console.log('getUserMissionData');

      const dummyUserData = {
        currentMissionStep: dummyStep,
        achievementList: [0, 6, 7],
        treasure: { count: 0, isAvailable: false, prevDate: '', nextDate: '' },
        floating: { count: 0, isAvailable: false, prevDate: '', nextDate: '' },
      };

      setUserData(dummyUserData);
      setDummyStep(dummyStep + 1);
      return dummyUserData;
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
      // const response = await axios.get(`${apiHost}/missions/complete`);
      // console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const clickFloatingCoin = async () => {
    try {
      // const response = await axios.get(`${apiHost}/missions/coin`);
      // console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const openTreasureBox = async () => {
    try {
      // const response = await axios.get(`${apiHost}/missions/treasure`);
      // console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const currentTier = useMemo(() => {
    const tier = tierList.reduceRight<ITier | undefined>((found, tier) => {
      if (!found && tier.value < userData.currentMissionStep) {
        return tier;
      }
      return found;
    }, undefined);

    if (!tier) return { order: 0, name: 'Beginner', value: 0 };

    return tier;
  }, [tierList, userData]);

  return (
    <MissionContext.Provider
      value={{
        missionList,
        tierList,
        achievementList,
        userData,
        currentTier,
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

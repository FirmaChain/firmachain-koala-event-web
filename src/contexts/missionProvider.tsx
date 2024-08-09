import axios from 'axios';
import React, { useMemo, useState } from 'react';

import useWallet from '../hooks/useWallet';
import { CHAIN_CONFIG } from '../config';

interface IMissionContext {
  getMissionStatus: () => Promise<IMissionStatus>;
  getMissionList: () => Promise<IMission[]>;
  getTierList: () => Promise<ITier[]>;
  getAchievementList: () => Promise<IAchievement[]>;
  getUserMissionData: (userAddress: string) => Promise<IUserData>;
  getUserRewardData: (userAddress: string) => Promise<IRewardData[]>;
  completeMission: (userAddress: string, data?: any) => Promise<{ isComplete: boolean }>;
  rewardAchievement: (userAddress: string) => Promise<{ isComplete: boolean; message: string }>;
  clickFloatingCoin: (userAddress: string) => Promise<{ isComplete: boolean }>;
  openTreasureBox: (userAddress: string) => Promise<{ isComplete: boolean }>;
  missionList: IMission[];
  tierList: ITier[];
  achievementList: IAchievement[];
  userData: IUserData;
  userRewardDataList: IRewardData[];
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
  achievementId: number;
}

export interface IAchievement {
  id: number;
  type: string;
  name: string;
  value: number;
}

export interface IUserData {
  userAddress: string;
  step: number;
  achievementIdList: number[];
  floating: IParticipation;
  treasure: IParticipation;
  createdAt?: string;
  updatedAt?: string;
}

export interface IRewardData {
  userAddress: string;
  achievementId: number;
  isReward: boolean;
  isPending: boolean;
  fct: string;
  nftId: string;
  txHash: string;
  rewardAt: string;
  addedAt: string;
}

export interface IParticipation {
  count: number;
  isAvailable: boolean;
  prevDate: string;
  nextDate: string;
}

export const MissionContext = React.createContext<IMissionContext | null>(null);

const MissionProvider = ({ children }: { children: React.ReactNode }) => {
  const { address, logout } = useWallet();

  const [missionList, setMissionList] = useState<IMission[]>([]);
  const [tierList, setTierList] = useState<ITier[]>([]);
  const [achievementList, setAchievementList] = useState<IAchievement[]>([]);
  const [userRewardDataList, setUserRewardDataList] = useState<IRewardData[]>([]);
  const [userData, setUserData] = useState<IUserData>({
    userAddress: address,
    step: 0,
    achievementIdList: [],
    treasure: { count: 0, isAvailable: false, prevDate: '', nextDate: '' },
    floating: { count: 0, isAvailable: false, prevDate: '', nextDate: '' },
  });

  const getMissionStatus = async (): Promise<IMissionStatus> => {
    try {
      const response = await axios.get(`${CHAIN_CONFIG.API_HOST}/missions/status`);
      const status = response.data.result;

      return status;
    } catch (e) {
      console.error(e);

      return {
        status: -1,
        startDate: '',
        endDate: '',
      };
    }
  };

  const getMissionList = async (): Promise<IMission[]> => {
    try {
      const response = await axios.get(`${CHAIN_CONFIG.API_HOST}/missions`);
      const missionList = response.data.result.missionList;
      if (missionList === undefined) throw new Error('No Mission List');

      setMissionList(missionList);

      return missionList;
    } catch (e) {
      logout();
      console.error(e);
      return [];
    }
  };

  const getTierList = async (): Promise<ITier[]> => {
    try {
      const response = await axios.get(`${CHAIN_CONFIG.API_HOST}/missions/tiers`);
      const tierList = response.data.result.tierList;

      setTierList(tierList);

      return tierList;
    } catch (e) {
      logout();
      console.error(e);
      return [];
    }
  };

  const getAchievementList = async (): Promise<IAchievement[]> => {
    try {
      const response = await axios.get(`${CHAIN_CONFIG.API_HOST}/missions/achievements`);
      const achievementList = response.data.result.achievementList;

      setAchievementList(achievementList);

      return achievementList;
    } catch (e) {
      logout();
      console.error(e);
      return [];
    }
  };

  const getUserMissionData = async (userAddress: string): Promise<IUserData> => {
    try {
      const response = await axios.get(`${CHAIN_CONFIG.API_HOST}/missions/${userAddress}`);
      const userData = response.data.result;

      setUserData(userData);

      return userData;
    } catch (e) {
      logout();
      console.error(e);

      return {
        userAddress: address,
        step: 0,
        achievementIdList: [],
        treasure: { count: 0, isAvailable: false, prevDate: '', nextDate: '' },
        floating: { count: 0, isAvailable: false, prevDate: '', nextDate: '' },
      };
    }
  };

  const getUserRewardData = async (userAddress: string): Promise<IRewardData[]> => {
    try {
      const response = await axios.get(`${CHAIN_CONFIG.API_HOST}/missions/${userAddress}/rewards`);
      const { rewardDataList } = response.data.result;

      setUserRewardDataList(rewardDataList);

      return rewardDataList;
    } catch (e) {
      logout();
      console.error(e);

      return [];
    }
  };

  const completeMission = async (userAddress: string, data = {}): Promise<{ isComplete: boolean }> => {
    try {
      const response = await axios.post(`${CHAIN_CONFIG.API_HOST}/missions/complete`, { userAddress, data });
      let isComplete = false;
      if (response.data.code === 0) {
        isComplete = response.data.result.isComplete;
      }

      return {
        isComplete,
      };
    } catch (e) {
      logout();
      console.error(e);
      return {
        isComplete: false,
      };
    }
  };

  const rewardAchievement = async (userAddress: string): Promise<{ isComplete: boolean; message: string }> => {
    try {
      const response = await axios.post(`${CHAIN_CONFIG.API_HOST}/missions/reward`, { userAddress });
      let isComplete = false;
      let message = '';
      if (response.data.code === 0) {
        isComplete = response.data.result.isComplete;
        message = response.data.result.message;
      }

      return {
        isComplete,
        message,
      };
    } catch (e) {
      logout();
      console.error(e);
      return {
        isComplete: false,
        message: 'Failed to apply for a reward.',
      };
    }
  };

  const clickFloatingCoin = async (userAddress: string): Promise<{ isComplete: boolean }> => {
    try {
      const response = await axios.post(`${CHAIN_CONFIG.API_HOST}/missions/coin`, { userAddress });
      let isComplete = false;
      if (response.data.code === 0) {
        isComplete = response.data.result.isComplete;
      }

      return {
        isComplete,
      };
    } catch (e) {
      logout();
      console.error(e);
      return {
        isComplete: false,
      };
    }
  };

  const openTreasureBox = async (userAddress: string): Promise<{ isComplete: boolean }> => {
    try {
      const response = await axios.post(`${CHAIN_CONFIG.API_HOST}/missions/treasure`, { userAddress });
      let isComplete = false;
      if (response.data.code === 0) {
        isComplete = response.data.result.isComplete;
      }

      return {
        isComplete,
      };
    } catch (e) {
      logout();
      console.error(e);
      return {
        isComplete: false,
      };
    }
  };

  const currentTier = useMemo(() => {
    const tier = tierList.reduceRight<ITier | undefined>((found, tier) => {
      if (!found) {
        const targetValue = achievementList.find((achievement) => achievement.id === tier.achievementId)?.value!;
        if (targetValue < userData.step) {
          return tier;
        }
      }
      return found;
    }, undefined);

    if (!tier) return { order: 0, name: 'Beginner', achievementId: -1 };

    return tier;
  }, [tierList, userData]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MissionContext.Provider
      value={{
        missionList,
        tierList,
        achievementList,
        userData,
        userRewardDataList,
        currentTier,
        getMissionStatus,
        getMissionList,
        getTierList,
        getAchievementList,
        getUserMissionData,
        getUserRewardData,
        completeMission,
        rewardAchievement,
        clickFloatingCoin,
        openTreasureBox,
      }}
    >
      {children}
    </MissionContext.Provider>
  );
};

export default MissionProvider;

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSnackbar } from 'notistack';

import useClear from '../../../hooks/useClear';
import useMission from '../../../hooks/useMission';
import useWallet from '../../../hooks/useWallet';
import useModal from '../../../hooks/useModal';
import useScreen from '../../../hooks/useScreen';
import { MissionType } from '../../../contexts/missionProvider';
import { MISSION_COUNT } from '../../../constants/common';

import SectionBoardDesktop from './desktop';
import SectionBoardMobile from './mobile';

import theme from '../../../styles/themes';
import {
  Container,
  Fance,
  GoToCharacter,
  BackArrow,
  Plate,
  TreasureBoxWrapper,
  RewardIcon,
  TreasureBoxImage,
  RewardEffect,
} from './styles';

const SectionBoard = ({
  isReady,
  setLoading,
  setLoadingOpacity,
}: {
  isReady: boolean;
  setLoading: (isLoading: boolean) => void;
  setLoadingOpacity: (opacity: string) => void;
}) => {
  const { address } = useWallet();
  const { enqueueSnackbar } = useSnackbar();
  const { isClear, setClear, setType, setRewardValue } = useClear();
  const { isMobile } = useScreen();
  const modal = useModal();
  const {
    missionList,
    tierList,
    achievementList,
    userData,
    userRewardDataList,
    completeMission,
    rewardAchievement,
    getUserMissionData,
    getUserRewardData,
  } = useMission();

  const [stepIndex, setStepIndex] = useState(0);
  const [btnStep, setBtnStep] = useState(0);
  const [jumpAnimate, setJumpAnimate] = useState(false);
  const [spawnAnimate, setSpawnAnimate] = useState(false);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [waitingClear, setWaitingClear] = useState(false);
  const [isActiveBack, setIsActiveBack] = useState(false);
  const [isProcess, setProcess] = useState(false);
  const [isProcessReward, setProcessReward] = useState(false);
  const [rewardFCT, setRewardFCT] = useState('0');

  const characterRef = useRef(null);
  const stageRefs = useRef<HTMLDivElement[]>([]);

  const stageTier = useMemo(() => {
    return tierList.map((tier) => {
      return {
        image: theme.urls.stageTierList[tier.order - 1],
        value: achievementList.find((achievement) => achievement.id === tier.achievementId)!.value,
      };
    });
  }, [achievementList, tierList]);

  const currentReward = useMemo(() => {
    const rewards = userRewardDataList.filter((reward) => reward.isReward === false && reward.isPending === false);

    if (rewards.length === 0) return null;

    return rewards.reduce((oldest, reward) => {
      return new Date(reward.addedAt) < new Date(oldest.addedAt) ? reward : oldest;
    });
  }, [userRewardDataList]);

  useEffect(() => {
    if (isReady) {
      setStepIndex(userData.step);
      moveInitCurrentStep();
      const timeout = setTimeout(
        () => {
          playSpawnAnimation();
          setTimeout(() => setShowMessageBox(true), 800);
        },
        stepIndex === 0 ? 0 : 1000
      );

      return () => clearTimeout(timeout);
    }
  }, [isReady, stepIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const handleAnimationEnd = () => {
      setJumpAnimate(false);
      setShowMessageBox(true);
    };

    const node: any = characterRef.current;
    if (node) node.addEventListener('animationend', handleAnimationEnd);

    return () => {
      if (node) node.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [stepIndex]);

  useEffect(() => {
    if (isClear && waitingClear === false) {
      setWaitingClear(true);
    } else if (isClear === false && waitingClear) {
      setWaitingClear(false);
      getUserMissionData(address);
      getUserRewardData(address);

      if (rewardFCT !== '0') {
        setClear(true);
        setType(201);
        setRewardValue(rewardFCT);
        setRewardFCT('0');
      }
    }
  }, [isClear, waitingClear]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (stepIndex !== userData.step) {
      setTimeout(() => {
        setStepIndex(userData.step);
        setType(100);
        setBtnStep(0);
        setClear(false);

        toggleAnimation();
      }, 0);
    }
  }, [userData.step]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const handleScroll = () => {
      const currentStage = stageRefs.current[stepIndex];

      if (currentStage) {
        const rect = currentStage.getBoundingClientRect();
        const offsetTop = window.pageYOffset + rect.top - window.innerHeight * 0.7;
        const scrollPosition = window.pageYOffset;

        if (scrollPosition > offsetTop + 300 || scrollPosition < offsetTop - 300) {
          setIsActiveBack(true);
        } else {
          setIsActiveBack(false);
        }
      } else {
        setIsActiveBack(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [stepIndex, stageRefs]);

  const playSpawnAnimation = () => {
    setSpawnAnimate(true);
  };

  const toggleAnimation = () => {
    moveStep();
  };

  const moveInitCurrentStep = () => {
    if (stepIndex === 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const currentStage = stageRefs.current[stepIndex];
    if (currentStage) {
      const rect = currentStage.getBoundingClientRect();
      const offsetTop = window.pageYOffset + rect.top - window.innerHeight * (isMobile ? 0.5 : 0.7);
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const moveStep = () => {
    if (stepIndex < MISSION_COUNT - 1) {
      setShowMessageBox(false);
      setJumpAnimate(true);
    }
  };

  const handleMissionButton = async (step?: number) => {
    const currentMission = missionList[stepIndex];
    const checkStep = step !== undefined ? step : btnStep;

    if (currentMission.type === MissionType.GENERAL && checkStep === 0) {
      setBtnStep(1);
      window.open(currentMission.extra1, '_blank');
    } else {
      switch (currentMission.type) {
        case MissionType.GENERAL:
        case MissionType.FLOATING:
        case MissionType.TREASURE:
        case MissionType.WALLET_CONNECT:
        case MissionType.WALLET_BALANCE:
        case MissionType.WALLET_SEND:
        case MissionType.WALLET_STAKING:
        case MissionType.WALLET_TRANSACTION:
        case MissionType.TIER:
          if (isProcess) return;

          try {
            setProcess(true);
            setLoadingOpacity('0.8');
            setLoading(true);

            const result = await completeMission(address);

            setLoading(false);
            setLoadingOpacity('0.98');

            if (result.isComplete) {
              if (currentMission.type === MissionType.TIER) {
                setType(101);
              } else {
                setType(100);
              }
              setClear(true);
              setProcess(false);
            } else {
              throw new Error('Mission is not complete');
            }
          } catch (e) {
            console.error(e);
            setProcess(false);
            enqueueSnackbar('Failed mission', { variant: 'error', autoHideDuration: 1500 });
          }

          break;
        case MissionType.QUIZ:
          modal.openModal({ type: 'quiz', props: { currentMission } });
          break;
        case MissionType.SURVEY:
          modal.openModal({ type: 'survey', props: { currentMission } });
          break;
      }
    }
  };

  const handleRewardButton = async () => {
    if (currentReward === null) return;
    if (isProcessReward) return;

    setProcessReward(true);
    setLoadingOpacity('0.8');
    setLoading(true);

    setTimeout(async () => {
      try {
        const { isComplete, message } = await rewardAchievement(address);
        setLoading(false);
        setLoadingOpacity('0.98');

        if (isComplete) {
          setType(currentReward.achievementId);
          setClear(true);

          setRewardFCT(currentReward.fct);
        } else {
          throw new Error(message);
        }
      } catch (e: any) {
        enqueueSnackbar(e.message, { variant: 'error', autoHideDuration: 1500 });
      } finally {
        setProcessReward(false);
        getUserRewardData(address);
      }
    }, 1000);
  };

  return (
    <Container>
      {isActiveBack && (
        <GoToCharacter onClick={() => moveInitCurrentStep()}>
          <BackArrow />
          My Mission
        </GoToCharacter>
      )}

      <Fance />

      <Plate />
      <TreasureBoxWrapper $active={currentReward !== null} onClick={() => handleRewardButton()}>
        <RewardIcon $src={currentReward !== null ? theme.urls.tierList[currentReward?.achievementId!] : ''} />
        <TreasureBoxImage />
        <RewardEffect />
      </TreasureBoxWrapper>

      {isMobile ? (
        <SectionBoardMobile
          stepIndex={stepIndex}
          btnStep={btnStep}
          stageTier={stageTier}
          spawnAnimate={spawnAnimate}
          showMessageBox={showMessageBox}
          jumpAnimate={jumpAnimate}
          characterRef={characterRef}
          stageRefs={stageRefs}
          missionList={missionList}
          handleMissionButton={handleMissionButton}
        />
      ) : (
        <SectionBoardDesktop
          stepIndex={stepIndex}
          btnStep={btnStep}
          stageTier={stageTier}
          spawnAnimate={spawnAnimate}
          showMessageBox={showMessageBox}
          jumpAnimate={jumpAnimate}
          characterRef={characterRef}
          stageRefs={stageRefs}
          missionList={missionList}
          handleMissionButton={handleMissionButton}
        />
      )}
    </Container>
  );
};

export default React.memo(SectionBoard);

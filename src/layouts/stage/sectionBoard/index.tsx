import React, { useEffect, useRef, useState } from 'react';
import { useSnackbar } from 'notistack';

import useClear from '../../../hooks/useClear';
import useMission from '../../../hooks/useMission';
import useWallet from '../../../hooks/useWallet';
import useModal from '../../../hooks/useModal';
import { MissionType } from '../../../contexts/missionProvider';
import { FIRMACHAIN_URL, MEDIUM_URL, MISSION_COUNT } from '../../../constants/common';

import theme from '../../../styles/themes';
import {
  Container,
  BackgroundWrapper,
  BackgroundGrass,
  BackgroundRoad,
  CharacterWrapper,
  CharacterImage,
  Fance,
  MissionMessageBox,
  MissionLabel,
  MissionTitleTypo,
  MissionDescriptionTypo,
  PrimaryButton,
  MissionLabelTypo,
  MissionLabelIcon,
  ButtonLeft,
  ButtonCenter,
  ButtonRight,
  StageStone,
  SignWood,
  SignWood2,
  Character4Image,
  StarStone,
  Character7Image,
  Tree,
  CharacterStone,
  GemBox,
  Character8Image,
  Tree2,
  Character3Image,
  Chest2,
  Gem,
  Character9Image,
  TorchLeft,
  Character11Image,
  TorchRight,
  TorchWrapper,
  MissionMessageBoxTop,
  MissionMessageBoxMiddle,
  MissionMessageBoxBottom,
  GoToCharacter,
  BackArrow,
  Staking,
  Shop,
  KOASpin,
  Diamond,
} from './styles';
import HoverImage from '../../../components/HoverImage';

const stages = [
  { xOffset: 0, yOffset: 0, flip: true, text: '1' }, // 1
  { xOffset: 0, yOffset: 1, flip: true, text: '2' }, // 2
  { xOffset: 0, yOffset: 2, flip: true, text: '3' }, // 3
  { xOffset: 0, yOffset: 3, flip: true, text: '4' }, // 4
  { xOffset: 1, yOffset: 3, flip: true, text: '5' }, // 5
  { xOffset: 1, yOffset: 4, flip: false, text: '6' }, // 6
  { xOffset: 1, yOffset: 5, flip: false, text: '7' }, // 7
  { xOffset: 1, yOffset: 6, flip: false, text: '8' }, // 8
  { xOffset: 0, yOffset: 6, flip: false, text: '9' }, // 9
  { xOffset: -1, yOffset: 6, flip: false, text: '10' }, // 10
  { xOffset: -1, yOffset: 7, flip: true, text: '11' }, // 11
  { xOffset: -1, yOffset: 8, flip: true, text: '12' }, // 12
  { xOffset: -1, yOffset: 9, flip: true, text: '13' }, // 13
  { xOffset: 0, yOffset: 9, flip: true, text: '14' }, // 14
  { xOffset: 1, yOffset: 9, flip: true, text: '15' }, // 15
  { xOffset: 1, yOffset: 10, flip: false, text: '16' }, // 16
  { xOffset: 1, yOffset: 11, flip: false, text: '17' }, // 17
  { xOffset: 1, yOffset: 12, flip: false, text: '18' }, // 18
  { xOffset: 0, yOffset: 12, flip: false, text: '19' }, // 19
  { xOffset: -1, yOffset: 12, flip: false, text: '20' }, // 20
  { xOffset: -1, yOffset: 13, flip: true, text: '21' }, // 21
  { xOffset: -1, yOffset: 14, flip: true, text: '22' }, // 22
  { xOffset: -1, yOffset: 15, flip: true, text: '23' }, // 23
  { xOffset: -1, yOffset: 16, flip: true, text: '24' }, // 24
  { xOffset: 0, yOffset: 16, flip: true, text: '25' }, // 25
  { xOffset: 1, yOffset: 16, flip: true, text: '26' }, // 26
  { xOffset: 1, yOffset: 17.3, flip: false, text: 'Goal' }, // Goal
];

const SectionBoard = ({ isReady }: { isReady: boolean }) => {
  const { address } = useWallet();
  const { enqueueSnackbar } = useSnackbar();
  const { isClear, setClear, setType } = useClear();
  const { missionList, userData, completeMission, getUserMissionData } = useMission();
  const modal = useModal();

  const [stepIndex, setStepIndex] = useState(0);
  const [btnStep, setBtnStep] = useState(0);
  const [jumpAnimate, setJumpAnimate] = useState(false);
  const [spawnAnimate, setSpawnAnimate] = useState(false);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [waitingClear, setWaitingClear] = useState(false);
  const [isActiveBack, setIsActiveBack] = useState(false);

  const characterRef = useRef(null);
  const stageRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (isReady) {
      setStepIndex(userData.currentMissionStep);
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
      console.log('CLEAR ON');
      setWaitingClear(true);
    } else if (isClear === false && waitingClear) {
      console.log('CLEAR OFF');
      setWaitingClear(false);
      getUserMissionData(address);
    }
  }, [isClear, waitingClear]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (stepIndex !== userData.currentMissionStep) {
      console.log('CHANGED STEP', userData.currentMissionStep);
      setTimeout(() => {
        setStepIndex(userData.currentMissionStep);
        setType(0);
        setBtnStep(0);
        setClear(false);

        toggleAnimation();
      }, 0);
    }
  }, [userData.currentMissionStep]); // eslint-disable-line react-hooks/exhaustive-deps

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
      const offsetTop = window.pageYOffset + rect.top - window.innerHeight * 0.7;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const moveStep = () => {
    if (stepIndex < stages.length - 1) {
      setShowMessageBox(false);
      setJumpAnimate(true);
    }
  };

  const handleMissionButton = () => {
    const currentMission = missionList[stepIndex];
    if (currentMission.type === MissionType.GENERAL && btnStep === 0) {
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
          completeMission(address)
            .then((result) => {
              if (result.isComplete) {
                if (currentMission.type === MissionType.TIER) setType(1);
                setClear(true);
              } else {
                throw new Error('Mission is not complete');
              }
            })
            .catch((e) => {
              console.error(e);
              enqueueSnackbar('Failed check mission', { variant: 'error', autoHideDuration: 1500 });
            });
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

  return (
    <Container>
      {isActiveBack && (
        <GoToCharacter onClick={() => moveInitCurrentStep()}>
          <BackArrow />
          My Mission
        </GoToCharacter>
      )}

      <Fance />
      <MissionMessageBox
        $xOffset={stages[stepIndex].xOffset}
        $yOffset={stages[stepIndex].yOffset}
        $show={showMessageBox}
      >
        <MissionMessageBoxTop />
        <MissionMessageBoxMiddle>
          <MissionLabel>
            <MissionLabelIcon src={theme.urls.sword} />
            <MissionLabelTypo>
              {stepIndex < MISSION_COUNT - 1 ? `Mission ${stepIndex + 1}` : 'Completed'}
            </MissionLabelTypo>
          </MissionLabel>
          <MissionTitleTypo>{missionList[stepIndex].title}</MissionTitleTypo>
          <MissionDescriptionTypo>{missionList[stepIndex].description}</MissionDescriptionTypo>
          <PrimaryButton onClick={() => handleMissionButton()}>
            <ButtonLeft />
            <ButtonCenter>{btnStep === 0 ? missionList[stepIndex].btn1 : missionList[stepIndex].btn2}</ButtonCenter>
            <ButtonRight />
          </PrimaryButton>
        </MissionMessageBoxMiddle>
        <MissionMessageBoxBottom />
      </MissionMessageBox>
      <CharacterWrapper
        $xOffset={stages[stepIndex].xOffset}
        $yOffset={stages[stepIndex].yOffset}
        $flip={stages[stepIndex].flip}
        $animate={spawnAnimate}
      >
        <CharacterImage ref={characterRef} $animate={jumpAnimate} $isRun={false} />
      </CharacterWrapper>

      <BackgroundWrapper>
        <TorchWrapper $active={stepIndex >= 2}>
          <TorchLeft />
          <Character11Image />
          <TorchRight />
        </TorchWrapper>

        <Staking>
          <HoverImage initSrc={theme.urls.staking} hoverSrc={theme.urls.stakingHover} />
        </Staking>
        <KOASpin />
        <Shop>
          <HoverImage initSrc={theme.urls.shop} hoverSrc={theme.urls.shopHover} />
        </Shop>
        <Diamond />

        <SignWood onClick={() => window.open(FIRMACHAIN_URL)}>
          <HoverImage initSrc={theme.urls.signNormal} hoverSrc={theme.urls.signHover} />
        </SignWood>
        <SignWood2 onClick={() => window.open(MEDIUM_URL)}>
          <HoverImage initSrc={theme.urls.signNormal2} hoverSrc={theme.urls.signHover2} />
        </SignWood2>

        <StarStone />
        <CharacterStone />
        <Tree />
        <Tree2 />
        <GemBox />
        <Chest2 />
        <Gem />

        <Character4Image />
        <Character7Image />
        <Character8Image />
        <Character3Image />
        <Character9Image />

        <BackgroundGrass />
        <BackgroundRoad />
        {stages.map((stage, index) => (
          <StageStone
            ref={(el) => (stageRefs.current[index] = el!)}
            key={index}
            $active={stepIndex === index}
            $xOffset={stage.xOffset}
            $yOffset={stage.yOffset}
          >
            {stage.text}
          </StageStone>
        ))}
      </BackgroundWrapper>
    </Container>
  );
};

export default React.memo(SectionBoard);

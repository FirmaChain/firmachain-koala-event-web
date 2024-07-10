import React, { useEffect, useRef, useState } from 'react';

import useClear from '../../../hooks/useClear';
import { MissionType } from '../../../contexts/missionProvider';

import theme from '../../../styles/themes';
import {
  Container,
  BackgroundWrapper,
  BackgroundGrass,
  BackgroundRoad,
  CharacterWrapper,
  CharacterImage,
  Fance,
  MissionBoardImage,
  BirdImage,
  Character6Image,
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
} from './styles';
import useMission from '../../../hooks/useMission';
import useWallet from '../../../hooks/useWallet';

const stages = [
  { xOffset: 0, yOffset: 0, flip: true }, // 1
  { xOffset: 0, yOffset: 1, flip: true }, // 2
  { xOffset: 0, yOffset: 2, flip: true }, // 3
  { xOffset: 0, yOffset: 3, flip: true }, // 4
  { xOffset: 1, yOffset: 3, flip: true }, // 5
  { xOffset: 1, yOffset: 4, flip: false }, // 6
  { xOffset: 1, yOffset: 5, flip: false }, // 7
  { xOffset: 1, yOffset: 6, flip: false }, // 8
  { xOffset: 0, yOffset: 6, flip: false }, // 9
  { xOffset: -1, yOffset: 6, flip: false }, // 10
  { xOffset: -1, yOffset: 7, flip: true }, // 11
  { xOffset: -1, yOffset: 8, flip: true }, // 12
  { xOffset: -1, yOffset: 9, flip: true }, // 13
  { xOffset: 0, yOffset: 9, flip: true }, // 14
  { xOffset: 1, yOffset: 9, flip: true }, // 15
  { xOffset: 1, yOffset: 10, flip: false }, // 16
  { xOffset: 1, yOffset: 11, flip: false }, // 17
  { xOffset: 1, yOffset: 12, flip: false }, // 18
  { xOffset: 0, yOffset: 12, flip: false }, // 19
  { xOffset: -1, yOffset: 12, flip: false }, // 20
  { xOffset: -1, yOffset: 13, flip: true }, // 21
  { xOffset: -1, yOffset: 14, flip: true }, // 22
  { xOffset: -1, yOffset: 15, flip: true }, // 23
  { xOffset: -1, yOffset: 16, flip: true }, // 24
  { xOffset: 0, yOffset: 16, flip: true }, // 25
  { xOffset: 1, yOffset: 16, flip: true }, // 26
];

const SectionBoard = ({ isReady }: { isReady: boolean }) => {
  const { address } = useWallet();
  const { isClear, setClear, setType } = useClear();
  const { missionList, userData, completeMission, getUserMissionData } = useMission();

  const [stepIndex, setStepIndex] = useState(0);
  const [btnStep, setBtnStep] = useState(0);
  const [jumpAnimate, setJumpAnimate] = useState(false);
  const [spawnAnimate, setSpawnAnimate] = useState(false);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [waitingClear, setWaitingClear] = useState(false);

  const characterRef = useRef(null);
  const stageRefs = useRef<HTMLDivElement[]>([]);

  // const stepIndex = useMemo(() => userData.currentMissionStep, [userData.currentMissionStep]);

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

      completeMission()
        .then(() => {
          getUserMissionData(address);
        })
        .catch(() => {});
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

  const playSpawnAnimation = () => {
    setSpawnAnimate(true);
  };

  const toggleAnimation = () => {
    moveStep();
  };

  const moveInitCurrentStep = () => {
    if (stepIndex === 0) return;

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
      if (currentMission.type === MissionType.TIER) setType(1);
      setClear(true);
    }
  };

  return (
    <Container>
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
            <MissionLabelTypo>Mission {stepIndex + 1}</MissionLabelTypo>
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

        <MissionBoardImage />
        <BirdImage />

        <SignWood />
        <SignWood2 />
        <StarStone />
        <CharacterStone />
        <Tree />
        <Tree2 />
        <GemBox />
        <Chest2 />
        <Gem />

        <Character6Image />
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
            {index + 1}
          </StageStone>
        ))}
      </BackgroundWrapper>
    </Container>
  );
};

export default React.memo(SectionBoard);

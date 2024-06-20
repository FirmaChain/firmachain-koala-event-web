import React, { useEffect, useRef, useState } from 'react';

import { IMission, IUserData } from '../../../contexts/missionProvider';

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

const SectionBoard = ({
  isReady,
  missionList,
  userData,
}: {
  isReady: boolean;
  missionList: IMission[];
  userData: IUserData;
}) => {
  const [stepIndex, setStepIndex] = useState(userData.currentMissionStep);
  const [jumpAnimate, setJumpAnimate] = useState(false);
  const [spawnAnimate, setSpawnAnimate] = useState(false);
  const [showMessageBox, setShowMessageBox] = useState(false);

  const characterRef = useRef(null);
  const stageRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (isReady) {
      const handleAnimations = () => {
        playSpawnAnimation();
        setTimeout(() => setShowMessageBox(true), 800);
      };

      moveInitCurrentStep();
      setTimeout(handleAnimations, stepIndex === 0 ? 0 : 1000);
    }
  }, [isReady]); // eslint-disable-line react-hooks/exhaustive-deps

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
      setStepIndex(stepIndex + 1);
      setShowMessageBox(false);
      setJumpAnimate(true);
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
            <MissionLabelTypo>Mission 1</MissionLabelTypo>
          </MissionLabel>
          <MissionTitleTypo>Let’s open today’s treasure box!</MissionTitleTypo>
          <MissionDescriptionTypo>Click on the treasure box at the top of the page.</MissionDescriptionTypo>
          <PrimaryButton>
            <ButtonLeft />
            <ButtonCenter>Go</ButtonCenter>
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
        onClick={toggleAnimation}
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

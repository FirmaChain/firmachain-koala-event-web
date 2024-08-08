import React from 'react';

import useModal from '../../../../hooks/useModal';
import { IMission } from '../../../../contexts/missionProvider';
import { FIRMACHAIN_URL } from '../../../../constants/common';

import HoverImage from '../../../../components/HoverImage';
import theme from '../../../../styles/themes';

import {
  BackgroundMobileGrass,
  BackgroundMobileRoad,
  BackgroundMobileWrapper,
  Character11Image,
  Character11MobileImage,
  Character11Plate,
  Character3MobileImage,
  Character4MobileImage,
  Character7MobileImage,
  CharacterMobileImage,
  CharacterMobileWrapper,
  Charceter9MobileImage,
  Chest2Mobile,
  Chest3Mobile,
  GemBoxMobile,
  GemsMobile,
  GoalEffectMobile,
  MissionMessageBoxMobile,
  PotionMobile,
  SignWoodMobile,
  StageStoneGoalMobile,
  StageStoneMobile,
  StartStone,
  TorchLeft,
  TorchRight,
  TorchWrapper,
  Tree2Mobile,
  TreeMobile,
} from '../styles';

const stages = [
  { xOffset: 0, yOffset: 0, flip: true, text: '1' }, // 1
  { xOffset: 0, yOffset: 1, flip: true, text: '2' }, // 2
  { xOffset: 0, yOffset: 2, flip: true, text: '3' }, // 3
  { xOffset: 0, yOffset: 3, flip: true, text: '4' }, // 4
  { xOffset: 0, yOffset: 4, flip: true, text: '5' }, // 5
  { xOffset: 0, yOffset: 5, flip: true, text: '6' }, // 6
  { xOffset: 0, yOffset: 6, flip: true, text: '7' }, // 7
  { xOffset: 0, yOffset: 7, flip: true, text: '8' }, // 8
  { xOffset: 0, yOffset: 8, flip: true, text: '9' }, // 9
  { xOffset: 0, yOffset: 9, flip: true, text: '10' }, // 10
  { xOffset: 0, yOffset: 10, flip: true, text: '11' }, // 11
  { xOffset: 0, yOffset: 11, flip: true, text: '12' }, // 12
  { xOffset: 0, yOffset: 12, flip: true, text: '13' }, // 13
  { xOffset: 0, yOffset: 13, flip: true, text: '14' }, // 14
  { xOffset: 0, yOffset: 14, flip: true, text: '15' }, // 15
  { xOffset: 0, yOffset: 15, flip: true, text: '16' }, // 16
  { xOffset: 0, yOffset: 16, flip: true, text: '17' }, // 17
  { xOffset: 0, yOffset: 17, flip: true, text: '18' }, // 18
  { xOffset: 0, yOffset: 18, flip: true, text: '19' }, // 19
  { xOffset: 0, yOffset: 19, flip: true, text: '20' }, // 20
  { xOffset: 0, yOffset: 20, flip: true, text: '21' }, // 21
  { xOffset: 0, yOffset: 21, flip: true, text: '22' }, // 22
  { xOffset: 0, yOffset: 22, flip: true, text: '23' }, // 23
  { xOffset: 0, yOffset: 23, flip: true, text: '24' }, // 24
  { xOffset: 0, yOffset: 24, flip: true, text: '25' }, // 25
  { xOffset: 0, yOffset: 25, flip: true, text: '26' }, // 26
  { xOffset: 0, yOffset: 26, flip: true, text: 'Goal' }, // Goal
];

const SectionBoardMobile = ({
  stepIndex,
  btnStep,
  stageTier,
  spawnAnimate,
  showMessageBox,
  jumpAnimate,
  characterRef,
  stageRefs,
  missionList,
  handleMissionButton,
}: {
  stepIndex: number;
  btnStep: number;
  stageTier: {
    image: {
      enable: string;
      disable: string;
    };
    value: number;
  }[];
  spawnAnimate: boolean;
  showMessageBox: boolean;
  jumpAnimate: boolean;
  characterRef: any;
  stageRefs: any;
  missionList: IMission[];
  handleMissionButton: (step?: number) => Promise<void>;
}) => {
  const modal = useModal();

  const handleOpenMissionModal = () => {
    const currentMission = missionList[stepIndex];
    modal.openModal({ type: 'mission', props: { btnStep, stepIndex, currentMission, handleMissionButton } });
  };

  return (
    <React.Fragment>
      <CharacterMobileWrapper
        $xOffset={stages[stepIndex].xOffset}
        $yOffset={stages[stepIndex].yOffset}
        $flip={stages[stepIndex].flip}
        $animate={spawnAnimate}
      >
        <CharacterMobileImage ref={characterRef} $animate={jumpAnimate} $isRun={false} />
      </CharacterMobileWrapper>

      <MissionMessageBoxMobile
        $xOffset={stages[stepIndex].xOffset}
        $yOffset={stages[stepIndex].yOffset}
        $show={showMessageBox}
        $isGoal={stepIndex === stages.length - 1}
        onClick={() => handleOpenMissionModal()}
      />

      <BackgroundMobileWrapper>
        <BackgroundMobileGrass />
        <BackgroundMobileRoad />
        <SignWoodMobile onClick={() => window.open(FIRMACHAIN_URL)}>
          <HoverImage initSrc={theme.urls.signNormal} hoverSrc={theme.urls.signHover} />
        </SignWoodMobile>

        <TorchWrapper $active={stepIndex >= 2}>
          <TorchLeft />
          <Character11Image />
          <Character11Plate />
          <TorchRight />
        </TorchWrapper>

        <Character3MobileImage />
        <Character4MobileImage />
        <StartStone />
        <Character7MobileImage />
        <Character11MobileImage />
        <TreeMobile />
        <GemsMobile />
        <GemBoxMobile />
        <PotionMobile />
        <Chest3Mobile />
        <Tree2Mobile />
        <Chest2Mobile />
        <Charceter9MobileImage />

        {stages.map((stage, index) => {
          const tierImage = stageTier.find((tier: any) => tier.value === index);
          const tier = tierImage ? tierImage.image : null;
          const isGoal = index === stages.length - 1;

          if (isGoal) {
            return (
              <React.Fragment key={index}>
                <StageStoneGoalMobile
                  ref={(el) => (stageRefs.current[index] = el!)}
                  $xOffset={stage.xOffset}
                  $yOffset={stage.yOffset}
                />
                <GoalEffectMobile $active={stepIndex === index} $xOffset={stage.xOffset} $yOffset={stage.yOffset} />
              </React.Fragment>
            );
          } else {
            return (
              <StageStoneMobile
                ref={(el) => (stageRefs.current[index] = el!)}
                key={index}
                $active={stepIndex === index || (tier !== null && index <= stepIndex)}
                $xOffset={stage.xOffset}
                $yOffset={stage.yOffset}
                $tier={tier}
              >
                {tier === null && stage.text}
              </StageStoneMobile>
            );
          }
        })}
      </BackgroundMobileWrapper>
    </React.Fragment>
  );
};

export default React.memo(SectionBoardMobile);

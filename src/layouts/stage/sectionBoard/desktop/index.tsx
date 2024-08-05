import React from 'react';

import { IMission } from '../../../../contexts/missionProvider';
import { FIRMACHAIN_URL, MEDIUM_URL, MISSION_COUNT } from '../../../../constants/common';
import HoverImage from '../../../../components/HoverImage';

import theme from '../../../../styles/themes';
import {
  BackgroundWrapper,
  BackgroundGrass,
  BackgroundRoad,
  CharacterWrapper,
  CharacterImage,
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
  Staking,
  Shop,
  KOASpin,
  Diamond,
  StageStoneGoal,
  GoalEffect,
} from '../styles';

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

const SecionBoardDesktop = ({
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
  handleMissionButton: () => void;
}) => {
  return (
    <React.Fragment>
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
        {stages.map((stage, index) => {
          const tierImage = stageTier.find((tier: any) => tier.value === index);
          const tier = tierImage ? tierImage.image : null;
          const isGoal = index === stages.length - 1;

          if (isGoal) {
            return (
              <React.Fragment key={index}>
                <StageStoneGoal
                  ref={(el) => (stageRefs.current[index] = el!)}
                  $xOffset={stage.xOffset}
                  $yOffset={stage.yOffset}
                />
                <GoalEffect $active={stepIndex === index} $xOffset={stage.xOffset} $yOffset={stage.yOffset} />
              </React.Fragment>
            );
          } else {
            return (
              <StageStone
                ref={(el) => (stageRefs.current[index] = el!)}
                key={index}
                $active={stepIndex === index || (tier !== null && index <= stepIndex)}
                $xOffset={stage.xOffset}
                $yOffset={stage.yOffset}
                $tier={tier}
              >
                {tier === null && stage.text}
              </StageStone>
            );
          }
        })}
      </BackgroundWrapper>
    </React.Fragment>
  );
};

export default React.memo(SecionBoardDesktop);

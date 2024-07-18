import React from 'react';

import useModal from '../../hooks/useModal';
import useMission from '../../hooks/useMission';

import {
  TierHUDWrapper,
  SideMenuHUDWrapper,
  SideMenuItem,
  SideMenuItemAchieveImage,
  SideMenuItemBoxImage,
  SideMenuItemMissionImage,
  TierBg,
  TierIcon,
  TierCoin,
  SideMenuMessageBox,
  SideMenuMessageBoxLeft,
  SideMenuMessageBoxCenter,
  SideMenuMessageBoxRight,
  SideMenuMessageBoxLeft2,
  SideMenuMessageBoxCenter2,
  SideMenuMessageBoxRight2,
  SideMenuMessageBox2,
  TierActiveBg,
  TierGauge,
} from './styles';

const gaugeList = [0, 15, 40, 55, 80, 100];

const Hud = () => {
  const modal = useModal();
  const { missionList, tierList, achievementList, userData, currentTier } = useMission();

  const isActiveTier = (achievementId: number) => {
    const value = achievementList.find((achievement) => achievement.id === achievementId)?.value!;
    return userData.step > value;
  };

  const handleOpenMissionModal = () => {
    modal.openModal({ type: 'missionList', props: { missionList, userData } });
  };

  const handleOpenAchievementModal = () => {
    modal.openModal({ type: 'achievementList', props: { achievementList, userData } });
  };

  return (
    <>
      <SideMenuHUDWrapper>
        <SideMenuItem onClick={() => handleOpenMissionModal()}>
          <SideMenuItemBoxImage />
          <SideMenuItemMissionImage />
          <SideMenuMessageBox>
            <SideMenuMessageBoxLeft />
            <SideMenuMessageBoxCenter>Mission List</SideMenuMessageBoxCenter>
            <SideMenuMessageBoxRight />
          </SideMenuMessageBox>
        </SideMenuItem>

        <SideMenuItem onClick={() => handleOpenAchievementModal()}>
          <SideMenuItemBoxImage />
          <SideMenuItemAchieveImage />
          <SideMenuMessageBox>
            <SideMenuMessageBoxLeft />
            <SideMenuMessageBoxCenter>Achievements</SideMenuMessageBoxCenter>
            <SideMenuMessageBoxRight />
          </SideMenuMessageBox>
        </SideMenuItem>
      </SideMenuHUDWrapper>
      <TierHUDWrapper>
        <TierGauge>
          <TierBg />
          <TierActiveBg $fillPercent={gaugeList[currentTier.order]} />
          <TierCoin />
          {tierList.map((tier, index) => (
            <TierIcon key={index} $index={index} $active={isActiveTier(tier.achievementId)}>
              <SideMenuMessageBox2>
                <SideMenuMessageBoxLeft2 />
                <SideMenuMessageBoxCenter2>{tier.name}</SideMenuMessageBoxCenter2>
                <SideMenuMessageBoxRight2 />
              </SideMenuMessageBox2>
            </TierIcon>
          ))}
        </TierGauge>
      </TierHUDWrapper>
    </>
  );
};

export default React.memo(Hud);

import React from 'react';

import useModal from '../../hooks/useModal';
import { ITier, IUserData } from '../../contexts/missionProvider';

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
} from './styles';

const Hud = ({ tierList, userData }: { tierList: ITier[]; userData: IUserData }) => {
  const modal = useModal();

  const handleOpenMissionModal = () => {
    modal.openModal({ type: 'missionList', props: {} });
  };

  const handleOpenAchievementModal = () => {
    modal.openModal({ type: 'achievementList', props: {} });
  };

  const isActiveTier = (tierValue: number) => {
    return userData.currentMissionStep >= tierValue;
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
        <TierBg />
        <TierCoin />
        {tierList.map((tier, index) => (
          <TierIcon key={index} $index={index} $active={isActiveTier(tier.value)}>
            <SideMenuMessageBox2>
              <SideMenuMessageBoxLeft2 />
              <SideMenuMessageBoxCenter2>{tier.name}</SideMenuMessageBoxCenter2>
              <SideMenuMessageBoxRight2 />
            </SideMenuMessageBox2>
          </TierIcon>
        ))}
      </TierHUDWrapper>
    </>
  );
};

export default React.memo(Hud);

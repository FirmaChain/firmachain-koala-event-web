import React from 'react';

import useModal from '../../hooks/useModal';

import {
  AchievementHUDWrapper,
  SideMenuHUDWrapper,
  SideMenuItem,
  SideMenuItemAchieveImage,
  SideMenuItemBoxImage,
  SideMenuItemMissionImage,
} from './styles';

const Hud = () => {
  const modal = useModal();

  const handleOpenMissionModal = () => {
    modal.openModal({ type: 'missionList', props: {} });
  };

  const handleOpenAchievementModal = () => {
    modal.openModal({ type: 'achievementList', props: {} });
  };

  return (
    <>
      <SideMenuHUDWrapper>
        <SideMenuItem onClick={() => handleOpenMissionModal()}>
          <SideMenuItemBoxImage />
          <SideMenuItemMissionImage />
        </SideMenuItem>

        <SideMenuItem onClick={() => handleOpenAchievementModal()}>
          <SideMenuItemBoxImage />
          <SideMenuItemAchieveImage />
        </SideMenuItem>
      </SideMenuHUDWrapper>
      <AchievementHUDWrapper></AchievementHUDWrapper>
    </>
  );
};

export default React.memo(Hud);

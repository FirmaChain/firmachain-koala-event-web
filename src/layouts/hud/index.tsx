import React, { useState } from 'react';

import useModal from '../../hooks/useModal';
import useMission from '../../hooks/useMission';
import useScreen from '../../hooks/useScreen';

import theme from '../../styles/themes';

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
  SideMenuMobile,
  SideMenuIconMobile,
  SideMenuMobileList,
  SideMenuMobileItem,
  SideMenuIcon,
  SideMenuTypo,
} from './styles';

const gaugeList = [0, 15, 40, 55, 80, 100];

const Hud = () => {
  const modal = useModal();
  const { isMobile } = useScreen();
  const { missionList, tierList, achievementList, userData, userRewardDataList, currentTier } = useMission();

  const [isShowMobileHud, setShowMobileHud] = useState(false);

  const isActiveTier = (achievementId: number) => {
    const value = achievementList.find((achievement) => achievement.id === achievementId)?.value!;
    return userData.step > value;
  };

  const handleOpenMissionModal = () => {
    modal.openModal({ type: 'missionList', props: { missionList, userData } });
  };

  const handleOpenAchievementModal = () => {
    modal.openModal({ type: 'achievementList', props: { achievementList, userData, userRewardDataList } });
  };

  const handleClickHud = () => {
    if (isMobile === false) return;

    setShowMobileHud(!isShowMobileHud);
  };

  return isMobile ? (
    <React.Fragment>
      <SideMenuMobile $isShow={isShowMobileHud}>
        <SideMenuIconMobile onClick={() => handleClickHud()} />
        <SideMenuMobileList>
          <SideMenuMobileItem>
            <SideMenuIcon $src={theme.urls.hudIconMobileAchievement} onClick={() => handleOpenAchievementModal()} />
            <SideMenuTypo>Prize</SideMenuTypo>
          </SideMenuMobileItem>

          <SideMenuMobileItem>
            <SideMenuIcon $src={theme.urls.hudIconMobileMission} onClick={() => handleOpenMissionModal()} />
            <SideMenuTypo>Missions</SideMenuTypo>
          </SideMenuMobileItem>

          <SideMenuMobileItem $disabled={true}>
            <SideMenuIcon $src={theme.urls.hudIconMobileShop} />
            <SideMenuTypo>Shop</SideMenuTypo>
          </SideMenuMobileItem>

          <SideMenuMobileItem $disabled={true}>
            <SideMenuIcon $src={theme.urls.hudIconMobileStaking} />
            <SideMenuTypo>Staking</SideMenuTypo>
          </SideMenuMobileItem>
        </SideMenuMobileList>
      </SideMenuMobile>
    </React.Fragment>
  ) : (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default React.memo(Hud);

import React, { useEffect, useState } from 'react';

import Modal from '../base/modal';
import useModal from '../../../hooks/useModal';
import useScreen from '../../../hooks/useScreen';
import { MISSION_COUNT } from '../../../constants/common';
import { IMission, MissionType } from '../../../contexts/missionProvider';

import theme from '../../../styles/themes';

import {
  BottomSheetContainer,
  ButtonCenter,
  ButtonLeft,
  ButtonRight,
  CloseButtonMobile,
  CloseIcon,
  PrimaryButton,
  MissionLabel,
  MissionLabelIcon,
  MissionLabelTypo,
  MissionTitleTypo,
  MissionDescriptionTypo,
} from './styles';

const MissionModal = ({
  btnStep,
  stepIndex,
  currentMission,
  handleMissionButton,
}: {
  btnStep: number;
  stepIndex: number;
  currentMission: IMission;
  handleMissionButton: (step?: number) => Promise<void>;
}) => {
  const { closeModal } = useModal();
  const { isMobile } = useScreen();
  const [isVisible, setIsVisible] = useState(false);
  const [internalBtnStep, setInternalBtnStep] = useState(btnStep);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const handleCloseModal = () => {
    setIsVisible(false);
    setTimeout(closeModal, 200);
  };

  const handleAction = async () => {
    if (currentMission.type === MissionType.GENERAL && internalBtnStep === 0) {
      await handleMissionButton(0);
      setInternalBtnStep(1);
    } else {
      await handleMissionButton(1);
      handleCloseModal();
    }
  };

  return (
    <Modal
      visible={true}
      maskClosable={true}
      handleClose={handleCloseModal}
      width={'100%'}
      type={isMobile ? 'bottom-sheet' : 'default'}
    >
      <BottomSheetContainer $visible={isVisible}>
        <CloseButtonMobile onClick={() => handleCloseModal()}>
          <CloseIcon />
        </CloseButtonMobile>
        <MissionLabel>
          <MissionLabelIcon src={theme.urls.sword} />
          <MissionLabelTypo>
            {stepIndex < MISSION_COUNT - 1 ? `Mission ${stepIndex + 1}` : 'Completed'}
          </MissionLabelTypo>
        </MissionLabel>
        <MissionTitleTypo>{currentMission.title}</MissionTitleTypo>
        <MissionDescriptionTypo>{currentMission.description}</MissionDescriptionTypo>

        <PrimaryButton onClick={() => handleAction()}>
          <ButtonLeft />
          <ButtonCenter>{internalBtnStep === 0 ? currentMission.btn1 : currentMission.btn2}</ButtonCenter>
          <ButtonRight />
        </PrimaryButton>
      </BottomSheetContainer>
    </Modal>
  );
};

export default React.memo(MissionModal);

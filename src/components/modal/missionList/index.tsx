import React, { useEffect, useMemo } from 'react';

import Modal from '../base/modal';
import useModal from '../../../hooks/useModal';
import { IMission, IUserData } from '../../../contexts/missionProvider';
import { MISSION_COUNT } from '../../../constants/common';
import { truncateString } from '../../../utils/common';

import Borders from '../../../components/borders';
import {
  CloseButton,
  CloseIcon,
  ContentsWrapper,
  MissionItem,
  MissionList,
  ModalDefaultContainer,
  TitleTypo,
  TitleWrapper,
  TorchIcon,
  MissionIcon,
  MissionInfo,
  MissionTag,
  MissionTitleTypo,
  MissionDescriptionTypo,
  MissionStatus,
  MissionIconImage,
  DimLayer,
  CheckIcon,
  LockIcon,
  SubInfo,
  SubInfoLabel,
  SubInfoValue,
} from './styles';

const MissionListModal = ({ missionList, userData }: { missionList: IMission[]; userData: IUserData }) => {
  const { closeModal } = useModal();
  const [targetMissionList, setTargetMissionList] = React.useState<IMission[]>([]);
  const [completedMissionList, setCompletedMissionList] = React.useState<IMission[]>([]);
  const [nextMissionList, setNextMissionList] = React.useState<IMission[]>([]);

  const currentMyMission = useMemo(() => {
    const step = userData.currentMissionStep + 1;
    return step > MISSION_COUNT - 1 ? MISSION_COUNT - 1 : step;
  }, [missionList, userData]);

  useEffect(() => {
    let targetMissions: IMission[] = [];
    let completedMissions: IMission[] = [];
    let nextMissions: IMission[] = [];

    // Remove the goal mission
    if (missionList.length === MISSION_COUNT) missionList.pop();

    missionList.forEach((mission: IMission) => {
      if (mission.step < userData.currentMissionStep) {
        completedMissions.push(mission);
      } else if (mission.step === userData.currentMissionStep) {
        targetMissions.push(mission);
      } else {
        nextMissions.push(mission);
      }
    });

    setTargetMissionList(targetMissions);
    setCompletedMissionList(completedMissions);
    setNextMissionList(nextMissions);
  }, [missionList, userData]);

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <Modal visible={true} maskClosable={true} handleClose={handleCloseModal} width={'700px'}>
      <ModalDefaultContainer>
        <Borders color='#51290c'>
          <CloseButton onClick={() => handleCloseModal()}>
            <CloseIcon />
          </CloseButton>
          <ContentsWrapper>
            <TitleWrapper>
              <TorchIcon />
              <TitleTypo>Mission List</TitleTypo>
              <TorchIcon />
            </TitleWrapper>
            <SubInfo>
              <SubInfoLabel>My Mission</SubInfoLabel>
              <SubInfoValue>
                <span>{currentMyMission}</span>
                <span>/</span>
                <span>{MISSION_COUNT - 1}</span>
              </SubInfoValue>
            </SubInfo>
            <MissionList>
              {targetMissionList.map((mission: IMission, index: number) => (
                <MissionItem key={index} $status={1}>
                  <DimLayer />
                  <MissionIcon>
                    <MissionIconImage />
                  </MissionIcon>
                  <MissionInfo>
                    <MissionTag>Mission {mission.step + 1}</MissionTag>
                    <MissionTitleTypo>{mission.title}</MissionTitleTypo>
                    <MissionDescriptionTypo>{mission.description}</MissionDescriptionTypo>
                  </MissionInfo>
                  <MissionStatus></MissionStatus>
                </MissionItem>
              ))}

              {nextMissionList.map((mission: IMission, index: number) => (
                <MissionItem key={index} $status={0}>
                  <DimLayer />
                  <MissionIcon>
                    <MissionIconImage />
                  </MissionIcon>
                  <MissionInfo>
                    <MissionTag>Mission {mission.step + 1}</MissionTag>
                    <MissionTitleTypo>{mission.title}</MissionTitleTypo>
                    <MissionDescriptionTypo>{truncateString(mission.description, 45)}</MissionDescriptionTypo>
                  </MissionInfo>
                  <MissionStatus>
                    <LockIcon />
                  </MissionStatus>
                </MissionItem>
              ))}

              {completedMissionList.map((mission: IMission, index: number) => (
                <MissionItem key={index} $status={2}>
                  <DimLayer />
                  <MissionIcon>
                    <MissionIconImage />
                  </MissionIcon>
                  <MissionInfo>
                    <MissionTag>Mission {mission.step + 1}</MissionTag>
                    <MissionTitleTypo>{mission.title}</MissionTitleTypo>
                    <MissionDescriptionTypo>{truncateString(mission.description, 45)}</MissionDescriptionTypo>
                  </MissionInfo>
                  <MissionStatus>
                    <CheckIcon />
                  </MissionStatus>
                </MissionItem>
              ))}
            </MissionList>
          </ContentsWrapper>
        </Borders>
      </ModalDefaultContainer>
    </Modal>
  );
};

export default React.memo(MissionListModal);

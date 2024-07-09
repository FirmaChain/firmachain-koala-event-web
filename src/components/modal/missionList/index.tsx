import React, { useEffect } from 'react';

import Modal from '../base/modal';
import useModal from '../../../hooks/useModal';
import { IMission, IUserData } from '../../../contexts/missionProvider';

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
import { MISSION_COUNT } from '../../../constants/common';

const MissionListModal = ({ missionList, userData }: { missionList: IMission[]; userData: IUserData }) => {
  const { closeModal } = useModal();
  const [targetMissionList, setTargetMissionList] = React.useState<IMission[]>([]);
  const [completedMissionList, setCompletedMissionList] = React.useState<IMission[]>([]);
  const [nextMissionList, setNextMissionList] = React.useState<IMission[]>([]);

  useEffect(() => {
    let targetMissions: IMission[] = [];
    let completedMissions: IMission[] = [];
    let nextMissions: IMission[] = [];

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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                <span>{userData.currentMissionStep}</span>
                <span>/</span>
                <span>{MISSION_COUNT}</span>
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
                    <MissionDescriptionTypo>{mission.description}</MissionDescriptionTypo>
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
                    <MissionDescriptionTypo>{mission.description}</MissionDescriptionTypo>
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

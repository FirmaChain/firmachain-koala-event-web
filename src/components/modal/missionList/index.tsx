import React from 'react';

import Modal from '../base/modal';
import useModal from '../../../hooks/useModal';

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

const MissionListModal = () => {
  const { closeModal } = useModal();

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <Modal visible={true} handleClose={handleCloseModal} width={'700px'}>
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
                <span>02</span>
                <span>/</span>
                <span>26</span>
              </SubInfoValue>
            </SubInfo>
            <MissionList>
              <MissionItem $status={0}>
                <DimLayer />
                <MissionIcon>
                  <MissionIconImage />
                </MissionIcon>
                <MissionInfo>
                  <MissionTag>Mission 01</MissionTag>
                  <MissionTitleTypo>Welcome to Koala Knights!</MissionTitleTypo>
                  <MissionDescriptionTypo>Connect to Firma Station.</MissionDescriptionTypo>
                </MissionInfo>
                <MissionStatus>
                  <LockIcon />
                </MissionStatus>
              </MissionItem>

              <MissionItem $status={1}>
                <DimLayer />
                <MissionIcon>
                  <MissionIconImage />
                </MissionIcon>
                <MissionInfo>
                  <MissionTag>Mission 01</MissionTag>
                  <MissionTitleTypo>Welcome to Koala Knights!</MissionTitleTypo>
                  <MissionDescriptionTypo>Connect to Firma Station.</MissionDescriptionTypo>
                </MissionInfo>
                <MissionStatus></MissionStatus>
              </MissionItem>

              <MissionItem $status={2}>
                <DimLayer />
                <MissionIcon>
                  <MissionIconImage />
                </MissionIcon>
                <MissionInfo>
                  <MissionTag>Mission 01</MissionTag>
                  <MissionTitleTypo>Welcome to Koala Knights!</MissionTitleTypo>
                  <MissionDescriptionTypo>Connect to Firma Station.</MissionDescriptionTypo>
                </MissionInfo>
                <MissionStatus>
                  <CheckIcon />
                </MissionStatus>
              </MissionItem>

              <MissionItem $status={0}>
                <DimLayer />
                <MissionIcon>
                  <MissionIconImage />
                </MissionIcon>
                <MissionInfo>
                  <MissionTag>Mission 01</MissionTag>
                  <MissionTitleTypo>Welcome to Koala Knights!</MissionTitleTypo>
                  <MissionDescriptionTypo>Connect to Firma Station.</MissionDescriptionTypo>
                </MissionInfo>
                <MissionStatus>
                  <LockIcon />
                </MissionStatus>
              </MissionItem>

              <MissionItem $status={0}>
                <DimLayer />
                <MissionIcon>
                  <MissionIconImage />
                </MissionIcon>
                <MissionInfo>
                  <MissionTag>Mission 01</MissionTag>
                  <MissionTitleTypo>Welcome to Koala Knights!</MissionTitleTypo>
                  <MissionDescriptionTypo>Connect to Firma Station.</MissionDescriptionTypo>
                </MissionInfo>
                <MissionStatus>
                  <LockIcon />
                </MissionStatus>
              </MissionItem>

              <MissionItem $status={0}>
                <DimLayer />
                <MissionIcon>
                  <MissionIconImage />
                </MissionIcon>
                <MissionInfo>
                  <MissionTag>Mission 01</MissionTag>
                  <MissionTitleTypo>Welcome to Koala Knights!</MissionTitleTypo>
                  <MissionDescriptionTypo>Connect to Firma Station.</MissionDescriptionTypo>
                </MissionInfo>
                <MissionStatus>
                  <LockIcon />
                </MissionStatus>
              </MissionItem>

              <MissionItem $status={0}>
                <DimLayer />
                <MissionIcon>
                  <MissionIconImage />
                </MissionIcon>
                <MissionInfo>
                  <MissionTag>Mission 01</MissionTag>
                  <MissionTitleTypo>Welcome to Koala Knights!</MissionTitleTypo>
                  <MissionDescriptionTypo>Connect to Firma Station.</MissionDescriptionTypo>
                </MissionInfo>
                <MissionStatus>
                  <LockIcon />
                </MissionStatus>
              </MissionItem>
              <MissionItem $status={0}>
                <DimLayer />
                <MissionIcon>
                  <MissionIconImage />
                </MissionIcon>
                <MissionInfo>
                  <MissionTag>Mission 01</MissionTag>
                  <MissionTitleTypo>Welcome to Koala Knights!</MissionTitleTypo>
                  <MissionDescriptionTypo>Connect to Firma Station.</MissionDescriptionTypo>
                </MissionInfo>
                <MissionStatus>
                  <LockIcon />
                </MissionStatus>
              </MissionItem>
              <MissionItem $status={0}>
                <DimLayer />
                <MissionIcon>
                  <MissionIconImage />
                </MissionIcon>
                <MissionInfo>
                  <MissionTag>Mission 01</MissionTag>
                  <MissionTitleTypo>Welcome to Koala Knights!</MissionTitleTypo>
                  <MissionDescriptionTypo>Connect to Firma Station.</MissionDescriptionTypo>
                </MissionInfo>
                <MissionStatus>
                  <LockIcon />
                </MissionStatus>
              </MissionItem>
            </MissionList>
          </ContentsWrapper>
        </Borders>
      </ModalDefaultContainer>
    </Modal>
  );
};

export default React.memo(MissionListModal);

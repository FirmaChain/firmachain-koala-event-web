import React from 'react';

import Modal from '../base/modal';
import useModal from '../../../hooks/useModal';

import Borders from '../../../components/borders';
import {
  AchievementIcon,
  AchievementItem,
  AchievementList,
  CloseButton,
  CloseIcon,
  ContentsWrapper,
  ModalDefaultContainer,
  TitleTypo,
  TitleWrapper,
  TorchIcon,
} from './styles';

const AchievementListModal = () => {
  const { closeModal } = useModal();

  const onCloseModal = () => {
    closeModal();
  };

  return (
    <Modal visible={true} onClose={onCloseModal} width={'782px'}>
      <ModalDefaultContainer>
        <Borders color='#51290c'>
          <CloseButton onClick={() => onCloseModal()}>
            <CloseIcon />
          </CloseButton>
          <ContentsWrapper>
            <TitleWrapper>
              <TorchIcon />
              <TitleTypo>Achievement List</TitleTypo>
              <TorchIcon />
            </TitleWrapper>
            <Borders color='#C08960'>
              <AchievementList>
                {[0, 1, 2, 3, 4, 5, 6, 7].map((achievement, index) => (
                  <AchievementItem key={index}>
                    <AchievementIcon $index={achievement} />
                  </AchievementItem>
                ))}
              </AchievementList>
            </Borders>
          </ContentsWrapper>
        </Borders>
      </ModalDefaultContainer>
    </Modal>
  );
};

export default React.memo(AchievementListModal);

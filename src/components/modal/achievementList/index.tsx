import React, { useMemo } from 'react';

import Modal from '../base/modal';
import useModal from '../../../hooks/useModal';
import { IAchievement, IUserData } from '../../../contexts/missionProvider';

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
  LockIcon,
} from './styles';

const AchievementListModal = ({
  achievementList,
  userData,
}: {
  achievementList: IAchievement[];
  userData: IUserData;
}) => {
  const { closeModal } = useModal();

  const completeList = useMemo(() => {
    let result: boolean[] = [];
    achievementList.forEach((achievement: IAchievement, index: number) => {
      if (userData.achievementIdList.includes(achievement.id)) {
        result[index] = true;
      } else {
        result[index] = false;
      }
    });
    return result;
  }, [achievementList, userData]);

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <Modal visible={true} maskClosable={true} handleClose={handleCloseModal} width={'782px'}>
      <ModalDefaultContainer>
        <Borders color='#51290c'>
          <CloseButton onClick={() => handleCloseModal()}>
            <CloseIcon />
          </CloseButton>
          <ContentsWrapper>
            <TitleWrapper>
              <TorchIcon />
              <TitleTypo>Prize List</TitleTypo>
              <TorchIcon />
            </TitleWrapper>
            <Borders color='#C08960'>
              <AchievementList>
                {achievementList.map((_, index) => (
                  <AchievementItem key={index} $complete={completeList[index]}>
                    <AchievementIcon $index={index} />
                    <LockIcon />
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

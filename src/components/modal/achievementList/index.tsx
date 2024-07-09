import React, { useEffect } from 'react';

import Modal from '../base/modal';
import useModal from '../../../hooks/useModal';
import { IAchievement } from '../../../contexts/missionProvider';

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

const AchievementListModal = () => {
  const { closeModal, props } = useModal();
  const [achievementList, setAchievementList] = React.useState<IAchievement[]>([]);
  const [completeList, setCompleteList] = React.useState<boolean[]>([]);

  useEffect(() => {
    let completes: boolean[] = [];
    props.achievementList.map((achievement: IAchievement, index: number) => {
      if (props.userData.achievementList.includes(achievement.id)) {
        completes[index] = true;
      } else {
        completes[index] = false;
      }
    });
    console.log(completes);
    setAchievementList(props.achievementList);
    setCompleteList(completes);
  }, []);

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <Modal visible={true} handleClose={handleCloseModal} width={'782px'}>
      <ModalDefaultContainer>
        <Borders color='#51290c'>
          <CloseButton onClick={() => handleCloseModal()}>
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

import React from 'react';

import Modal from '../base/modal';
import useModal from '../../../hooks/useModal';

import Borders from '../../borders';
import {
  CloseButton,
  CloseIcon,
  ContentsWrapper,
  ModalDefaultContainer,
  TitleTypo,
  TitleWrapper,
  BeadIcon,
  QuizWrapper,
  QuizIcon,
  QuizContent,
  AnswerList,
  AnswerItem,
  AnswerNumber,
  AnswerTypo,
  AnswerIcon,
} from './styles';

const QuizModal = () => {
  const { closeModal } = useModal();

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <Modal visible={true} handleClose={handleCloseModal} width={'776px'}>
      <ModalDefaultContainer>
        <Borders color='#51290c'>
          <CloseButton onClick={() => handleCloseModal()}>
            <CloseIcon />
          </CloseButton>
          <ContentsWrapper>
            <TitleWrapper>
              <BeadIcon />
              <TitleTypo>Koala Quiz Challenge</TitleTypo>
              <BeadIcon />
            </TitleWrapper>
            <QuizWrapper>
              <QuizIcon />
              <QuizContent>
                What is the name of the token used for the market, rewards, and airdrops in Koala Knights?
              </QuizContent>
            </QuizWrapper>
            <AnswerList>
              <AnswerItem $active={false}>
                <AnswerNumber>01</AnswerNumber>
                <AnswerTypo>KOT (Koala Of Treasure)</AnswerTypo>
                <AnswerIcon />
              </AnswerItem>
              <AnswerItem $active={true}>
                <AnswerNumber>02</AnswerNumber>
                <AnswerTypo>KOA (Koala Of Adventure)</AnswerTypo>
                <AnswerIcon />
              </AnswerItem>
              <AnswerItem $active={false}>
                <AnswerNumber>03</AnswerNumber>
                <AnswerTypo>KKC (Koala Knight Coin)</AnswerTypo>
                <AnswerIcon />
              </AnswerItem>
              <AnswerItem $active={false}>
                <AnswerNumber>04</AnswerNumber>
                <AnswerTypo>KAT (Koala Adventure Token)</AnswerTypo>
                <AnswerIcon />
              </AnswerItem>
            </AnswerList>
          </ContentsWrapper>
        </Borders>
      </ModalDefaultContainer>
    </Modal>
  );
};

export default React.memo(QuizModal);

import React, { useEffect, useMemo, useState } from 'react';
import { useSnackbar } from 'notistack';

import Modal from '../base/modal';
import useModal from '../../../hooks/useModal';
import useClear from '../../../hooks/useClear';
import useMission from '../../../hooks/useMission';
import useWallet from '../../../hooks/useWallet';
import { IMission } from '../../../contexts/missionProvider';

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
  Question,
  OptionList,
  OptionItem,
  OptionNumber,
  OptionTypo,
  OptionIcon,
} from './styles';

const QuizModal = ({ currentMission }: { currentMission: IMission }) => {
  const { closeModal } = useModal();
  const { setClear, setType, isClear } = useClear();
  const { completeMission } = useMission();
  const { address } = useWallet();
  const { enqueueSnackbar } = useSnackbar();
  const [optionStatus, setOptionStatus] = useState<{ [key: number]: number }>({});
  const [isSelectTime, setIsSelectTime] = useState(false);
  const [waitingClear, setWaitingClear] = useState(false);
  const [isProcess, setProcess] = useState(false);

  useEffect(() => {
    if (isClear && waitingClear === false) {
      setWaitingClear(true);
    } else if (isClear === false && waitingClear) {
      setWaitingClear(false);
      setIsSelectTime(false);
      setOptionStatus({});
      handleCloseModal();
    }
  }, [isClear, waitingClear]); // eslint-disable-line react-hooks/exhaustive-deps

  const quizData = useMemo(() => {
    const splitQuiz = currentMission.extra1.split('\n');
    const answer = currentMission.value;
    const question = splitQuiz[0];
    const optionList = [splitQuiz[2], splitQuiz[3], splitQuiz[4], splitQuiz[5]];
    return { question, optionList, answer };
  }, [currentMission]);

  const handleCloseModal = () => {
    if (isSelectTime) return;

    closeModal();
  };

  const handleSelectOption = (index: number) => {
    if (isSelectTime) return;

    const isCorrect = quizData.answer === index;
    if (isCorrect) {
      if (isProcess) return;

      setOptionStatus({ [index]: 1 });
      setProcess(true);

      completeMission(address, { answer: index })
        .then((result) => {
          if (result.isComplete) {
            setTimeout(() => {
              setProcess(false);
              setType(0);
              setClear(true);
            }, 500);
          } else {
            throw new Error('Mission is not complete');
          }
        })
        .catch((e) => {
          console.error(e);
          setProcess(false);
          setOptionStatus({});
          setIsSelectTime(false);
          enqueueSnackbar('Failed mission', { variant: 'error', autoHideDuration: 1500 });
        });
    } else {
      setOptionStatus({ [index]: 2 });
      setIsSelectTime(true);

      setTimeout(() => {
        setIsSelectTime(false);
        setOptionStatus({});
      }, 800);
    }
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
              <Question>{quizData.question}</Question>
            </QuizWrapper>
            <OptionList>
              {quizData.optionList.map((option, index) => (
                <OptionItem key={index} $type={optionStatus[index] || 0} onClick={() => handleSelectOption(index)}>
                  <OptionNumber>{index + 1}</OptionNumber>
                  <OptionTypo>{option}</OptionTypo>
                  <OptionIcon />
                </OptionItem>
              ))}
            </OptionList>
          </ContentsWrapper>
        </Borders>
      </ModalDefaultContainer>
    </Modal>
  );
};

export default React.memo(QuizModal);

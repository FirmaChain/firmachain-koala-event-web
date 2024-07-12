import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';

import Modal from '../base/modal';
import useModal from '../../../hooks/useModal';
import useMission from '../../../hooks/useMission';
import useWallet from '../../../hooks/useWallet';
import useClear from '../../../hooks/useClear';

import Borders from '../../borders';
import {
  CloseButton,
  CloseIcon,
  ContentsWrapper,
  ModalDefaultContainer,
  TitleTypo,
  TitleWrapper,
  BeadIcon,
  SubInfo,
  SubTypo,
  RatingWrapper,
  RatingIcon,
  SurveyWrapper,
  SurveyTextarea,
  PrimaryButton,
  ButtonLeft,
  ButtonCenter,
  ButtonRight,
  TextLength,
} from './styles';

const QuizModal = () => {
  const { closeModal } = useModal();
  const { completeMission } = useMission();
  const { isClear, setClear } = useClear();
  const { address } = useWallet();
  const { enqueueSnackbar } = useSnackbar();

  const [rating, setRating] = useState<number>(0);
  const [surveyText, setSurveyText] = useState<string>('');
  const [waitingClear, setWaitingClear] = useState(false);

  useEffect(() => {
    if (isClear && waitingClear === false) {
      console.log('CLEAR ON');
      setWaitingClear(true);
    } else if (isClear === false && waitingClear) {
      console.log('CLEAR OFF');
      setWaitingClear(false);
      setRating(0);
      setSurveyText('');
      handleCloseModal();
    }
  }, [isClear, waitingClear]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCloseModal = () => {
    closeModal();
  };

  const handleRating = (rating: number) => {
    setRating(rating);
  };

  const handleTextarea = (e: any) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/<.*?>/g, '');
    setSurveyText(sanitizedValue);
  };

  const handleSubmit = () => {
    if (rating === 0) {
      enqueueSnackbar('Please choose a star rating.', { variant: 'error', autoHideDuration: 1500 });
      return;
    }

    if (surveyText === '') {
      enqueueSnackbar('Please enter the survey content.', { variant: 'error', autoHideDuration: 1500 });
      return;
    }

    completeMission(address, { rating, surveyText })
      .then((result) => {
        if (result.isComplete) {
          setTimeout(() => {
            setClear(true);
          }, 500);
        } else {
          throw new Error('Mission is not complete');
        }
      })
      .catch((e) => {
        console.error(e);
        enqueueSnackbar('Failed check mission', { variant: 'error', autoHideDuration: 1500 });
      });
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
              <TitleTypo>Koala Knight Survey</TitleTypo>
              <BeadIcon />
            </TitleWrapper>
            <SubInfo>
              <SubTypo>Please provide your thoughts on Koala Knights.</SubTypo>
              <RatingWrapper>
                <RatingIcon onClick={() => handleRating(1)} $active={rating >= 1} />
                <RatingIcon onClick={() => handleRating(2)} $active={rating >= 2} />
                <RatingIcon onClick={() => handleRating(3)} $active={rating >= 3} />
                <RatingIcon onClick={() => handleRating(4)} $active={rating >= 4} />
                <RatingIcon onClick={() => handleRating(5)} $active={rating >= 5} />
              </RatingWrapper>
            </SubInfo>
            <SurveyWrapper>
              <SurveyTextarea onChange={handleTextarea} value={surveyText} />
              <TextLength $red={surveyText.length > 1000}>
                <span>{surveyText.length}</span>/1000
              </TextLength>
            </SurveyWrapper>
            <PrimaryButton onClick={() => handleSubmit()}>
              <ButtonLeft />
              <ButtonCenter>Submit</ButtonCenter>
              <ButtonRight />
            </PrimaryButton>
          </ContentsWrapper>
        </Borders>
      </ModalDefaultContainer>
    </Modal>
  );
};

export default React.memo(QuizModal);

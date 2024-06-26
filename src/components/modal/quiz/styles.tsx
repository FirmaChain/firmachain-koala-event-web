import styled from 'styled-components';

export const ModalDefaultContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const ContentsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 40px 56px 56px 56px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const BeadIcon = styled.div`
  width: 32px;
  height: 32px;
  background-image: url('${({ theme }) => theme.urls.bead}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const TitleTypo = styled.div`
  color: #51290c;
  text-shadow: 3px 2px 0px #fff;
  font-family: 'Press Start 2P';
  font-size: 22px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.22px;
`;

export const CloseButton = styled.div`
  z-index: 3;
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  border-radius: 100px;
  border: 2px solid #51290c;
  background: #fff;
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.3);
`;

export const CloseIcon = styled.div`
  width: 12px;
  height: 12px;
  background-image: url('${({ theme }) => theme.urls.closePixel}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const QuizWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const QuizIcon = styled.div`
  position: absolute;
  top: -22px;
  width: 44px;
  height: 44px;
  background-image: url('${({ theme }) => theme.urls.quizIcon}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const QuizContent = styled.div`
  display: flex;
  padding: 30px 20px;
  justify-content: center;
  align-items: center;

  border-radius: 24px;
  background: #c8946d;
  box-shadow: 4px 4px 0px 0px rgba(81, 41, 12, 0.6) inset;

  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.2px;
`;

export const AnswerList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const AnswerItem = styled.div<{ $active: boolean }>`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 16px;

  ${({ $active }) =>
    $active
      ? `
          border-radius: 100px;
          border: 2px solid rgba(255, 255, 255, 0.5);
          background: #51290c;
          & > ${AnswerTypo} { color: #fff; }
          & > ${AnswerIcon} { display: flex; }
        `
      : `
          border-radius: 100px;
          border: 2px solid rgba(81, 41, 12, 0.4);
          background: rgba(255, 255, 255, 0.5);
        `}
`;

export const AnswerNumber = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  padding: 6px 8px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  background: #815433;

  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.16px;
`;

export const AnswerTypo = styled.div`
  flex: 1;
  color: #51290c;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.18px;
`;

export const AnswerIcon = styled.div`
  display: none;
  width: 24px;
  height: 24px;
  background-image: url('${({ theme }) => theme.urls.check}');
  background-repeat: no-repeat;
  background-size: contain;
`;

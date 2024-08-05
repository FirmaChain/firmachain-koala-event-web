import styled, { css, keyframes } from 'styled-components';

const shake = keyframes`
  0% { transform: translateX(0); }
  8.33% { transform: translateX(-4px); }
  16.66% { transform: translateX(4px); }
  25% { transform: translateX(-4px); }
  33.33% { transform: translateX(4px); }
  41.66% { transform: translateX(-4px); }
  50% { transform: translateX(4px); }
  58.33% { transform: translateX(-4px); }
  66.66% { transform: translateX(4px); }
  75% { transform: translateX(-4px); }
  83.33% { transform: translateX(4px); }
  91.66% { transform: translateX(-4px); }
  100% { transform: translateX(0); }
`;

export const ModalDefaultContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: #f1c09c;
`;

export const ContentsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 40px 56px 56px 56px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
    padding: 60px 15px 0 15px;
    justify-content: flex-start;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: auto;
  }
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
  line-height: 150%;
  letter-spacing: -0.22px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    font-size: 16px;
    text-align: center;
    width: auto;
    display: flex;
    flex: 0;
    min-width: 170px;
  }
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

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: 30px;
    height: 30px;
    top: -14px;
  }
`;

export const Question = styled.div`
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

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    font-size: 16px;
  }
`;

export const OptionList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const getTypeStyles = (type: number, theme: any) => {
  switch (type) {
    case 0:
      return css`
        border-radius: 100px;
        border: 2px solid rgba(81, 41, 12, 0.4);
        background: rgba(255, 255, 255, 0.5);
      `;
    case 1:
      return css`
        border-radius: 100px;
        border: 2px solid rgba(255, 255, 255, 0.5);
        background: #51290c;
        & > ${OptionTypo} {
          color: #fff;
        }
        & > ${OptionIcon} {
          display: flex;
        }
      `;
    case 2:
      return css`
        border-radius: 100px;
        border: 2px solid #C52D2D;
        background: rgba(255, 255, 255, 0.50);
        animation: ${shake} 0.4s;
        & > ${OptionNumber} {background: #B03535;}
        & > ${OptionTypo} { color: #C52D2D; }
        & > ${OptionIcon} { display:flex;   background-image: url('${theme.urls.close2}');
      `;
    default:
      return '';
  }
};

export const OptionItem = styled.div<{ $type: number }>`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 16px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    padding: 10px;
  }
  ${({ $type, theme }) => getTypeStyles($type, theme)};
`;

export const OptionNumber = styled.div`
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

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    font-size: 14px;
  }
`;

export const OptionTypo = styled.div`
  flex: 1;
  color: #51290c;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.18px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    font-size: 16px;
  }
`;

export const OptionIcon = styled.div`
  display: none;
  width: 24px;
  height: 24px;
  background-image: url('${({ theme }) => theme.urls.check2}');
  background-repeat: no-repeat;
  background-size: contain;
`;

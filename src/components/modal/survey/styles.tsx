import styled from 'styled-components';

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
  gap: 20px;
  padding: 40px 56px 30px 56px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
    padding: 60px 15px 15px 15px;
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
  line-height: 140%;
  letter-spacing: -0.22px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    font-size: 16px;
    text-align: center;
    width: auto;
    display: flex;
    flex: 0;
    min-width: 210px;
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

export const SubInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const SubTypo = styled.div`
  color: #815433;
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.18px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    font-size: 14px;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    gap: 10px;
  }
`;

export const RatingIcon = styled.div<{ $active: boolean }>`
  width: 48px;
  height: 48px;
  cursor: pointer;
  background-image: url('${({ theme, $active }) => ($active ? theme.urls.ratingStar : theme.urls.ratingStarEmpty)}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: 35px;
    height: 35px;
  }
`;

export const SurveyWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 334px;
  margin-top: 10px;
  padding: 24px 24px 16px 30px;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background: #c8946d;
  box-shadow: 4px 4px 0px 0px rgba(81, 41, 12, 0.6) inset;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    height: auto;
    flex: 1;
  }
`;

export const SurveyTextarea = styled.textarea`
  width: calc(100% - 5px);
  height: calc(100% - 30px);
  padding-right: 10px;
  border: 0;
  margin: 0;
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.16px;

  -ms-overflow-style: none;
  scrollbar-width: none;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    font-size: 14px;
  }
`;

export const PrimaryButton = styled.div`
  width: auto;
  min-width: 270px;
  height: 50px;
  display: flex;
  cursor: pointer;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: 100%;
  }
`;

export const ButtonLeft = styled.div`
  width: 51px;

  background-image: url('${({ theme }) => theme.urls.buttonLeft}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right center;
  image-rendering: pixelated;
`;

export const ButtonRight = styled.div`
  width: 51px;

  background-image: url('${({ theme }) => theme.urls.buttonRight}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const ButtonCenter = styled.div`
  width: 100%;
  flex: 1;
  margin-left: -1px;
  margin-right: -1px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;
  text-align: center;
  font-family: 'Press Start 2P';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.15px;
  text-transform: uppercase;

  background-image: url('${({ theme }) => theme.urls.buttonCenter}');
  background-repeat: repeat no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    font-size: 13px;
  }
`;

export const TextLength = styled.div<{ $red: boolean }>`
  position: absolute;
  bottom: 20px;
  right: 30px;

  color: #e8b38c;
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.14px;
  & > span {
    color: ${({ $red }) => ($red ? '#F3574D' : '#51290c')};
    text-align: right;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.14px;
  }
`;

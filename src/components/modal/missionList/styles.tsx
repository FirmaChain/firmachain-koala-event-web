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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 40px 40px 36px 40px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
    padding: 60px 15px 0 15px;
    gap: 16px;
  }
`;

export const TitleWrapper = styled.div`
  height: 48px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TorchIcon = styled.div`
  width: 40px;
  height: 48px;
  background-image: url('${({ theme }) => theme.urls.torch}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: calc(40px * 0.8);
    height: calc(48px * 0.8);
  }
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
  }
`;

export const CloseButton = styled.div`
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

export const MissionList = styled.div`
  width: calc(100% + 20px);
  margin-left: 25px;
  padding-left: 5px;
  padding-right: 20px;
  padding-top: 5px;
  max-height: 440px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    padding: 5px;
    margin: 0;
    width: 100%;
    flex: 1;
    max-height: none;
    &::-webkit-scrollbar {
      display: none;
    }
    & > div:last-child {
      margin-bottom: 20px;
    }
  }
`;

export const DimLayer = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.32);
`;

export const MissionItem = styled.div<{ $status: number }>`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 24px;
  gap: 16px;
  border-radius: 16px;

  ${({ $status, theme }) => {
    switch ($status) {
      case 0:
        return `
          & > ${DimLayer} { display: flex; }
          background: linear-gradient(0deg, rgba(16, 16, 16, 0.2) 0%, rgba(16, 16, 16, 0.2) 100%), #c8946d;
          box-shadow: 4px 4px 0px 0px rgba(81, 41, 12, 0.6) inset;
        `;
      case 1:
        return `
          & > ${MissionInfo} > ${MissionTag} {background: linear-gradient(87deg, #FFC701 12.16%, #FA5C12 86.63%);}
          & > ${MissionInfo} > ${MissionTitleTypo} {color: white;}
          & > ${MissionInfo} > ${MissionDescriptionTypo} {color:rgba(255, 255, 255, 0.8);}
          outline: 5px solid #F90;
          background: #c8946d;
          box-shadow: 4px 4px 0px 0px rgba(81, 41, 12, 0.6) inset;
          @media only screen and (max-width: ${theme.sizes.mediaMobileWidth}) {
            outline: 4px solid #F90;
          }
        `;
      case 2:
        return `
          & > ${MissionIcon} {opacity: 0.3}
          background: linear-gradient(0deg, rgba(16, 16, 16, 0.2) 0%, rgba(16, 16, 16, 0.2) 100%), #c8946d;
          box-shadow: 4px 4px 0px 0px rgba(81, 41, 12, 0.6) inset;
        `;
    }
  }}

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    padding: 12px 16px;
  }
`;

export const MissionIcon = styled.div`
  width: 80px;
  height: 80px;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('${({ theme }) => theme.urls.missionListItemBg}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: 56px;
    height: 56px;
  }
`;

export const MissionIconImage = styled.div`
  width: 53px;
  height: 42px;
  background-image: url('${({ theme }) => theme.urls.missionIcon}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: calc(53px * 0.7);
    height: calc(42px * 0.7);
  }
`;

export const MissionInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`;

export const MissionTag = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;

  color: rgba(255, 255, 255, 0.7);
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.12px;

  border-radius: 100px;
  background: #966c4d;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    font-size: 11px;
  }
`;

export const MissionTitleTypo = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-family: Poppins;
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.2px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    font-size: 18px;
  }
`;

export const MissionDescriptionTypo = styled.div`
  color: rgba(255, 255, 255, 0.4);
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.16px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    font-size: 14px;
  }
`;

export const MissionStatus = styled.div`
  width: 38px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: 28px;
  }
`;

export const CheckIcon = styled.div`
  width: 32px;
  height: 32px;
  background-image: url('${({ theme }) => theme.urls.check}');
  background-repeat: no-repeat;
  background-size: contain;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: 24px;
    height: 24px;
  }
`;

export const LockIcon = styled.div`
  z-index: 3;
  width: 30px;
  height: 36px;
  background-image: url('${({ theme }) => theme.urls.lock}');
  background-repeat: no-repeat;
  background-size: contain;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: calc(30px * 0.7);
    height: calc(36px * 0.7);
  }
`;

export const SubInfo = styled.div`
  width: 188px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background-image: url('${({ theme }) => theme.urls.missionListSubBg}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: calc(188px * 0.9);
    height: calc(48px * 0.9);
  }
`;

export const SubInfoLabel = styled.div`
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.16px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    font-size: 14px;
  }
`;

export const SubInfoValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.18px;

  & > span:nth-child(1) {
    color: #fff;
  }

  & > span:nth-child(2) {
    font-size: 12px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    font-size: 16px;
  }
`;

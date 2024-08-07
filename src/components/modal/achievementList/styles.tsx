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

export const AchievementList = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  background: #c08960;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 6px;
    background: none;
  }
`;

export const AchievementIcon = styled.div<{ $index: number }>`
  width: 113px;
  height: 113px;
  position: relative;
  overflow: hidden;
  background-image: url('${({ theme, $index }) => theme.urls.achievementList[$index].enable}');
  background-repeat: no-repeat;
  background-size: 90%;
  background-position: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: 80%;
    height: 80%;
  }
`;

export const LockIcon = styled.div`
  z-index: 3;
  width: 30px;
  height: 36px;
  position: absolute;

  background-image: url('${({ theme }) => theme.urls.lock}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const HoverContent = styled.div`
  bottom: -150px;
  z-index: 4;
  position: absolute;
  width: 150px;
  height: 150px;
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);

  transition: bottom 0.2s ease-in-out;
`;

export const AchievementItem = styled.div<{ $complete: boolean }>`
  width: 160px;
  height: 160px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('${({ theme }) => theme.urls.achievementListItemBg}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  ${({ $complete }) =>
    $complete
      ? `& > ${LockIcon}{display: none;}`
      : `& > ${AchievementIcon}{opacity:0.3;filter: grayscale(100%);background-color: rgba(0, 0, 0, 0.7);}`}

  &:hover > ${HoverContent} {
    bottom: 5px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    flex: 0 0 calc(33% - 3px);
    height: auto;
    aspect-ratio: 1;
  }
`;

export const NftLabel = styled.div`
  position: absolute;
  top: 7px;
  left: -26px;

  display: flex;
  width: 84px;
  transform: rotate(-45deg);
  padding: 4px 0 2px 0px;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-family: 'Press Start 2P';
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.1px;
  background: #592e0e;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    font-size: 6px;
    padding: 3px 0 1px 0;
  }
`;

export const NftTag = styled.div`
  display: flex;
  padding: 2px 8px 2px 8px;
  justify-content: center;
  align-items: center;

  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.12px;

  border-radius: 100px;
  border: 1px solid #fff;
`;

export const NftNameTypo = styled.div`
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  letter-spacing: -0.16px;
  & > span {
    font-weight: 600;
  }
`;

export const NftIdTypo = styled.div`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.12px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    font-size: 10px;
  }
`;

export const HoverDivider = styled.div`
  width: calc(100% - 20px);
  height: 1px;
  margin: 6px 10px;
  background: rgba(255, 255, 255, 0.2);
`;

export const RewardAtTypo = styled.div`
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.12px;
`;

export const BottomSheetContainer = styled.div<{ $visible: boolean }>`
  width: 100%;
  display: flex;
  padding: 16px 20px 32px 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 20px 20px 0px 0px;
  background: #fff;
  height: auto;
  position: absolute;
  z-index: 5;
  bottom: 0;

  transform: ${({ $visible }) => ($visible ? 'translateY(0)' : 'translateY(100%)')};
  transition: transform 0.2s ease-in-out;
`;

export const DimmedLayer = styled.div<{ $isLoading: boolean }>`
  display: ${({ $isLoading }) => ($isLoading ? 'block' : 'none')};
  position: fixed;
  z-index: 4;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
`;

export const CloseButtonMobile = styled.div`
  z-index: 3;
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  align-self: flex-end;
  border-radius: 100px;
  border: 2px solid #51290c;
  background: #fff;
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.3);
`;

export const PrimaryButton = styled.div`
  width: 100%;
  height: 47px;
  display: flex;
  cursor: pointer;
`;

export const ButtonLeft = styled.div`
  width: 50px;
  background-image: url('${({ theme }) => theme.urls.buttonLeft}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left center;
  image-rendering: pixelated;
`;

export const ButtonRight = styled.div`
  width: 50px;
  background-image: url('${({ theme }) => theme.urls.buttonRight}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right center;
  image-rendering: pixelated;
`;

export const ButtonCenter = styled.div`
  width: 100%;
  flex: 1;
  margin-left: -2px;
  margin-right: -2px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;
  text-align: center;
  font-family: 'Press Start 2P';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.15px;
  text-transform: uppercase;

  background-image: url('${({ theme }) => theme.urls.buttonCenter}');
  background-repeat: repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const AchievementDetailIcon = styled.div<{ $index: number }>`
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  background-image: url('${({ theme, $index }) => theme.urls.achievementList[$index].enable}');
  background-repeat: no-repeat;
  background-size: 90%;
  background-position: center;
`;

export const DetailInfo = styled.div`
  width: 100%;
  padding: 20px 0px 18px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 20px;
  background: #f4f4f4;
`;

export const DetailNftLabel = styled.div`
  display: flex;
  padding: 2px 8px 1px 8px;
  justify-content: center;
  align-items: center;
  color: #f17237;
  text-align: center;
  font-family: Poppins;
  font-size: 13px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.13px;

  border-radius: 100px;
  border: 2px solid #f17237;
`;

export const DetailName = styled.div`
  color: #171717;
  text-align: center;
  font-family: Poppins;
  font-size: 22px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.22px;
`;

export const DetailNftId = styled.div`
  color: #707070;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.16px;
`;

export const RewardDate = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RewardDateLabel = styled.div`
  color: #909090;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.16px;
`;

export const RewardDateValue = styled.div`
  color: #707070;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.16px;
`;

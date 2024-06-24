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

export const TorchIcon = styled.div`
  width: 40px;
  height: 48px;
  background-image: url('${({ theme }) => theme.urls.torch}');
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

export const AchievementList = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  background: #c08960;
`;

export const AchievementItem = styled.div`
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('${({ theme }) => theme.urls.achievementListItemBg}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const AchievementIcon = styled.div<{ $index: number }>`
  width: 112px;
  height: 112px;
  background-image: url('${({ theme, $index }) => theme.urls.achievementList[$index].enable}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const BottomSheetContainer = styled.div<{ $visible: boolean }>`
  width: 100%;
  display: flex;
  padding: 16px 20px 32px 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px 20px 0px 0px;
  background: #fff;
  height: auto;

  transform: ${({ $visible }) => ($visible ? 'translateY(0)' : 'translateY(100%)')};
  transition: transform 0.2s ease-in-out;
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

export const CloseIcon = styled.div`
  width: 12px;
  height: 12px;
  background-image: url('${({ theme }) => theme.urls.closePixel}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

export const MissionLabel = styled.div`
  display: flex;
  padding: 3px 14px 3px 11px;
  align-items: center;
  gap: 6px;
  border-radius: 100px;
  background: #ff6d3a;
  margin-bottom: 16px;
`;

export const MissionLabelIcon = styled(ReactSVG)`
  width: calc(19px * 0.9);
  height: calc(18px * 0.9);
  div {
    line-height: 0;
    svg {
      width: calc(19px * 0.9);
      height: calc(18px * 0.9);
    }
  }
`;

export const MissionLabelTypo = styled.div`
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.18px;
`;

export const MissionTitleTypo = styled.div`
  color: #171717;
  text-align: center;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.28px;
  margin-bottom: 12px;
`;

export const MissionDescriptionTypo = styled.div`
  color: #707070;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.18px;
  margin-bottom: 32px;
`;

export const PrimaryButton = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  cursor: pointer;
`;

export const ButtonLeft = styled.div`
  width: 58px;
  background-image: url('${({ theme }) => theme.urls.buttonLeft}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right center;
  image-rendering: pixelated;
`;

export const ButtonRight = styled.div`
  width: 58px;

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
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.15px;
  text-transform: uppercase;

  background-image: url('${({ theme }) => theme.urls.buttonCenter}');
  background-repeat: repeat no-repeat;
  background-size: contain;
  image-rendering: pixelated;
`;

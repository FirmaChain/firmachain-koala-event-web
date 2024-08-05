import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const WalletConnectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #fff;
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

export const BackButton = styled.div`
  z-index: 3;
  position: absolute;
  left: 20px;
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

export const WalletConnectContents = styled.div`
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WalletConnectBottom = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 40px 30px 40px;
  border-top: 1px solid rgba(151, 127, 109, 0.5);
  background: rgba(255, 255, 255, 0.4);
`;

export const WalletConnectTitleTypo = styled.div`
  color: #51290c;
  text-align: center;
  text-shadow: 3px 2px 0px #fff;
  font-family: 'Press Start 2P';
  font-size: 20px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.2px;
`;

export const WalletConnectSubTitleTypo = styled.div`
  color: #815433;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.16px;
`;

export const WalletConnectTopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const QrWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Step1Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Step1BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GuideStep = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Guide = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const GuidIconWrapper = styled.div`
  width: 60px;
  min-width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid rgba(81, 41, 12, 0.3);
  background: #e8bb98;
`;

export const GuideIcon = styled(ReactSVG)`
  width: 32px;
  height: 32px;
  line-height: 0;
  svg {
    fill: #51290c;
    width: 32px;
    height: 32px;
  }
`;

export const GuideTypo = styled.div`
  width: 100%;
  color: #363c60;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  white-space: pre;
`;

export const NextArrow = styled(ReactSVG)`
  width: 12px;
  min-width: 12px;
  margin-right: 20px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: scaleX(-1);
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const DownloadGuide = styled.div`
  width: 100%;
  height: 45px;
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #51290c;
  font-size: 16px;
  font-weight: 700;
  border-top: 2px solid rgba(81, 41, 12, 0.32);
  cursor: pointer;
  & > span {
    color: #f2702a;
    text-decoration-line: underline;
  }
`;

export const Step2Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Step2BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DownloadQR = styled.div`
  padding: 10px 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #815433;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  border-radius: 50px;
  border: 1px solid #815433;
`;

export const BackIcon = styled(ReactSVG)`
  margin-top: 4px;
  margin-left: -2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    stroke: #51290c;
    width: 10px;
    height: 20px;
  }
`;

export const StoreButtonList = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const StoreButton = styled.div`
  padding: 10px;
  flex: 1;
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #000;
  background: #e8bb98;
`;

export const StoreIcon = styled.div<{ $src: string }>`
  width: 45px;
  min-width: 45px;
  height: 45px;
  flex: 0 0 45px;

  background-image: url('${({ $src }) => $src}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const StoreTextWrapper = styled.div`
  flex: 1 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StoreText1 = styled.div`
  color: #815433;

  font-size: 12px;
  font-weight: 500;
`;

export const StoreText2 = styled.div`
  color: #815433;

  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.4px;
`;

export const HelpWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
`;

export const NeedHelpTypo = styled.div`
  color: #815433;
  font-size: 14px;
  font-weight: 500;
`;

export const ContactTypo = styled.div`
  color: #51290c;
  font-size: 14px;
  font-weight: 500;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const QRBorder = styled.div`
  padding: 20px 20px 12px 20px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 4px 4px 0px 0px rgba(81, 41, 12, 0.6) inset;
`;

export const BottomSheetContainer = styled.div<{ $visible: boolean }>`
  width: 100%;
  display: flex;
  padding: 16px 20px 32px 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 20px 20px 0px 0px;
  background: #fff;
  height: auto;

  transform: ${({ $visible }) => ($visible ? 'translateY(0)' : 'translateY(100%)')};
  transition: transform 0.2s ease-in-out;
`;

export const WalletConnectTitleTypoMobile = styled.div`
  color: #171717;
  text-align: center;
  text-shadow: 3px 2px 0px #fff;
  font-family: Poppins;
  font-size: 22px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.22px;
`;

export const WalletConnectSubTitleTypoMobile = styled.div`
  color: #707070;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.16px;
`;

export const PrimaryButton = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  cursor: pointer;
  margin-top: 20px;
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

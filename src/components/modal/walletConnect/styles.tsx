import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const WalletConnectContainer = styled.div`
  width: 100%;
  height: 600px;
  min-height: 600px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #fff;
`;

export const CloseButton = styled(ReactSVG)`
  position: absolute;
  top: 27px;
  right: 27px;
  cursor: pointer;

  width: 15px;
  height: 15px;
  svg {
    fill: #000;
    width: 15px;
    height: 15px;
  }
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
  background: #f7f7f7;
  border-top: 2px solid #f1f1f1;
  border-radius: 0 0 20px 20px;
`;

export const WalletConnectTitleTypo = styled.div`
  color: #363c60;
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.font26};
  font-weight: 600;
`;

export const WalletConnectSubTitleTypo = styled.div`
  color: #363c60;
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.font13};
  font-weight: 500;
  line-height: 1.5;
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
  border: 1px solid #d3d3d3;
  background: #fff;
`;

export const GuideIcon = styled(ReactSVG)`
  width: 32px;
  height: 32px;
  svg {
    fill: #000;
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
  color: #363c60;
  font-size: 16px;
  font-weight: 700;
  border-top: 2px solid #363c60;
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
  color: #363c60;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  border-radius: 50px;
  border: 1px solid #363c60;
`;

export const BackIcon = styled(ReactSVG)`
  position: absolute;
  top: 27px;
  left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    stroke: #000;
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
  background: #fff;
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
  color: #363c60;
  font-size: 12px;
  font-weight: 500;
`;

export const StoreText2 = styled.div`
  color: #363c60;
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
  color: #7c7c7c;
  font-size: 14px;
  font-weight: 500;
`;

export const ContactTypo = styled.div`
  color: #363c60;
  font-size: 14px;
  font-weight: 500;
  text-decoration-line: underline;
  cursor: pointer;
`;

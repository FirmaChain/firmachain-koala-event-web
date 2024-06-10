import React, { useState } from 'react';
import { QRCode } from 'react-qrcode-logo';

import Modal from '../base/modal';
import useModal from '../../../hooks/useModal';

import RequestQR from '../../requestQR';
import theme from '../../../styles/themes';

import {
  BackIcon,
  CloseButton,
  ContactTypo,
  DownloadGuide,
  DownloadQR,
  GuidIconWrapper,
  Guide,
  GuideIcon,
  GuideStep,
  GuideTypo,
  HelpWrapper,
  NeedHelpTypo,
  NextArrow,
  QrWrapper,
  Step1BottomWrapper,
  Step1Wrapper,
  Step2BottomWrapper,
  Step2Wrapper,
  StoreButton,
  StoreButtonList,
  StoreIcon,
  StoreText1,
  StoreText2,
  StoreTextWrapper,
  WalletConnectBottom,
  WalletConnectContainer,
  WalletConnectContents,
  WalletConnectSubTitleTypo,
  WalletConnectTitleTypo,
  WalletConnectTopWrapper,
} from './styles';

const WalletConnectModal = () => {
  const { closeModal, props } = useModal();
  const [step, setStep] = useState(1);

  const onCloseModal = () => {
    props.onClose('test', true);
    closeModal();
  };

  const onSuccess = (requestData: any) => {
    props.onClose(requestData.signer, true);
    onCloseModal();
  };

  const onFailed = () => {
    props.onClose('', false);
    onCloseModal();
  };

  return (
    <Modal visible={true} onClose={onCloseModal} width={'500px'}>
      <WalletConnectContainer>
        <CloseButton src={theme.urls.close} onClick={() => onCloseModal()} />
        <WalletConnectContents>
          {step === 1 && (
            <Step1Wrapper>
              <WalletConnectTopWrapper>
                <WalletConnectTitleTypo>Connect to Mobile</WalletConnectTitleTypo>
                <WalletConnectSubTitleTypo>
                  Securely connect your wallet with the firmastation app.
                </WalletConnectSubTitleTypo>
              </WalletConnectTopWrapper>
              <QrWrapper>
                <RequestQR module='/login' onSuccess={onSuccess} onFailed={onFailed} />
              </QrWrapper>
            </Step1Wrapper>
          )}
          {step === 2 && (
            <Step2Wrapper>
              <BackIcon src={theme.urls.back} onClick={() => setStep(1)}></BackIcon>
              <WalletConnectTopWrapper>
                <WalletConnectTitleTypo>What is Firma station?</WalletConnectTitleTypo>
                <WalletConnectSubTitleTypo>
                  For 15 years, our beloved Calibri was Microsoft’s default font and crown keeper of office
                  communications
                </WalletConnectSubTitleTypo>
                <QrWrapper>
                  <DownloadQR>Download QR</DownloadQR>
                  <QRCode
                    value={`https://download.firmachain.io`}
                    logoImage={theme.urls.qrBg}
                    size={140}
                    quietZone={0}
                    logoWidth={40}
                    logoHeight={40}
                  />
                </QrWrapper>
              </WalletConnectTopWrapper>
            </Step2Wrapper>
          )}
        </WalletConnectContents>
        <WalletConnectBottom>
          {step === 1 && (
            <Step1BottomWrapper>
              <GuideStep>
                <Guide>
                  <GuidIconWrapper>
                    <GuideIcon src={theme.urls.wcFirma} />
                  </GuidIconWrapper>
                  <GuideTypo>{'Firma station\napp open'}</GuideTypo>
                </Guide>
                <NextArrow src={theme.urls.back} />
                <Guide>
                  <GuidIconWrapper>
                    <GuideIcon src={theme.urls.wcQR} />
                  </GuidIconWrapper>
                  <GuideTypo>{'Login after\nscaning the QR'}</GuideTypo>
                </Guide>
              </GuideStep>
              <DownloadGuide onClick={() => setStep(2)}>
                What is &nbsp;<span>'FIRMA STATION'</span>&nbsp; wallet ?
              </DownloadGuide>
            </Step1BottomWrapper>
          )}
          {step === 2 && (
            <Step2BottomWrapper>
              <StoreButtonList>
                <StoreButton onClick={() => (window.location.href = 'https://apps.apple.com/kr/app/id1611660902')}>
                  <StoreIcon $src={theme.urls.storeApple} />
                  <StoreTextWrapper>
                    <StoreText1>Download on the</StoreText1>
                    <StoreText2>APP Store</StoreText2>
                  </StoreTextWrapper>
                </StoreButton>

                <StoreButton
                  onClick={() =>
                    (window.location.href = 'https://play.google.com/store/apps/details?id=com.firma_station_mobile')
                  }
                >
                  <StoreIcon $src={theme.urls.storeGoogle} />
                  <StoreTextWrapper>
                    <StoreText1>GET IT ON</StoreText1>
                    <StoreText2>Google Play</StoreText2>
                  </StoreTextWrapper>
                </StoreButton>
              </StoreButtonList>
              <HelpWrapper>
                <NeedHelpTypo>Need help?</NeedHelpTypo>
                <ContactTypo
                  onClick={() => {
                    window.location.href = 'mailto:contact@firmachain.org';
                  }}
                >
                  Contact us
                </ContactTypo>
              </HelpWrapper>
            </Step2BottomWrapper>
          )}
        </WalletConnectBottom>
      </WalletConnectContainer>
    </Modal>
  );
};

export default React.memo(WalletConnectModal);

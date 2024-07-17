import React, { useState } from 'react';
import { QRCode } from 'react-qrcode-logo';

import Modal from '../base/modal';
import useModal from '../../../hooks/useModal';

import RequestQR from '../../requestQR';
import theme from '../../../styles/themes';

import {
  BackButton,
  BackIcon,
  CloseButton,
  CloseIcon,
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
  QRBorder,
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
import Borders from '../../borders';

const WalletConnectModal = () => {
  const { closeModal, props } = useModal();
  const [step, setStep] = useState(1);

  const handleCloseModal = () => {
    props.handleClose('firma12341234abcdabcdabcdabcdabcdabcdabcdabc', true);
    closeModal();
  };

  const handleSuccess = (requestData: any) => {
    props.handleClose(requestData.signer, true);
    handleCloseModal();
  };

  const handleFailed = () => {
    props.handleClose('', false);
    handleCloseModal();
  };

  return (
    <Modal visible={true} handleClose={handleCloseModal} width={'580px'}>
      <WalletConnectContainer>
        <Borders color='#51290c'>
          <CloseButton onClick={() => handleCloseModal()}>
            <CloseIcon />
          </CloseButton>
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
                  <RequestQR module='/login' handleSuccess={handleSuccess} handleFailed={handleFailed} />
                </QrWrapper>
              </Step1Wrapper>
            )}
            {step === 2 && (
              <Step2Wrapper>
                <BackButton onClick={() => setStep(1)}>
                  <BackIcon src={theme.urls.back} />
                </BackButton>
                <WalletConnectTopWrapper>
                  <WalletConnectTitleTypo>What is Firma station?</WalletConnectTitleTypo>
                  <WalletConnectSubTitleTypo>
                    Wallet, Staking, Governance Tool for FIRMACHAIN.
                  </WalletConnectSubTitleTypo>
                  <QrWrapper>
                    <DownloadQR>Download QR</DownloadQR>
                    <QRBorder>
                      <QRCode
                        value={`https://download.firmachain.io`}
                        logoImage={theme.urls.qrBg}
                        size={140}
                        quietZone={0}
                        logoWidth={40}
                        logoHeight={40}
                      />
                    </QRBorder>
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
                  <StoreButton onClick={() => window.open('https://apps.apple.com/kr/app/id1611660902')}>
                    <StoreIcon $src={theme.urls.storeApple} />
                    <StoreTextWrapper>
                      <StoreText1>Download on the</StoreText1>
                      <StoreText2>APP Store</StoreText2>
                    </StoreTextWrapper>
                  </StoreButton>

                  <StoreButton
                    onClick={() =>
                      window.open('https://play.google.com/store/apps/details?id=com.firma_station_mobile')
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
                  <ContactTypo onClick={() => window.open('mailto:contact@firmachain.org')}>Contact us</ContactTypo>
                </HelpWrapper>
              </Step2BottomWrapper>
            )}
          </WalletConnectBottom>
        </Borders>
      </WalletConnectContainer>
    </Modal>
  );
};

export default React.memo(WalletConnectModal);

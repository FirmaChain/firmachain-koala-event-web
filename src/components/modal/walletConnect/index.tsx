import React, { useEffect, useState } from 'react';
import { QRCode } from 'react-qrcode-logo';

import Modal from '../base/modal';
import useModal from '../../../hooks/useModal';
import useScreen from '../../../hooks/useScreen';

import RequestQR from '../../requestQR';
import Borders from '../../borders';
import theme from '../../../styles/themes';

import {
  BackButton,
  BackIcon,
  BottomSheetContainer,
  ButtonCenter,
  ButtonLeft,
  ButtonRight,
  CloseButton,
  CloseButtonMobile,
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
  PrimaryButton,
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
  WalletConnectSubTitleTypoMobile,
  WalletConnectTitleTypo,
  WalletConnectTitleTypoMobile,
  WalletConnectTopWrapper,
} from './styles';

const WalletConnectModal = () => {
  const { closeModal, props } = useModal();
  const { isMobile } = useScreen();
  const [step, setStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [isStartedMobile, setIsStartedMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const handleCloseModal = () => {
    setIsVisible(false);
    setTimeout(closeModal, 200);
  };

  const handleSuccess = (requestData: any) => {
    props.handleClose(requestData.signer, true);
    setIsStartedMobile(false);
    handleCloseModal();
  };

  const handleFailed = () => {
    props.handleClose('', false);
    setIsStartedMobile(false);
    handleCloseModal();
  };

  return (
    <Modal
      visible={true}
      maskClosable={true}
      handleClose={handleCloseModal}
      width={'580px'}
      type={isMobile ? 'bottom-sheet' : 'default'}
    >
      {isMobile ? (
        <BottomSheetContainer $visible={isVisible}>
          <CloseButtonMobile onClick={() => handleCloseModal()}>
            <CloseIcon />
          </CloseButtonMobile>
          <WalletConnectTitleTypoMobile>Connect to Mobile</WalletConnectTitleTypoMobile>
          <WalletConnectSubTitleTypoMobile>
            Securely connect your wallet with the firmastation app.
          </WalletConnectSubTitleTypoMobile>
          {isStartedMobile && (
            <RequestQR isHidden={true} module='/login' handleSuccess={handleSuccess} handleFailed={handleFailed} />
          )}

          <PrimaryButton onClick={() => setIsStartedMobile(true)}>
            <ButtonLeft />
            <ButtonCenter>CONNECT</ButtonCenter>
            <ButtonRight />
          </PrimaryButton>
        </BottomSheetContainer>
      ) : (
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
      )}
    </Modal>
  );
};

export default React.memo(WalletConnectModal);

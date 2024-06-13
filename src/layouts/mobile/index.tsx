import React, { useEffect } from 'react';

import useModal from '../../hooks/useModal';

import theme from '../../styles/themes';
import {
  Character1,
  Character2,
  Character3,
  ChracterWrapper,
  ContactTypo,
  FCTLogo,
  GuideSubTypo,
  GuideTypo,
  GuideWrapper,
  LandingButton,
  LogoImage,
  MobileGuideContainer,
  PoweredByValueTypo,
  PoweredByWrapper,
  TopWrapper,
  WorldBg,
} from './styles';

const MobileGuideLine = () => {
  const { closeModal } = useModal();

  useEffect(() => {
    closeModal();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MobileGuideContainer>
      <TopWrapper>
        <FCTLogo src={theme.urls.fctLogo} />
        <PoweredByWrapper>
          <PoweredByValueTypo src={theme.urls.firmaLogo} />
        </PoweredByWrapper>
      </TopWrapper>
      <WorldBg />

      <GuideWrapper>
        <LogoImage src={theme.urls.loadingLogo} />
        <ChracterWrapper>
          <Character1 />
          <Character2 />
          <Character3 />
        </ChracterWrapper>
        <GuideTypo>Optimized for Larger Displays</GuideTypo>
        <GuideSubTypo>Please use a higher resolution for the best experience during this event demo.</GuideSubTypo>
        <LandingButton>Official site</LandingButton>
        <ContactTypo
          onClick={() => {
            window.location.href = 'mailto:contact@firmachain.org';
          }}
        >
          contact us
        </ContactTypo>
      </GuideWrapper>
    </MobileGuideContainer>
  );
};

export default React.memo(MobileGuideLine);

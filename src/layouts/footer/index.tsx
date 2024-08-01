import React from 'react';

import useScreen from '../../hooks/useScreen';

import { MEDIUM_URL, TELEGRAM_URL, TIWTTER_URL } from '../../constants/common';

import theme from '../../styles/themes';
import { FooterContainer, FooterTypo, FooterWrapper, SocialIcon, SocialItem, SocialWrapper } from './styles';

const Footer = ({ isLogin }: { isLogin: boolean }) => {
  const { isSmall } = useScreen();

  return (
    <FooterContainer $isLogin={isLogin}>
      <FooterWrapper>
        <FooterTypo>ⓒ FIRMACHAIN Pte. Ltd.{isSmall === false && ' All rights reserved.'}</FooterTypo>
        <SocialWrapper>
          <SocialItem onClick={() => window.open(MEDIUM_URL)}>
            <SocialIcon src={theme.urls.socialMedium} />
          </SocialItem>
          <SocialItem onClick={() => window.open(TIWTTER_URL)}>
            <SocialIcon src={theme.urls.socialX} />
          </SocialItem>
          <SocialItem onClick={() => window.open(TELEGRAM_URL)}>
            <SocialIcon src={theme.urls.socialTelegram} />
          </SocialItem>
        </SocialWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default React.memo(Footer);

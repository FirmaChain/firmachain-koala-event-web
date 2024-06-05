import React from 'react';

import { FooterContainer, FooterTypo, FooterWrapper, SocialIcon, SocialItem, SocialWrapper } from './styles';
import theme from '../../styles/themes';

const Footer = ({ isLogin }: { isLogin: boolean }) => {
  return (
    <FooterContainer $isLogin={isLogin}>
      <FooterWrapper>
        <FooterTypo>ⓒ FIRMACHAIN Pte. Ltd. All rights reserved.</FooterTypo>
        <SocialWrapper>
          <SocialItem>
            <SocialIcon src={theme.urls.socialMedium} />
          </SocialItem>
          <SocialItem>
            <SocialIcon src={theme.urls.socialX} />
          </SocialItem>
          <SocialItem>
            <SocialIcon src={theme.urls.socialTelegram} />
          </SocialItem>
        </SocialWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default React.memo(Footer);

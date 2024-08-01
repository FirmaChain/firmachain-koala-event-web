import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const FooterContainer = styled.footer<{ $isLogin: boolean }>`
  position: ${({ $isLogin }) => ($isLogin ? 'absolute' : 'fixed')};
  z-index: 10;
  bottom: 0;
  width: 100%;
  height: ${({ theme }) => theme.sizes.footerHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    height: 44px;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  padding: 0px 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    padding: 0 20px;
    justify-content: center;
  }
`;

export const FooterTypo = styled.div`
  color: #626c27;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    display: none;
  }
`;

export const SocialItem = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: auto;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
`;

export const SocialIcon = styled(ReactSVG)`
  div {
    line-height: 0;
  }
`;

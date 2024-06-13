import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const MobileGuideContainer = styled.div`
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.navBackground};

  padding: 0 50px;
`;

export const GuideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 20px;
  margin-top: 10vh;
`;

export const LogoImage = styled(ReactSVG)`
  z-index: 3;
  svg {
    width: 100%;
    height: 100px;
  }
`;

export const LandingButton = styled.div`
  z-index: 5;
  width: 200px;
  padding: 16px 0;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
  border-radius: 10px;
  border: 2px solid #983906;
  background: #f2702a;
`;

export const GuideTypo = styled.div`
  color: #fff;
  font-size: ${({ theme }) => theme.sizes.font20};
  font-weight: 600;
`;

export const GuideSubTypo = styled.div`
  max-width: 300px;
  text-align: center;
  color: #ccc;
  opacity: 0.7;
  font-size: ${({ theme }) => theme.sizes.font14};
  line-height: 1.6;
`;

export const ChracterWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Character1 = styled.div`
  width: 66px;
  height: 66px;
  background-image: url('${({ theme }) => theme.urls.character2}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: pixelated;
`;

export const Character2 = styled.div`
  width: 60px;
  height: 60px;
  margin-top: 8px;
  background-image: url('${({ theme }) => theme.urls.character4}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: pixelated;
`;

export const Character3 = styled.div`
  width: 102px;
  height: 67px;
  margin-top: -3px;
  margin-left: -40px;
  background-image: url('${({ theme }) => theme.urls.character3}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: pixelated;
`;

export const TopWrapper = styled.div`
  position: absolute;
  top: 25px;
  left: 32px;
  display: flex;
  gap: 8px;
`;

export const PoweredByWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2px;
`;

export const FCTLogo = styled(ReactSVG)`
  svg {
    width: 26px;
    height: 30px;
    fill: #fff !important;
  }
`;

export const PoweredByValueTypo = styled(ReactSVG)`
  svg {
    width: 120px;
    height: 28px;
    fill: #fff;
  }
`;

export const ContactTypo = styled.div`
  color: #888;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  text-decoration-line: underline;
  cursor: pointer;
  margin-top: -5px;
`;

export const WorldBg = styled.div`
  position: absolute;
  width: 100%;
  height: 30vh;
  opacity: 0.3;
  margin-bottom: 20vh;
  background-image: url('${({ theme }) => theme.urls.worldBg}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: pixelated;
`;

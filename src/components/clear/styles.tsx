import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

// 스케일 애니메이션
const scaleUp = keyframes`
  from {
    transform: translate(-50%, -50%) scale(0);
  }
  to {
    transform: translate(-50%, -50%) scale(1);
  }
`;

const showUp = keyframes`
  0%{
    opacity:0;
  }
  99%{
    opacity:0;
  }
  100% {
    opacity:1
  }
`;

export const DimmedLayer = styled.div<{ $isLoading: boolean }>`
  display: ${({ $isLoading }) => ($isLoading ? 'block' : 'none')};
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
`;

export const ClearEffect1 = styled.div<{ $type: number }>`
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 920px;
  height: 907px;
  background-image: url('${({ theme }) => theme.urls.clearBg1}');
  background-repeat: no-repeat;
  background-size: contain;
  animation: ${scaleUp} 0.8s ease-out forwards, ${rotate} 10s linear infinite;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(920px * 0.8);
    height: calc(907px * 0.8);
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: calc(920px * 0.6);
    height: calc(907px * 0.6);
  }
`;

export const ClearEffect2 = styled.div`
  z-index: 4;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 888px;
  height: 793px;
  background-image: url('${({ theme }) => theme.urls.clearBg2}');
  background-repeat: no-repeat;
  background-size: contain;
  animation: ${scaleUp} 0.5s ease-out forwards;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(888px * 0.8);
    height: calc(793px * 0.8);
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: calc(888px * 0.6);
    height: calc(793px * 0.6);
  }
`;

export const ClearType0 = styled.div`
  z-index: 5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  height: 532px;
  background-image: url('${({ theme }) => theme.urls.clearBg3}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  animation: ${scaleUp} 0.3s ease-out forwards;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(650px * 0.8);
    height: calc(532px * 0.8);
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: calc(650px * 0.5);
    height: calc(532px * 0.5);
  }
`;

const ClearType = styled.div`
  z-index: 5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  height: 532px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  animation: ${scaleUp} 0.3s ease-out forwards;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(650px * 0.8);
    height: calc(532px * 0.8);
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: calc(650px * 0.5);
    height: calc(532px * 0.5);
  }
`;

export const ClearType1 = styled(ClearType)`
  background-image: url('${({ theme }) => theme.urls.clearBg4}');
`;

export const ClearType2 = styled(ClearType)`
  background-image: url('${({ theme }) => theme.urls.clearBg5}');
`;

export const ClearType3 = styled(ClearType)`
  background-image: url('${({ theme }) => theme.urls.clearBg6}');
`;

export const ClearType4 = styled(ClearType)`
  background-image: url('${({ theme }) => theme.urls.clearBg7}');
`;

export const TierIcon = styled.div<{ $src: string }>`
  display: flex;
  z-index: 6;
  position: absolute;
  top: calc(50% + 80px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 155px;
  height: 155px;
  background-image: url('${({ $src }) => $src}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  animation: ${showUp} 0.3s ease-out forwards;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(155px * 0.8);
    height: calc(155px * 0.8);
    top: calc(50% + 75px);
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: calc(155px * 0.5);
    height: calc(155px * 0.5);
    top: calc(50% + 50px);
  }
`;

export const MedalIcon = styled.div<{ $src: string }>`
  display: flex;
  z-index: 6;
  position: absolute;
  top: calc(50% + 65px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 155px;
  height: 155px;
  background-image: url('${({ $src }) => $src}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  animation: ${showUp} 0.3s ease-out forwards;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(155px * 0.8);
    height: calc(155px * 0.8);
    top: calc(50% + 54px);
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: calc(155px * 0.5);
    height: calc(155px * 0.5);
    top: calc(50% + 30px);
  }
`;

export const KOA = styled.div`
  width: calc(178px * 1.8);
  height: calc(98px * 1.8);
  position: fixed;
  top: calc(50% - 180px);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  filter: drop-shadow(0 4px 0px #00000066);
  background-image: url('${({ theme }) => theme.urls.floatingKoa}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(178px * 1.5);
    height: calc(98px * 1.5);
    top: calc(50% - 150px);
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: calc(178px * 1);
    height: calc(98px * 1);
    top: calc(50% - 90px);
  }
`;

export const ClearDescription = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 55;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  animation: ${showUp} 0.3s ease-out forwards;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    top: calc(50% - 10px);
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    top: calc(50% - 8px);
    gap: 5px;
  }
`;

export const ClearDescription2 = styled.div`
  position: absolute;
  top: calc(50% - 40px);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 55;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  animation: ${showUp} 0.3s ease-out forwards;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    top: calc(50% - 34px);
    max-width: 160px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    top: calc(50% - 22px);
    max-width: 115px;

    gap: 5px;
  }
`;

export const DescriptionTypo = styled.div`
  color: #8122fa;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.18px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    font-size: 16px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    font-size: 12px;
  }
`;

export const DescriptionTypo2 = styled.div`
  text-align: center;
  color: #ffa10e;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.18px;
  animation: ${showUp} 0.3s ease-out forwards;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    font-size: 16px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    font-size: 12px;
  }
`;

export const SquareIcon = styled.div`
  width: 12px;
  height: 12px;
  background-image: url('${({ theme }) => theme.urls.square}');
  background-repeat: no-repeat;
  background-size: contain;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: 10px;
    height: 10px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: 6px;
    height: 6px;
  }
`;

export const SquareIcon2 = styled.div`
  width: 12px;
  height: 12px;
  background-image: url('${({ theme }) => theme.urls.square2}');
  background-repeat: no-repeat;
  background-size: contain;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: 10px;
    height: 10px;
    min-width: 10px;
    min-height: 10px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: 6px;
    height: 6px;
    min-width: 6px;
    min-height: 6px;
  }
`;

export const NftLabel = styled.div`
  position: absolute;
  top: calc(50% + 170px);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 55;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px 5px 12px;

  color: #fff;
  font-family: 'Press Start 2P';
  font-size: 12px;
  font-weight: 400;
  line-height: 130%;

  border-radius: 100px;
  background: #f89705;

  animation: ${showUp} 0.3s ease-out forwards;
  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    font-size: 11px;
    top: calc(50% + 140px);
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    font-size: 8px;
    top: calc(50% + 85px);
    padding: 4px 5px 3px 6px;
  }
`;

export const LuckyCoinWrapper = styled.div`
  position: absolute;
  top: calc(50% + 90px);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 55;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  animation: ${showUp} 0.3s ease-out forwards;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    top: calc(50% + 80px);
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    top: calc(50% + 50px);
  }
`;

export const LuckyCoinIcon = styled.div`
  width: 56px;
  height: 56px;
  background-image: url('${({ theme }) => theme.urls.koa}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: 50px;
    height: 50px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: 35px;
    height: 35px;
  }
`;

export const LuckyCoinTypo = styled.div`
  color: #ff7a00;
  font-family: Poppins;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.22px;
  margin-bottom: 20px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    font-size: 20px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    font-size: 14px;
    margin-bottom: 0px;
  }
`;

export const LuckyCoinValueLabel = styled.div`
  display: flex;
  padding: 5px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: #fff;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.18px;

  border-radius: 100px;
  background: #ff7a00;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    font-size: 16px;
    padding: 5px 16px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    font-size: 12px;
    padding: 4px 8px;
  }
`;

export const FCTIcon = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  background-image: url('${({ theme }) => theme.urls.fctPixcel}');
  background-repeat: no-repeat;
  background-size: contain;
  image-rendering: pixelated;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaSmallWidth}) {
    width: calc(50px * 0.9);
    height: calc(50px * 0.9);
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: calc(50px * 0.6);
    height: calc(50px * 0.6);
    margin-bottom: 0;
  }
`;

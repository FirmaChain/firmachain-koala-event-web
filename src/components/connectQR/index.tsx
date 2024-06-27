import React, { useEffect, useRef } from 'react';
import { QRCode } from 'react-qrcode-logo';
import GridLoader from 'react-spinners/GridLoader';

import theme from '../../styles/themes';
import { QRWrapper } from './styles';

interface IProps {
  qrSize: number;
  qrcode: string;
  expireDate: Date | null;
  isActive: boolean;
  setTimerText: (timerText: string) => void;
  handleExpired: () => void;
  handleTick: () => void;
}

const ConnectQR = ({ qrSize, qrcode, expireDate, isActive, setTimerText, handleExpired, handleTick }: IProps) => {
  const tick = () => handleTick();
  const expired = () => handleExpired();

  useInterval(
    () => {
      if (expireDate === null) return;
      if (isActive === false) return;

      tick();

      const now = new Date();
      const diff = expireDate.getTime() - now.getTime();

      if (diff < 0) {
        expired();
        return;
      }

      let diffMin = Math.floor((diff / (1000 * 60)) % 60);
      let diffSec = Math.floor((diff / 1000) % 60);

      diffMin = diffMin === -1 ? 0 : diffMin;
      diffSec = diffSec === -1 ? 0 : diffSec;

      setTimerText(`${('00' + diffMin).slice(-2)}:${('00' + diffSec).slice(-2)}`);
    },
    isActive ? 500 : null
  );

  return (
    <QRWrapper $isLoading={qrcode === ''}>
      {qrcode === '' ? (
        <GridLoader loading={true} color={'#F2702A'} />
      ) : (
        <QRCode
          value={`${qrcode}`}
          size={qrSize}
          quietZone={0}
          logoWidth={40}
          logoHeight={40}
          logoImage={theme.urls.qrBg}
        />
      )}
    </QRWrapper>
  );
};

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) savedCallback.current();
    };

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default React.memo(ConnectQR);

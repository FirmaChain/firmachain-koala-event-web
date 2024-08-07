import React, { useState, useEffect } from 'react';

import useAPI from './api';
import ConnectQR from '../../components/connectQR';

import { QRContainer, QRTimerText, RefreshIconButton } from './styles';

interface IProps {
  module: string;
  isHidden?: boolean;
  handleSuccess: (requestData: Object) => void;
  handleFailed: (requestData: Object) => void;
  params?: Object;
  signer?: string;
}

const RequestQR = ({ module, isHidden = false, handleSuccess, handleFailed, params = {}, signer = '' }: IProps) => {
  const { checkRequest, generateRequestQR } = useAPI();

  const [requestKey, setRequestKey] = useState('');
  const [qrcode, setQrcode] = useState('');
  const [expireDate, setExpireDate] = useState<Date | null>(null);
  const [timerText, setTimerText] = useState('02:59');
  const [activeQR, setActiveQR] = useState(false);

  useEffect(() => requestQR(), []); // eslint-disable-line react-hooks/exhaustive-deps

  const openDeepLink = (qrCode: string) => {
    const link = qrCode.replace('sign://', 'firmastation://');

    window.location.href = link;
  };

  const requestQR = () => {
    generateRequestQR(module, { ...params, signer })
      .then((result) => {
        if (result !== null) {
          setRequestKey(result.requestKey);
          setQrcode(result.qrcode);
          setExpireDate(result.expire);
          setActiveQR(true);

          if (isHidden) {
            openDeepLink(result.qrcode);
          }
        } else {
          throw new Error('INVALID REQUEST');
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const refreshRequestQR = () => {
    setRequestKey('');
    setQrcode('');
    setExpireDate(null);
    setActiveQR(false);

    requestQR();
  };

  const handleTick = async () => {
    checkRequest(requestKey).then((requestData) => {
      if (Number(requestData.status) === 1) {
        setActiveQR(false);
        handleSuccess(requestData);
      } else if (Number(requestData.status) === -2) {
        setActiveQR(false);
        handleFailed(requestData);
      }
    });
  };

  return (
    <QRContainer $hidden={isHidden}>
      <ConnectQR
        qrSize={140}
        qrcode={qrcode}
        expireDate={expireDate}
        isActive={activeQR}
        setTimerText={(value: string) => {
          setTimerText(value);
        }}
        handleExpired={() => {
          setActiveQR(false);
          refreshRequestQR();
        }}
        handleTick={() => {
          handleTick();
        }}
      />
      {qrcode !== '' && (
        <QRTimerText onClick={() => refreshRequestQR()}>
          {timerText}
          <RefreshIconButton />
        </QRTimerText>
      )}
    </QRContainer>
  );
};

export default React.memo(RequestQR);

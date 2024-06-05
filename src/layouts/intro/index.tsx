import React from 'react';
import { useSnackbar } from 'notistack';

import useModal from '../../hooks/useModal';
import { walletActions } from '../../redux/action';

import SectionTitle from './sectionTitle';
import SectionBoard from './sectionBoard';
import {
  IntroContainer,
  TitleWrapper,
  TitleLogoWrapper,
  TitleLogoCharacter,
  TitleLogoImage,
  TitleLabelImage,
  TitleButton,
} from './styles';

const Intro = ({ handleLoading }: { handleLoading: () => void }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { openModal } = useModal();

  const onClose = (address: string, success: boolean) => {
    walletActions.handleWalletAddress(address);

    handleLoading();

    if (success) {
      enqueueSnackbar('Successfully connected to wallet.', {
        variant: 'success',
        autoHideDuration: 2000,
      });
    } else {
      enqueueSnackbar('failed connect to wallet.', {
        variant: 'error',
        autoHideDuration: 2000,
      });
    }
  };

  const handleWalletConnectModal = () => {
    openModal({ type: 'walletConnect', props: { onClose } });
  };

  return (
    <IntroContainer>
      <SectionTitle />
      <SectionBoard />
      <TitleWrapper>
        <TitleLogoWrapper>
          <TitleLogoCharacter />
          <TitleLogoImage />
        </TitleLogoWrapper>
        <TitleLabelImage />
        <TitleButton onClick={() => handleWalletConnectModal()}>START</TitleButton>
      </TitleWrapper>
    </IntroContainer>
  );
};

export default React.memo(Intro);

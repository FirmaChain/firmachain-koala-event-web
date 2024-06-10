import { useContext } from 'react';
import { createPortal } from 'react-dom';

import { ModalStateContext } from '../../../contexts/modalProvider';

import walletConnect from '../walletConnect';

const MODAL_COMPONENTS: any = {
  walletConnect,
};

const Portal = () => {
  const modalContext = useContext(ModalStateContext);

  if (!modalContext || !modalContext.state.type) return null;

  const Modal = MODAL_COMPONENTS[modalContext.state.type];

  return createPortal(<Modal {...modalContext.state.props} />, document.getElementById('modal') as HTMLElement);
};

export default Portal;

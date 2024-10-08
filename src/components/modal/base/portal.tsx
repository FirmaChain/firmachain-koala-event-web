import { useContext } from 'react';
import { createPortal } from 'react-dom';

import { ModalStateContext } from '../../../contexts/modalProvider';

import walletConnect from '../walletConnect';
import missionList from '../missionList';
import mission from '../mission';
import achievementList from '../achievementList';
import quiz from '../quiz';
import survey from '../survey';

const MODAL_COMPONENTS: any = {
  walletConnect,
  missionList,
  mission,
  achievementList,
  quiz,
  survey,
};

const Portal = () => {
  const modalContext = useContext(ModalStateContext);

  if (!modalContext || !modalContext.state.type) return null;

  const Modal = MODAL_COMPONENTS[modalContext.state.type];

  return createPortal(<Modal {...modalContext.state.props} />, document.getElementById('modal') as HTMLElement);
};

export default Portal;

import { useContext } from 'react';

import { ModalStateContext } from '../contexts/modalProvider';

const useModal = () => {
  const modalContext = useContext(ModalStateContext);

  if (!modalContext) throw new Error('context must be use inside provider');

  const openModal = ({ type, props = null }: { type: string | null; props: any }) => {
    modalContext.setState({ type, props });
  };

  const closeModal = () => {
    modalContext.setState({ type: null, props: null });
  };

  const props = modalContext.state.props;

  return { openModal, closeModal, props };
};

export default useModal;

import React, { useEffect } from 'react';

import { ModalOverlay, ModalWrapper, ModalInner } from './styles';

interface IProps {
  onClose: () => void;
  maskClosable?: boolean;
  visible: boolean;
  width: string;
  children?: React.ReactNode;
}

const Modal = ({ onClose, visible, width, maskClosable = false, children }: IProps) => {
  const onMaskClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (maskClosable) {
      if (e.target === e.currentTarget) {
        onClose();
      }
    }
  };

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);

  return (
    <>
      <ModalOverlay $visible={visible} />
      <ModalWrapper tabIndex={-1} $visible={visible} onClick={onMaskClick}>
        <ModalInner tabIndex={0} $width={width}>
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default React.memo(Modal);

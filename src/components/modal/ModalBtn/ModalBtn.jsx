import React, { useState } from 'react';
import * as S from './modalBtn.style';
import Modal from '../Modal/Modal';

export default function ModalBtn({ children }) {
  //모달열기
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <button onClick={handleOpenModal}>
        <S.MoreIcon />
      </button>
      {isOpenModal && (
        <>
          <Modal handleCloseModal={handleCloseModal}>{children}</Modal>
        </>
      )}
    </>
  );
}

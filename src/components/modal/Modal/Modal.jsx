import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import * as S from './modal.style';
const Modal = ({ children, setIsOpenModal, setIsOpenAlert }) => {
  const outSection = useRef();
  return ReactDOM.createPortal(
    <article>
      <S.ModalContainer>
        <S.PanningBox>
          <S.PanningBar></S.PanningBar>
        </S.PanningBox>
        <S.ModalList>{children}</S.ModalList>
      </S.ModalContainer>
      <S.Background
        ref={outSection}
        onClick={(e) => {
          if (outSection.current === e.target) {
            setIsOpenModal(false);
            setIsOpenAlert(false);
          }
        }}
      />
    </article>,
    document.getElementById('modal'),
  );
};
export default Modal;

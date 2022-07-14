import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import * as S from './modal.style';
const Modal = ({ children, handleCloseModal }) => {
  const outSection = useRef();
  return ReactDOM.createPortal(
    <article>
      <S.Background
        ref={outSection}
        onClick={(e) => {
          if (outSection.current === e.target) {
            handleCloseModal();
          }
        }}
      />
      <S.ModalContainer>
        <S.PanningBox>
          <S.PanningBar></S.PanningBar>
        </S.PanningBox>
        <S.ModalList>{children}</S.ModalList>
      </S.ModalContainer>
    </article>,
    document.getElementById('modal'),
  );
};
export default Modal;

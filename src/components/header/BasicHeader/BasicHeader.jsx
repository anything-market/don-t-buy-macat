import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderModal from '../../modal/HeaderModal/HeaderModal';
import * as S from './basicHeader.style';

export default function BasicHeader() {
  const navigate = useNavigate();
  const handleGoPrev = () => {
    navigate(-1);
  };
  const [isOpenModal, setIsOpenModal] = useState(false);
  const outSection = useRef();
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  return (
    <>
      <S.BasicHeaderLayout>
        <button onClick={handleGoPrev}>
          <S.ArrowLeftIcon />
        </button>
        <button onClick={handleOpenModal}>
          <S.MoreIcon />
        </button>
      </S.BasicHeaderLayout>
      {isOpenModal && (
        <article>
          <S.Background
            ref={outSection}
            onClick={(e) => {
              if (outSection.current === e.target) {
                setIsOpenModal(false);
              }
            }}
          >
            <HeaderModal />
          </S.Background>
        </article>
      )}
    </>
  );
}

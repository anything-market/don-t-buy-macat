import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './basicHeader.style';
import ModalBtn from '../../modal/ModalBtn/ModalBtn';

export default function BasicHeader() {
  const navigate = useNavigate();
  const handleGoPrev = () => {
    navigate(-1);
  };
  return (
    <>
      <S.BasicHeaderLayout>
        <button onClick={handleGoPrev}>
          <S.ArrowLeftIcon />
        </button>
        <ModalBtn contents="basic" />
      </S.BasicHeaderLayout>
    </>
  );
}

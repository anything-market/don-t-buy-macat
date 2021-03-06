import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './basicHeader.style';
import { BasicHeaderLayout } from '../commonHeader.style';
import ModalBtn from '../../modal/ModalBtn/ModalBtn';
import BasicModalContent from '../../modal/modalContent/BasicModalContent/BasicModalContent';

export default function BasicHeader() {
  const navigate = useNavigate();
  const handleGoPrev = () => {
    navigate(-1);
  };
  return (
    <>
      <BasicHeaderLayout>
        <button onClick={handleGoPrev}>
          <S.ArrowLeftIcon />
        </button>
        <ModalBtn>
          <BasicModalContent />
        </ModalBtn>
      </BasicHeaderLayout>
    </>
  );
}

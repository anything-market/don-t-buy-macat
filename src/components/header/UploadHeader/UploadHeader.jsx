import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './uploadHeader.style';
import { BasicHeaderLayout } from '../commonHeader.style';
export default function UploadHeader({ id, isValid }) {
  const navigate = useNavigate();
  const handleGoPrev = () => {
    navigate(-1);
  };
  console.log(isValid);
  return (
    <BasicHeaderLayout>
      <button onClick={handleGoPrev}>
        <S.ArrowLeftIcon />
      </button>
      <S.SaveBtn form={id} disabled={!isValid}>
        저장
      </S.SaveBtn>
    </BasicHeaderLayout>
  );
}

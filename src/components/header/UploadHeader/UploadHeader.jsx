import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './uploadHeader.style';
import { BasicHeaderLayout } from '../commonHeader.style';
export default function UploadHeader({ id }) {
  const navigate = useNavigate();
  const handleGoPrev = () => {
    navigate(-1);
  };
  return (
    <BasicHeaderLayout>
      <button onClick={handleGoPrev}>
        <S.ArrowLeftIcon />
      </button>
      <button form={id}>
        <S.SaveBtn />
      </button>
    </BasicHeaderLayout>
  );
}

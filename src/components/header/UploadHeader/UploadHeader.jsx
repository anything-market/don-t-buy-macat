import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './uploadHeader.style';

export default function UploadHeader() {
  const navigate = useNavigate();
  const handleGoPrev = () => {
    navigate(-1);
  };
  return (
    <S.BasicHeaderLayout>
      <button onClick={handleGoPrev}>
        <S.ArrowLeftIcon />
      </button>
      <button>
        <S.SaveBtn />
      </button>
    </S.BasicHeaderLayout>
  );
}

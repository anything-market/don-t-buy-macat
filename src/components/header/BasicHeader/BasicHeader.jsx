import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './basicHeader.style';

export default function BasicHeader() {
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
        <S.MoreIcon />
      </button>
    </S.BasicHeaderLayout>
  );
}

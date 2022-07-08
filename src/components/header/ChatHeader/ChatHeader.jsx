import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './chatHeader.style';

export default function ChatHeader() {
  const navigate = useNavigate();
  const handleGoPrev = () => {
    navigate(-1);
  };
  return (
    <S.BasicHeaderLayout>
      <button onClick={handleGoPrev}>
        <S.ArrowLeftIcon />
      </button>
      <S.UserName>애월읍 위니브 감귤농장</S.UserName>
      <button>
        <S.MoreIcon />
      </button>
    </S.BasicHeaderLayout>
  );
}

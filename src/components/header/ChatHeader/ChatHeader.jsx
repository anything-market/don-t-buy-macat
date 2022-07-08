import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './chatHeader.style';
import IconArrowLeft from '../../../assets/icon-arrow-left.svg';
import IconMoreVertical from '../../../assets/icon-more-vertical.svg';
export default function ChatHeader() {
  const navigate = useNavigate();
  const handleGoPrev = () => {
    navigate(-1);
  };
  return (
    <S.BasicHeaderLayout>
      <button onClick={handleGoPrev}>
        <img src={IconArrowLeft} alt="뒤로가기" />
      </button>
      <S.HeaderTitle>애월읍 위니브 감귤농장</S.HeaderTitle>
      <button>
        <img src={IconMoreVertical} alt="더보기" />
      </button>
    </S.BasicHeaderLayout>
  );
}

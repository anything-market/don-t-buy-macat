import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './basicHeader.style';
import IconArrowLeft from '../../../assets/icon-arrow-left.svg';
import IconMoreVertical from '../../../assets/icon-more-vertical.svg';
export default function BasicHeader() {
  const navigate = useNavigate();
  const handleGoPrev = () => {
    navigate(-1);
  };
  return (
    <S.BasicHeaderLayout>
      <button onClick={handleGoPrev}>
        <img src={IconArrowLeft} alt="뒤로가기" />
      </button>
      <button>
        <img src={IconMoreVertical} alt="더보기" />
      </button>
    </S.BasicHeaderLayout>
  );
}

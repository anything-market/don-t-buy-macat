import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './searchHeader.style';
import { BasicHeaderLayout } from '../commonHeader.style';

export default function SearchHeader({ onTyping }) {
  const navigate = useNavigate();
  const handleGoPrev = () => {
    navigate(-1);
  };

  return (
    <BasicHeaderLayout>
      <button onClick={handleGoPrev}>
        <S.ArrowLeftIcon />
      </button>
      <S.SearchInput
        onChange={(e) => {
          onTyping(e.target.value);
        }}
      />
    </BasicHeaderLayout>
  );
}

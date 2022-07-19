import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Followheader.style';
import { BasicHeaderLayout } from '../commonHeader.style';

export default function FollowHeader() {
  const navigate = useNavigate();
  const handleGoPrev = () => {
    navigate(-1);
  };
  const path = window.location.href;

  return (
    <BasicHeaderLayout>
      <button onClick={handleGoPrev}>
        <S.ArrowLeftIcon />
      </button>
      <S.HeaderTitle>
        {path.includes('followers') && 'Follwers'}
        {path.includes('followings') && 'followings'}
      </S.HeaderTitle>
    </BasicHeaderLayout>
  );
}

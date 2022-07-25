import React, { useContext } from 'react';
import { useState } from 'react';
import * as S from './followBtn.style';
export default function FollowBtn({ size, isFollow, handleFollow }) {
  return (
    <>
      <S.FollowBtn
        alt="팔로우 버튼"
        isFollow={isFollow}
        onClick={handleFollow}
        size={size}
      />
    </>
  );
}

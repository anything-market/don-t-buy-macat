import React from 'react';
import { useState } from 'react';
import * as S from './followBtn.style';
export default function FollowBtn({ ...props }) {
  //추후에 팔로우 상태 서버에서 받아오기
  const [isFollow, setIsFollow] = useState(false);
  const handleFollowBtn = () => {
    setIsFollow(!isFollow);
  };
  return (
    <S.FollowBtn
      alt="팔로우 버튼"
      isFollow={isFollow}
      onClick={handleFollowBtn}
      size={props.size}
    />
  );
}

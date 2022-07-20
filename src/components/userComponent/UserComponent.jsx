import React from 'react';
import { useState } from 'react';
import * as S from './userComponent.style';
import ModalBtn from '../modal/ModalBtn/ModalBtn';
import ProductModalContent from '../modal/modalContent/PostModalContent/PostModalContent';
import FollowBtn from '../button/FollowBtn/FollowBtn';

export default function UserComponent({ image, username, accountname, intro }) {
  const path = window.location.href;
  return (
    <S.UserComponent>
      <S.ProfileImg src={image} alt="프로필이미지" />
      <S.UserInfo>
        <S.UserName>{username}</S.UserName>
        <S.UserIntro>
          {path.includes('follow') ? intro : accountname}
        </S.UserIntro>
      </S.UserInfo>
      {/*페이지의 경로에 follow 있을 때 팔로우 버튼이 뜬다, search,follow 페이지가 아닐경우 모달 버튼이 뜬다*/}
      {path.includes('follow') && <FollowBtn size="small" />}
      {path.includes('search') || path.includes('follow') ? null : (
        <ModalBtn>
          <ProductModalContent />
        </ModalBtn>
      )}
    </S.UserComponent>
  );
}

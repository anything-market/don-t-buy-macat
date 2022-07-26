import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './userComponent.style';
import ModalBtn from '../modal/ModalBtn/ModalBtn';
import ProductModalContent from '../modal/modalContent/PostModalContent/PostModalContent';
import FollowBtn from '../button/FollowBtn/FollowBtn';
import { FollowHandlerContext } from './../follow/FollowUserList/FollowUserList';

export default function UserComponent({
  image,
  username,
  accountname,
  intro,
  isFollow,
  message,
  time,
  handleFollow,
}) {
  const path = window.location.href;
  const navigate = useNavigate();
  let userIntro = '';
  if (path.includes('follow')) {
    userIntro = intro;
  } else if (path.includes('chats')) {
    userIntro = message;
  } else {
    userIntro = `@ ${accountname}`;
  }
  //채팅 알림 표시
  // const [isRead, setIsRead] = useState(false);

  // useEffect(() => {
  if (path.includes('follow')) {
    const { handleFollowBtn } = useContext(FollowHandlerContext);
    const { isfollow } = useContext(FollowHandlerContext);
    handleFollow = handleFollowBtn;
    console.log(`UserComponent에서 받아오는프롭 ${isfollow}`);
  }
  // }, [FollowHandlerContext]);

  return (
    <S.UserComponent
      marginbottom={
        // 페이지의 경로가 home또는 profile일때 바텀 margin 1.2rem 추가
        path.includes('home') || path.includes('profile') ? 'true' : 'false'
      }
      id={accountname}
      onClick={() => {
        const id = accountname;
        navigate(`/profile/${id}`);
      }}
    >
      <S.UserInfoWrap
        onClick={() => {
          const id = accountname;
          navigate(`/profile/${id}`);
        }}
      >
        <S.ProfileImg
          src={image}
          alt="프로필이미지"
          // 페이지의 경로가 home또는 profile일때 프로필 이미지 사이즈 작게 표시
          small={
            path.includes('home') || path.includes('profile') ? 'true' : 'false'
          }
        />
        {/* {!isRead && <S.NonRead />} */}
        <S.UserInfo>
          <S.UserName>{username}</S.UserName>
          <S.UserIntro>{userIntro}</S.UserIntro>
        </S.UserInfo>
      </S.UserInfoWrap>

      {/*페이지의 경로에 follow 있을 때 팔로우 버튼이 뜬다, search,follow 페이지가 아닐경우 모달 버튼이 뜬다*/}
      {path.includes('follow') && (
        <FollowBtn
          size="small"
          isFollow={isFollow}
          handleFollow={handleFollow}
        />
      )}
      {path.includes('chats') && <S.TimeInfo>{time}</S.TimeInfo>}
      {path.includes('search') ||
      path.includes('chats') ||
      path.includes('follow') ? null : (
        <ModalBtn>
          <ProductModalContent />
        </ModalBtn>
      )}
    </S.UserComponent>
  );
}

import React from 'react';
import { useState } from 'react';
import * as S from './userComponent.style';
import ModalBtn from '../modal/ModalBtn/ModalBtn';
import ProductModalContent from '../modal/modalContent/PostModalContent/PostModalContent';
export default function UserComponent({ image, username, accountname }) {
  const path = window.location.href;
  //추후에 팔로우 상태 서버에서 받아오기
  const [isFollow, setIsFollow] = useState(false);
  const handleFollowBtn = () => {
    setIsFollow(!isFollow);
  };

  return (
    <S.UserComponent>
      <S.ProfileImg src={image} alt="프로필이미지" />
      <S.UserInfo>
        <S.UserName>{username}</S.UserName>
        <S.UserIntro>{accountname}</S.UserIntro>
      </S.UserInfo>
      {/*페이지의 경로에 follow 있을 때 팔로우 버튼이 뜬다*/}
      {path.includes('follow') ? (
        <S.FollowBtn
          alt="팔로우 버튼"
          isFollow={isFollow}
          onClick={handleFollowBtn}
        />
      ) : (
        {
          /*페이지의 경로에 follow,search가 없을 때 모달 버튼이 뜬다*/
        }(
          !path.includes('search') && (
            <ModalBtn>
              <ProductModalContent />
            </ModalBtn>
          ),
        )
      )}
    </S.UserComponent>
  );
}

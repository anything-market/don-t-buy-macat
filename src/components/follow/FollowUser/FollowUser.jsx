import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './FollowUser.stlye';
import FollowBtn from '../../button/FollowBtn/FollowBtn';

const FollowUser = ({
  isFollowed,
  userToken,
  image,
  username,
  accountname,
  intro,
}) => {
  const navigate = useNavigate();
  let userIntro = intro;

  const [isFollow, setIsFollowed] = useState(isFollowed);

  const handleFollow = async () => {
    if (isFollow) {
      await axios({
        method: 'delete',
        url: `https://mandarin.api.weniv.co.kr/profile/${accountname}/unfollow`,
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      }).then((res) => {
        setIsFollowed(false);
      });
    } else {
      await axios({
        method: 'post',
        url: `https://mandarin.api.weniv.co.kr/profile/${accountname}/follow`,
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      }).then((res) => {
        setIsFollowed(true);
      });
    }
  };

  return (
    <S.UserComponent id={accountname}>
      <S.UserInfoWrap
        onClick={() => {
          const id = accountname;
          navigate(`/profile/${id}`);
        }}
      >
        <S.ProfileImg src={image} alt="프로필이미지" small={'true'} />
        <S.UserInfo>
          <S.UserName>{username}</S.UserName>
          <S.UserIntro>{userIntro}</S.UserIntro>
        </S.UserInfo>
      </S.UserInfoWrap>
      <FollowBtn size="small" isFollow={isFollow} handleFollow={handleFollow} />
    </S.UserComponent>
  );
};

export default FollowUser;

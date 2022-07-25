import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Message } from '../../../assets/message-circle.svg';
import * as S from './ProfileInfo.style';
import FollowBtn from './../../button/FollowBtn/FollowBtn';

const ProfileInfo = ({ userToken, data, isAuthorized }) => {
  const navigate = useNavigate();
  const [isFollowed, setIsFollowed] = useState(data.isfollow);
  const [followerCount, setFollowerCount] = useState(data.follower.length);

  const handleFollow = () => {
    if (isFollowed) {
      axios({
        method: 'delete',
        url: `http://146.56.183.55:5050/profile/${data.accountname}/unfollow`,
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      }).then((res) => {
        setIsFollowed(false);
        setFollowerCount(res.data.profile.follower.length);
      });
    } else {
      axios({
        method: 'post',
        url: `http://146.56.183.55:5050/profile/${data.accountname}/follow`,
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      }).then((res) => {
        setIsFollowed(true);
        setFollowerCount(res.data.profile.follower.length);
      });
    }
  };

  return (
    <S.ProfileBg myProfile={isAuthorized}>
      <S.ProfileInfoWrap>
        <S.ProfileInfoContainer>
          <S.ProfileImg src={data.image}></S.ProfileImg>
          <S.UserName>{data.username}</S.UserName>
          <S.AccountName>@ {data.accountname}</S.AccountName>
          <S.Intro>{data.intro}</S.Intro>
          <S.Follow
            position={'right'}
            onClick={() => {
              navigate(`/follow/${data.accountname}/followers`);
            }}
          >
            <S.FollowCount type={'follows'}>{followerCount}</S.FollowCount>
            <S.FollowSpan>follwers</S.FollowSpan>
          </S.Follow>
          <S.Follow
            position={'left'}
            onClick={() => {
              navigate(`/follow/${data.accountname}/followings`);
            }}
          >
            <S.FollowCount type={'followings'}>
              {data.following.length}
            </S.FollowCount>
            <S.FollowSpan>follwings</S.FollowSpan>
          </S.Follow>
          {isAuthorized ? (
            <S.ProfileBtnWrap>
              <S.ProfileBtn>프로필 수정</S.ProfileBtn>
              <S.ProfileBtn
                adoptBtn={'true'}
                onClick={() => navigate('/adoptPost')}
              >
                입양 등록
              </S.ProfileBtn>
            </S.ProfileBtnWrap>
          ) : (
            <S.ProfileBtnWrap>
              <S.ProfileBtnIco messageIco={'true'}>
                <S.StyledMessageIco />
              </S.ProfileBtnIco>
              <FollowBtn
                handleFollow={handleFollow}
                isFollow={isFollowed}
                size={'large'}
              />
              <S.ProfileBtnIco shareIco={'true'}>
                <S.StyledShareIco />
              </S.ProfileBtnIco>
            </S.ProfileBtnWrap>
          )}
        </S.ProfileInfoContainer>
      </S.ProfileInfoWrap>
    </S.ProfileBg>
  );
};

export default ProfileInfo;

import React, { useState, useEffect } from 'react';
import * as S from './ProfileInfo.style';
import FollowBtn from './../../button/FollowBtn/FollowBtn';
import { useNavigate } from 'react-router-dom';

const ProfileInfo = ({ userToken, data, isAuthorized }) => {
  const navigate = useNavigate();

  return (
    <S.ProfileBg myProfile={isAuthorized}>
      <S.ProfileInfoWrap>
        <S.ProfileInfoContainer>
          <S.ProfileImg src={data.image}></S.ProfileImg>
          <S.UserName>{data.username}</S.UserName>
          <S.AccountName>@ {data.accountname}</S.AccountName>
          <S.Intro>{data.intro}</S.Intro>
          <S.Follow position={'right'} href="/follow/followers">
            <S.FollowCount type={'follows'}>
              {data.follower.length}
            </S.FollowCount>
            <S.FollowSpan>follwers</S.FollowSpan>
          </S.Follow>
          <S.Follow position={'left'} href="/follow/followings">
            <S.FollowCount type={'followings'}>
              {data.following.length}
            </S.FollowCount>
            <S.FollowSpan>follwings</S.FollowSpan>
          </S.Follow>
          {isAuthorized ? (
            <S.ProfileBtnWrap>
              <S.ProfileBtn>프로필 수정</S.ProfileBtn>
              <S.ProfileBtn
                adoptBtn={true}
                onClick={() => navigate('/adoptPost')}
              >
                상품 등록
              </S.ProfileBtn>
            </S.ProfileBtnWrap>
          ) : (
            <FollowBtn
              userToken={userToken}
              accountName={data.accountname}
              followState={data.isfollow}
              size={'large'}
            />
          )}
        </S.ProfileInfoContainer>
      </S.ProfileInfoWrap>
    </S.ProfileBg>
  );
};

export default ProfileInfo;

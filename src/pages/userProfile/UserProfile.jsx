import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PostCard from '../../components/post/PostCard/PostCard';
import PostAlbumCard from '../../components/post/PostAlbumCard/PostAlbumCard';
import BasicHeader from './../../components/header/BasicHeader/BasicHeader';
import ProfileInfo from './../../components/profile/ProfileInfo/ProfileInfo';
import AdoptSection from './../../components/adoptSection/AdoptSection';
import * as S from './UserProfile.style';
import { ReactComponent as PostIcoOff } from '../../assets/icon-post-list-off.svg';
import { ReactComponent as PostIcoOn } from '../../assets/icon-post-list-on.svg';
import { ReactComponent as AlbumIcoOff } from '../../assets/icon-post-album-off.svg';
import { ReactComponent as AlbumIcoOn } from '../../assets/icon-post-album-on.svg';
import NavigationBar from './../../components/navigation-bar/NavigationBar';

const UserProfile = () => {
  const userToken = localStorage.getItem('Access Token');
  const accountName = localStorage.getItem('Account Name');
  const [userPostData, setUserPostData] = useState();
  const [userProfileData, setUserProfileData] = useState();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [albumOn, setAlbumOn] = useState(false);
  const params = useParams();

  useEffect(() => {
    if (userToken) {
      const getProfileData = async () => {
        await axios({
          method: 'get',
          url: `https://mandarin.api.weniv.co.kr/profile/${
            params.id === accountName ? accountName : params.id
          }`,
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-type': 'application/json',
          },
        }).then((response) => {
          setUserProfileData(response.data.profile);
        });
      };

      const getPostData = async () => {
        await axios({
          method: 'get',
          // 프로필페이지에서 표시되는 게시물은 30개까지입니다
          url: `https://mandarin.api.weniv.co.kr/post/${
            params.id === accountName ? accountName : params.id
          }/userpost/?limit=30&skip=0`,
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-type': 'application/json',
          },
        }).then((response) => {
          setUserPostData(response.data.post);
        });
      };
      getProfileData();
      getPostData();
    }
  }, [params]);

  useEffect(() => {
    if (userToken && userProfileData)
      if (accountName === userProfileData.accountname) {
        setIsAuthorized(true);
      }
  }, [userToken, userProfileData]);

  return (
    <S.UserProfileWrap>
      <BasicHeader />
      {userProfileData && (
        <ProfileInfo
          userToken={userToken}
          data={userProfileData}
          isAuthorized={isAuthorized}
          accountName={accountName}
        />
      )}
      <AdoptSection accountName={params.id} />
      <S.UserPostHeader>
        {!albumOn ? (
          <S.UserPostBtnsWrap>
            <PostIcoOn />
            <AlbumIcoOff
              onClick={() => {
                setAlbumOn(true);
              }}
              style={{ marginLeft: '1.6rem' }}
            />
          </S.UserPostBtnsWrap>
        ) : (
          <S.UserPostBtnsWrap>
            <PostIcoOff
              onClick={() => {
                setAlbumOn(false);
              }}
            />
            <AlbumIcoOn style={{ marginLeft: '1.6rem' }} />
          </S.UserPostBtnsWrap>
        )}
      </S.UserPostHeader>
      <S.UserPostWrap>
        {!albumOn &&
          userPostData &&
          userPostData.map((post) => {
            return (
              <S.ProfilePostCardWrap key={post.id}>
                <PostCard data={post} />
              </S.ProfilePostCardWrap>
            );
          })}
        <S.ProfilePostAlbumWrap>
          {albumOn &&
            userPostData &&
            userPostData.map((post) => {
              return <PostAlbumCard key={post.id} data={post} />;
            })}
        </S.ProfilePostAlbumWrap>
      </S.UserPostWrap>
      <NavigationBar />
    </S.UserProfileWrap>
  );
};

export default UserProfile;

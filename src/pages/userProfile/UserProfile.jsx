import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PostCard from '../../components/post/PostCard/PostCard';
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
  const [userData, setUserData] = useState();
  const [userPostData, setUserPostData] = useState();
  const [userProfileData, setUserProfileData] = useState();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const params = useParams();

  // 로그인한 유저정보
  useEffect(() => {
    const userToken = localStorage.getItem('Access Token');
    const accountName = localStorage.getItem('Account Name');
    setUserData([userToken, accountName]);
  }, []);

  useEffect(() => {
    //로그인한 유저의 프로필일때
    if (userData && params.id === userData[1]) {
      // 로그인한 유저의 프로필 정보 가져오기
      const getProfileData = () => {
        axios({
          method: 'get',
          url: `http://146.56.183.55:5050/profile/${userData[1]}`,
          headers: {
            Authorization: `Bearer ${userData[0]}`,
            'Content-type': 'application/json',
          },
        }).then((response) => {
          setUserProfileData(response.data.profile);
        });
      };

      // 로그인한 유저의 게시글목록 가져오기
      const getPostData = () => {
        axios({
          method: 'get',
          // 프로필페이지에서 표시되는 게시물은 30개까지입니다
          url: `http://146.56.183.55:5050/post/${userData[1]}/userpost/?limit=30&skip=0`,
          headers: {
            Authorization: `Bearer ${userData[0]}`,
            'Content-type': 'application/json',
          },
        }).then((response) => {
          setUserPostData(response.data.post);
        });
      };
      getProfileData();
      getPostData();
    }

    //로그인한 유저의 프로필이 아닐 때
    if (userData && params.id !== userData[1]) {
      // 로그인한 유저의 프로필 정보 가져오기
      const getProfileData = () => {
        {
          axios({
            method: 'get',
            url: `http://146.56.183.55:5050/profile/${params.id}`,
            headers: {
              Authorization: `Bearer ${userData[0]}`,
              'Content-type': 'application/json',
            },
          }).then((response) => {
            setUserProfileData(response.data.profile);
          });
        }
      };

      // 로그인한 유저의 게시글목록 가져오기
      const getPostData = () => {
        axios({
          method: 'get',
          // 프로필페이지에서 표시되는 게시물은 30개까지입니다
          url: `http://146.56.183.55:5050/post/${params.id}/userpost/?limit=30&skip=0`,
          headers: {
            Authorization: `Bearer ${userData[0]}`,
            'Content-type': 'application/json',
          },
        }).then((response) => {
          setUserPostData(response.data.post);
        });
      };
      getProfileData();
      getPostData();
    }
  }, [userData]);

  useEffect(() => {
    // 권한정보 설정
    if (userData && userProfileData)
      if (userData[1] === userProfileData.accountname) {
        setIsAuthorized(true);
      }
  }, [userData, userProfileData]);

  return (
    <S.UserProfileWrap>
      <BasicHeader />
      {userProfileData && (
        <ProfileInfo
          userToken={userData && userData[0]}
          data={userProfileData}
          isAuthorized={isAuthorized}
        />
      )}
      <AdoptSection accountName={params.id} />
      <S.UserPostHeader>
        <S.UserPostBtnsWrap>
          <PostIcoOn />
          <AlbumIcoOff style={{ marginLeft: '1.6rem' }} />
        </S.UserPostBtnsWrap>
      </S.UserPostHeader>
      <S.UserPostWrap>
        {userPostData &&
          userPostData.map((post) => {
            return (
              <S.ProfilePostCardWrap key={post.id}>
                <PostCard data={post} />
              </S.ProfilePostCardWrap>
            );
          })}
      </S.UserPostWrap>
      <NavigationBar />
    </S.UserProfileWrap>
  );
};

export default UserProfile;

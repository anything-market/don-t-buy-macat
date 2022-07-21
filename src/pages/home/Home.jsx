import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostCard from '../../components/post/PostCard/PostCard';
import * as S from './Home.style';
import { ReactComponent as Logo } from './../../assets/symbol-logo-feed.svg';
import MainHeader from './../../components/header/MainHeader/MainHeader';

const Home = () => {
  const [userToken, setUserToken] = useState();
  const [userFeedData, setUserFeedData] = useState();

  // get user token when component first mounted
  useEffect(() => {
    const userToken = localStorage.getItem('Access Token');
    setUserToken(userToken);
  }, []);

  // get feed data
  useEffect(() => {
    const getFeedData = () => {
      if (userToken) {
        axios({
          method: 'get',
          url: 'http://146.56.183.55:5050/post/feed',
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-type': 'application/json',
          },
        }).then((response) => {
          setUserFeedData(response.data.posts);
        });
      }
    };
    getFeedData();
  }, [userToken]);

  return (
    <>
      {userFeedData && userFeedData.length > 0 ? (
        <>
          <MainHeader />
          <S.PostWrap>
            {userFeedData.map((post) => {
              return <PostCard key={post.id} data={post} />;
            })}
          </S.PostWrap>
        </>
      ) : (
        <S.FeedEmptyWrap>
          <div>
            <Logo />
            <S.FeedEmptyTxt>유저를 검색해 팔로우 해보세요!</S.FeedEmptyTxt>
            <a href="/search">
              <S.Button src="/search">검색하기</S.Button>
            </a>
          </div>
        </S.FeedEmptyWrap>
      )}
    </>
  );
};

export default Home;

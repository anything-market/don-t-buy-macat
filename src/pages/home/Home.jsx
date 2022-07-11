import React, { useEffect } from 'react';
import PostCard from '../../components/post/PostCard/PostCard';
import * as S from './Home.style';
import { ReactComponent as Logo } from './../../assets/symbol-logo-feed.svg';

const Home = () => {
  useEffect(() => {}, []);
  const posts = ['포스트있음'];
  return (
    <>
      {posts.length > 0 ? (
        <S.PostWrap>
          <PostCard />
        </S.PostWrap>
      ) : (
        <S.FeedEmptyWrap>
          <Logo />
          <S.FeedEmptyTxt>유저를 검색해 팔로우 해보세요!</S.FeedEmptyTxt>
          <S.Button>검색하기</S.Button>
        </S.FeedEmptyWrap>
      )}
    </>
  );
};

export default Home;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostCard from '../../components/post/PostCard/PostCard';
import * as S from './Home.style';
import { ReactComponent as Logo } from './../../assets/symbol-logo-feed.svg';

const Home = () => {
  const [logInData, setlogInData] = useState();
  const [userFeedData, setuserFeedData] = useState();
  useEffect(() => {
    // get user token
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const data = JSON.stringify({
      user: { email: 'test40@test.com', password: '123123' },
    });
    axios
      .post('https://mandarin.api.weniv.co.kr/user/login', data, config)
      .then((response) => {
        setlogInData(response.data.user);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // get feed data
    if (logInData) {
      axios({
        method: 'get',
        url: 'https://mandarin.api.weniv.co.kr/post/feed',
        headers: {
          Authorization: `Bearer ${logInData.token}`,
          'Content-type': 'application/json',
        },
      }).then((response) => {
        setuserFeedData(response.data);
      });
    }
  }, [logInData]);

  return (
    <>
      {userFeedData && userFeedData.posts.length > 0 ? (
        <S.PostWrap>
          <button
            style={{
              backgroundColor: 'red',
              color: 'white',
              padding: '10px',
              borderRadius: '10px',
              marginBottom: '20px',
            }}
            onClick={() => {
              setuserFeedData({ posts: [] });
            }}
          >
            피드나가기
          </button>
          <PostCard />
        </S.PostWrap>
      ) : (
        <S.FeedEmptyWrap>
          <button
            style={{
              backgroundColor: 'red',
              color: 'white',
              padding: '10px',
              borderRadius: '10px',
              marginBottom: '20px',
            }}
            onClick={() => {
              setuserFeedData({ posts: ['아아아악'] });
            }}
          >
            피드표시하기
          </button>
          <div>
            <Logo />
            <S.FeedEmptyTxt>유저를 검색해 팔로우 해보세요!</S.FeedEmptyTxt>
            <S.Button>검색하기</S.Button>
          </div>
        </S.FeedEmptyWrap>
      )}
    </>
  );
};

export default Home;

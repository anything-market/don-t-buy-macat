import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostCard from '../../components/post/PostCard/PostCard';
import * as S from './Home.style';
import { ReactComponent as Logo } from './../../assets/symbol-logo-feed.svg';
import BasicHeader from '../../components/header/BasicHeader/BasicHeader';

const Home = () => {
  const [logInData, setlogInData] = useState();
  const [userFeedData, setUserFeedData] = useState();

  // get user token when component first mounted
  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const data = JSON.stringify({
      user: { email: 'sisikhere@gmail.com', password: '123456' },
    });
    axios
      .post('http://146.56.183.55:5050/user/login', data, config)
      .then((response) => {
        setlogInData(response.data.user);
      })
      .catch((error) => console.log(error));
  }, []);

  // get feed data
  const getFeedData = () => {
    if (logInData) {
      axios({
        method: 'get',
        url: 'http://146.56.183.55:5050/post/feed',
        headers: {
          Authorization: `Bearer ${logInData.token}`,
          'Content-type': 'application/json',
        },
      }).then((response) => {
        setUserFeedData(response.data.posts);
      });
    }
  };

  return (
    <>
      {console.log(userFeedData)}
      {userFeedData && userFeedData.length > 0 ? (
        <>
          <BasicHeader />
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
                setUserFeedData([]);
              }}
            >
              피드나가기
            </button>
            <PostCard />
          </S.PostWrap>
        </>
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
            onClick={getFeedData}
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

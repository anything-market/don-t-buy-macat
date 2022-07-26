import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import FollowContainer from './../../components/follow/FollowContainer/FollowContainer';
import FollowHeader from './../../components/header/FollowHeader/Followheader';

const Follow = () => {
  const path = window.location.href;
  const accountName = useParams().id;

  const [userToken, setUserToken] = useState();
  const [followEmptyMessage, setFollowEmptyMessage] = useState('');
  const [followerData, setFollowerData] = useState();
  const [followingData, setFollowingData] = useState([]);

  useEffect(() => {
    const userToken = localStorage.getItem('Access Token');
    setUserToken(userToken);
  }, []);

  useEffect(() => {
    if (userToken && path.includes('followers')) {
      const getFollowerData = async () => {
        await axios({
          method: 'get',
          url: `http://146.56.183.55:5050/profile/${accountName}/follower?limit=30&skip=0`,
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-type': 'application/json',
          },
        })
          .then((response) => {
            if (response.data.length > 0) {
              setFollowerData(response.data);
            } else {
              setFollowEmptyMessage('나를 팔로우하는 유저가 없습니다');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getFollowerData();
    }
    if (userToken && path.includes('followings')) {
      const getFollowingData = async () => {
        await axios({
          method: 'get',
          url: `http://146.56.183.55:5050/profile/${accountName}/following?limit=30&skip=0`,
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-type': 'application/json',
          },
        })
          .then((response) => {
            if (response.data.length > 0) {
              setFollowingData(response.data);
            } else {
              setFollowEmptyMessage('내가 팔로잉하는 유저가 없습니다');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getFollowingData();
    }
  }, [userToken]);

  return (
    <>
      <FollowHeader />
      <FollowContainer
        data={followerData ? followerData : followingData}
        followEmpty={followEmptyMessage}
        userToken={userToken}
      />
    </>
  );
};

export default Follow;

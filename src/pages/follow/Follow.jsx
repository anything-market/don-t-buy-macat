import axios from 'axios';
import React, { useState, useEffect } from 'react';
import FollowContainer from './../../components/follow/FollowContainer/FollowContainer';
import FollowHeader from './../../components/header/FollowHeader/Followheader';

const Follow = () => {
  const path = window.location.href;

  const [userData, setUserData] = useState();
  const [followEmptyMessage, setFollowEmptyMessage] = useState('');
  const [followerData, setFollowerData] = useState();
  const [followingData, setFollowingData] = useState([]);

  // get user token when component first mounted
  useEffect(() => {
    const userToken = localStorage.getItem('Access Token');
    const accountName = localStorage.getItem('Account Name');
    setUserData([userToken, accountName]);
  }, []);

  useEffect(() => {
    // followers 경로에 접속했다면 userData를 팔로워데이터로 초기화
    if (userData && path.includes('followers')) {
      const getFollowerData = async () => {
        await axios({
          method: 'get',
          url: `http://146.56.183.55:5050/profile/${userData[1]}/follower`,
          headers: {
            Authorization: `Bearer ${userData[0]}`,
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
    // followings 경로에 접속했다면 userData를 팔로잉데이터로 초기화
    if (userData && path.includes('followings')) {
      const getFollowingData = async () => {
        await axios({
          method: 'get',
          url: `http://146.56.183.55:5050/profile/${userData[1]}/following`,
          headers: {
            Authorization: `Bearer ${userData[0]}`,
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
  }, [userData]);

  return (
    <>
      <FollowHeader />
      <FollowContainer
        // followerData가 있다면 data로 followerData를 전송, 그 외는 data로 followingData전송
        data={followerData ? followerData : followingData}
        followEmpty={followEmptyMessage}
      />
    </>
  );
};

export default Follow;

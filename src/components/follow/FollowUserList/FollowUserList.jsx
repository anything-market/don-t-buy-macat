import React from 'react';
import FollowUser from './../FollowUser/FollowUser';

const FollowUserList = ({
  userToken,
  image,
  username,
  accountname,
  intro,
  isFollow,
}) => {
  return (
    <FollowUser
      userToken={userToken}
      image={image}
      username={username}
      accountname={accountname}
      intro={intro}
      isFollowed={isFollow}
    />
  );
};

export default FollowUserList;

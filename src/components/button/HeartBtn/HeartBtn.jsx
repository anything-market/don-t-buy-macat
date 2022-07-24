import axios from 'axios';
import React, { useState } from 'react';
import { ReactComponent as HeartIcon } from '../../../assets/icon-heart.svg';
import * as S from './HeartBtn.style';

const HeartBtn = ({ userToken, postId, hearted, heartCount }) => {
  const [isHearted, setIsHearted] = useState(hearted);
  const [count, setCount] = useState(heartCount);

  const handleLike = async () => {
    // 하트를 누르지 않은 게시물일 때
    if (!isHearted) {
      try {
        await axios({
          url: `http://146.56.183.55:5050/post/${postId}/heart`,
          method: 'post',
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-type': 'application/json',
          },
        }).then((res) => {
          setIsHearted(res.data.post.hearted);
          setCount(res.data.post.heartCount);
        });
      } catch {
        (err) => {
          console.log(err);
        };
      }
    }
    //하트를 이미 누른 게시물일 때
    if (isHearted) {
      try {
        await axios({
          url: `http://146.56.183.55:5050/post/${postId}/unheart`,
          method: 'delete',
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-type': 'application/json',
          },
        }).then((res) => {
          setIsHearted(res.data.post.hearted);
          setCount(res.data.post.heartCount);
        });
      } catch {
        (err) => {
          console.log(err);
        };
      }
    }
  };

  return (
    <S.PostIconBtn onClick={handleLike}>
      <HeartIcon
        fill={isHearted ? '#05704A' : 'rgba(0,0,0,0)'}
        stroke={isHearted ? '#05704A' : '#767676'}
        style={{ marginRight: '6px' }}
      />
      <span>{count}</span>
    </S.PostIconBtn>
  );
};

export default HeartBtn;

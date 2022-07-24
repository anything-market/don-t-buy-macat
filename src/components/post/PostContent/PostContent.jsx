import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentIcon from './../../../assets/icon-message-circle.svg';
import * as S from './PostContent.style';
import PostImgContainer from './../PostImgContainer/PostImgContainer';
import HeartBtn from '../../button/HeartBtn/HeartBtn';
import { Link } from 'react-router-dom';

const PostContent = (data) => {
  useEffect(() => {
    const userToken = localStorage.getItem('Access Token');
    setUserToken(userToken);
  }, []);

  const [userToken, setUserToken] = useState();

  return (
    <S.PostContent>
      {data.data.content.length === 0 ? null : (
        <S.PostTxt>{data.data.content}</S.PostTxt>
      )}
      <PostImgContainer image={data.data.image} />
      <S.PostIconsWrap>
        <HeartBtn
          userToken={userToken}
          hearted={data.data.hearted}
          postId={data.data.id}
          heartCount={data.data.heartCount}
        />
        <Link to={`/post/${data.data.id}`}>
          <S.PostIconBtn>
            <img src={CommentIcon} alt="" style={{ marginRight: '6px' }} />
            <span>{data.data.comments.length}</span>
          </S.PostIconBtn>
        </Link>
      </S.PostIconsWrap>
      <S.PostCreateDate>2022년 07월 11일</S.PostCreateDate>
    </S.PostContent>
  );
};

export default PostContent;

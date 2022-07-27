import React, { useState, useEffect } from 'react';
import CommentIcon from './../../../assets/icon-message-circle.svg';
import * as S from './PostContent.style';
import PostImgContainer from './../PostImgContainer/PostImgContainer';
import HeartBtn from '../../button/HeartBtn/HeartBtn';
import { Link } from 'react-router-dom';

const PostContent = (data) => {
  const [userToken, setUserToken] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem('Access Token');
    setUserToken(userToken);
  }, []);

  const formatDate = (date) => {
    let newDate = new Date(date);
    const formatedDate =
      newDate.getFullYear() +
      '년 ' +
      (newDate.getMonth() + 1) +
      '월 ' +
      newDate.getDate() +
      '일 ';
    return formatedDate;
  };

  return (
    <S.PostContent>
      {data.data.content.length === 0 ? null : (
        <Link to={`/post/${data.data.id}`}>
          <S.PostTxt>{data.data.content}</S.PostTxt>
        </Link>
      )}
      <PostImgContainer image={data.data.image} id={data.data.id} />
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
      <S.PostCreateDate>{formatDate(data.data.createdAt)}</S.PostCreateDate>
    </S.PostContent>
  );
};

export default PostContent;

import React, { useState } from 'react';
import { ReactComponent as HeartIcon } from './../../../assets/icon-heart.svg';
import CommentIcon from './../../../assets/icon-message-circle.svg';
import * as S from './PostContent.style';
import PostImgContainer from './../PostImgContainer/PostImgContainer';

const PostContent = (data) => {
  const [isLiked, setIsLiked] = useState(null);

  const handleLike = () => {
    if (!isLiked) {
      setIsLiked(true);
      data.data.heartCount++;
    } else {
      setIsLiked(false);
      data.data.heartCount--;
    }
  };

  return (
    <S.PostContent>
      {data.data.content.length === 0 ? null : (
        <S.PostTxt>{data.data.content}</S.PostTxt>
      )}
      <PostImgContainer image={data.data.image} />
      <S.PostIconsWrap>
        <S.PostIconBtn onClick={handleLike}>
          <HeartIcon
            fill={isLiked ? '#05704A' : '#fff'}
            style={{ marginRight: '6px' }}
          />
          <span>{data.data.heartCount}</span>
        </S.PostIconBtn>
        <a>
          <S.PostIconBtn>
            <img src={CommentIcon} alt="" style={{ marginRight: '6px' }} />
            <span>{data.data.comments.length}</span>
          </S.PostIconBtn>
        </a>
      </S.PostIconsWrap>
      <S.PostCreateDate>2022년 07월 11일</S.PostCreateDate>
    </S.PostContent>
  );
};

export default PostContent;

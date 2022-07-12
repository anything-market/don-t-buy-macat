import React, { useState } from 'react';
import { ReactComponent as HeartIcon } from './../../../assets/icon-heart.svg';
import CommentIcon from './../../../assets/icon-message-circle.svg';
import * as S from './PostContent.style';

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
      {console.log(data)}
      {data.data.content.length === 0 ? null : (
        <S.PostTxt>{data.data.content}</S.PostTxt>
      )}
      <ul className="ImgList">
        <li>
          {data.data.image.length === 0 ? null : (
            <S.PostImg src={data.data.image} alt="" />
          )}
        </li>
      </ul>
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

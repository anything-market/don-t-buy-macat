import React, { useState } from 'react';
import { ReactComponent as HeartIcon } from './../../../assets/icon-heart.svg';
import CommentIcon from './../../../assets/icon-message-circle.svg';
import * as S from './PostContent.style';

const PostContent = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [heartCount, setHeartCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setHeartCount(heartCount + 1);
  };

  const handleComment = () => {
    setCommentCount(commentCount + 1);
  };

  return (
    <S.PostContent>
      <S.PostTxt>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </S.PostTxt>
      <ul className="ImgList">
        <li>
          <S.PostImg
            src="https://thumbs.gfycat.com/VacantUnpleasantArchaeocete-size_restricted.gif"
            alt=""
          />
        </li>
      </ul>
      <S.PostIconsWrap>
        <S.PostIconBtn onClick={handleLike}>
          <HeartIcon
            fill={isLiked ? '#05704A' : '#fff'}
            style={{ marginRight: '6px' }}
          />
          <span>{heartCount}</span>
        </S.PostIconBtn>
        <a>
          <S.PostIconBtn onClick={handleComment}>
            <img src={CommentIcon} alt="" style={{ marginRight: '6px' }} />
            <span>{commentCount}</span>
          </S.PostIconBtn>
        </a>
      </S.PostIconsWrap>
      <S.PostCreateDate>2022년 07월 11일</S.PostCreateDate>
    </S.PostContent>
  );
};

export default PostContent;

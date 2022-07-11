import React from 'react';
import * as S from './PostCard.style';
import PostContent from '../PostContent/PostContent';
import PostAuthor from './../PostAuthor/PostAuthor';

const PostCard = () => {
  return (
    <S.ProfileWrap>
      <PostAuthor />
      <PostContent />
    </S.ProfileWrap>
  );
};

export default PostCard;

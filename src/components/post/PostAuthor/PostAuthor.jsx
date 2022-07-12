import React from 'react';
import * as S from './PostAuthor.style';

const PostAuthor = (data) => {
  return (
    <S.AuthorWrap>
      <S.ProfileImgWrap src={data && data.data.image}></S.ProfileImgWrap>
      <S.AuthorInfo>
        <S.AuthorName>{data && data.data.username}</S.AuthorName>
        <S.AuthorId>@ {data && data.data.accountname}</S.AuthorId>
      </S.AuthorInfo>
    </S.AuthorWrap>
  );
};

export default PostAuthor;

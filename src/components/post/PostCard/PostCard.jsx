import React, { useEffect, useState } from 'react';
import * as S from './PostCard.style';
import PostContent from '../PostContent/PostContent';
import PostAuthor from './../PostAuthor/PostAuthor';
import UserComponent from './../../userComponent/UserComponent';

const PostCard = (data) => {
  const [authorData, setAuthorData] = useState();
  const [postData, setPostData] = useState();

  useEffect(() => {
    setAuthorData(data.data.author);
    setPostData(data.data);
  }, [data]);

  return (
    <S.ProfileWrap>
      {authorData && (
        <UserComponent
          image={authorData.image}
          username={authorData.username}
          accountname={authorData.accountname}
        />
      )}
      {postData && <PostContent data={postData} />}
    </S.ProfileWrap>
  );
};

export default PostCard;

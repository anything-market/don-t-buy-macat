import React, { useEffect, useState } from 'react';
import * as S from './PostCard.style';
import PostContent from '../PostContent/PostContent';
import PostAuthor from './../PostAuthor/PostAuthor';
import { Link } from 'react-router-dom';
const PostCard = (data) => {
  const [authorData, setAuthorData] = useState();
  const [postData, setPostData] = useState();

  useEffect(() => {
    setAuthorData(data.data.author);
    setPostData(data.data);
  }, [data]);

  return (
    <Link to={`/post/${data.data.id}`}>
      <S.ProfileWrap>
        {authorData && <PostAuthor data={authorData} />}
        {postData && <PostContent data={postData} />}
      </S.ProfileWrap>
    </Link>
  );
};

export default PostCard;

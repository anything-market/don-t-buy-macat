import React, { useEffect, useState } from 'react';
import * as S from './PostCard.style';
import PostContent from '../PostContent/PostContent';
import UserComponent from './../../userComponent/UserComponent';
import { useNavigate, useParams } from 'react-router-dom';

const PostCard = ({ data }) => {
  const navigate = useNavigate();

  const [authorData, setAuthorData] = useState();
  const [postData, setPostData] = useState();

  useEffect(() => {
    if (data) {
      setAuthorData(data.author);
      setPostData(data);
    }
  }, [data]);

  return (
    <S.PostCardWrap>
      <S.PostCardContainer>
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
      </S.PostCardContainer>
    </S.PostCardWrap>
  );
};

export default PostCard;

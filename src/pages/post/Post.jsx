import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentCard from '../../components/comment/CommentCard';
import BasicHeader from '../../components/header/BasicHeader/BasicHeader';
import PostCard from './../../components/post/PostCard/PostCard';

function Post() {
  const { postId } = useParams();

  const [postData, setPostData] = useState();
  const [userToken, setUserToken] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const userToken = localStorage.getItem('Access Token');
    setUserToken(userToken);
  }, []);

  const getPostData = () => {
    axios({
      url: `http://146.56.183.55:5050/post/${postId}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    })
      .then((response) => {
        setPostData(response.data.post);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getComments = () => {
    axios({
      url: `http://146.56.183.55:5050/post/${postId}/comments?limit=10`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    })
      .then((response) => {
        setComments(response.data.comments);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (userToken) {
      getPostData();
      getComments();
    }
  }, [postId, userToken]);

  return (
    <>
      <BasicHeader />
      <PostCard data={postData} />
      <CommentCard
        postId={postId}
        comments={comments}
        getComments={getComments}
      />
    </>
  );
}

export default Post;

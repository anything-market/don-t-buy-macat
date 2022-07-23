import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CommentList from './CommentList/CommentList';
import CommentReply from './CommentReply/CommentReply';
import { useParams } from 'react-router';

function CommentView() {
  const [comments, setComments] = useState([]);
  const [userToken, setUserToken] = useState();
  const { postId } = useParams();

  useEffect(() => {
    const userToken = localStorage.getItem('Access Token');
    setUserToken(userToken);
  }, []);
  const getComments = () => {
    axios({
      url: `http://146.56.183.55:5050/post/${postId}/comments?limit=10`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response.data.comments);
        setComments(response.data.comments);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="CommentView">
      <CommentList comments={comments} />
      <CommentReply getComments={getComments} />
    </div>
  );
}

export default CommentView;

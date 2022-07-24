import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CommentList from './CommentList/CommentList';
import CommentReply from './CommentReply/CommentReply';

function CommentCard({ postId }) {
  const [comments, setComments] = useState([]);
  const [userToken, setUserToken] = useState('');
  useEffect(() => {
    const userToken = localStorage.getItem('Access Token');
    setUserToken(userToken);
  }, []);

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
        console.log(response.data.comments);
        setComments(response.data.comments);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getComments();
  }, [userToken]);

  return (
    <div className="CommentCard">
      <CommentList comments={comments} />
      <CommentReply getComments={getComments} postId={postId} />
    </div>
  );
}

export default CommentCard;

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CommentList from './CommentList/CommentList';
import CommentReply from './CommentReply/CommentReply';

function CommentCard({ postId, comments, getComments }) {
  // const [userToken, setUserToken] = useState('');
  // useEffect(() => {
  //   const userToken = localStorage.getItem('Access Token');
  //   setUserToken(userToken);
  // }, []);

  // useEffect(() => {
  //   getComments();
  // }, [userToken]);

  return (
    <div className="CommentCard">
      <CommentList comments={comments} />
      <CommentReply getComments={getComments} postId={postId} />
    </div>
  );
}

export default CommentCard;

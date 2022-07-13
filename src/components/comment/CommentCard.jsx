import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CommentList from './CommentList/CommentList';
import CommentReply from './CommentReply/CommentReply';

function CommentView() {
  const [comments, setComments] = useState([]);

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2I4N2FhODJmZGNjNzEyZjQzODJhNCIsImV4cCI6MTY2MjY4OTcyMSwiaWF0IjoxNjU3NTA1NzIxfQ.eBZXMW7UGe1CCX23sZSf1qtIqnD-lCeIHsySOUdCJCg';
  const postId = '62cb8b2882fdcc712f4382bb';
  const getComments = () => {
    axios({
      url: `https://mandarin.api.weniv.co.kr/post/${postId}/comments?limit=10`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
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

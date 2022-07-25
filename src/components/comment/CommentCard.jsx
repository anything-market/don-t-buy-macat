import React from 'react';
import CommentList from './CommentList/CommentList';
import CommentReply from './CommentReply/CommentReply';

function CommentCard({ postId, comments, getComments }) {
  return (
    <div className="CommentCard">
      <CommentList comments={comments} />
      <CommentReply getComments={getComments} postId={postId} />
    </div>
  );
}

export default CommentCard;

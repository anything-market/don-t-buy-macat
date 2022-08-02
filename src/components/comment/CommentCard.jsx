import React from 'react';
import CommentList from './CommentList/CommentList';
import CommentReply from './CommentReply/CommentReply';
import { CommentListBox } from './commentCard.style';

function CommentCard({ postId, comments, getComments }) {
  return (
    <>
      <CommentListBox>
        <CommentList comments={comments} />
      </CommentListBox>
      <CommentReply getComments={getComments} postId={postId} />
    </>
  );
}

export default CommentCard;

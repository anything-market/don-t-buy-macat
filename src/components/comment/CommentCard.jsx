import CommentList from './CommentList/CommentList';
import CommentReply from './CommentReply/CommentReply';

function CommentView() {
  return (
    <div className="CommentView">
      <CommentList />
      <CommentReply />
    </div>
  );
}

export default CommentView;

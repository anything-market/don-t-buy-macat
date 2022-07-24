import React from 'react';
import { useParams } from 'react-router-dom';
import CommentCard from '../../components/comment/CommentCard';
import BasicHeader from '../../components/header/BasicHeader/BasicHeader';

function Post() {
  // Pages에서 <Route path="/post/:postId" element={<Post />}></Route> 여기에 :postId를 선택해주는 것 = userParams()의 key로 들어감
  // Post Card에서 Link to={`/post/${data.data.id}`}이걸로 :postId에 데이터에서 뽑은 포스트 아이디를 넣어줬음 = 최종적으로 useParams()의 value로 들어감, 어떻게?
  // 현재 이 컴포넌트의 url의 :postId를 useParams()로 선택해주었기 때문.
  // 따라서 useParams()={postId:데이터에서뽑은포스트아이디} 이렇게 객체에 들어가있는 상태라고 보면됨.
  // 아래 코드는 const postId = useParams().postId랑 같음
  const { postId } = useParams();
  // const postId = useParams().postId;
  // postId를 넣어주기
  return (
    <>
      <BasicHeader />
      {/* 피드컴포넌트 추가 예정 */}
      <CommentCard postId={postId} />
    </>
  );
}

export default Post;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentCard from '../../components/comment/CommentCard';
import BasicHeader from '../../components/header/BasicHeader/BasicHeader';
import PostCard from './../../components/post/PostCard/PostCard';

function Post() {
  // Pages에서 <Route path="/post/:postId" element={<Post />}></Route> 여기에 :postId를 선택해주는 것 = userParams()의 key로 들어감
  // Post Card에서 Link to={`/post/${data.data.id}`}이걸로 :postId에 데이터에서 뽑은 포스트 아이디를 넣어줬음 = 최종적으로 useParams()의 value로 들어감, 어떻게?
  // 현재 이 컴포넌트의 url의 :postId를 useParams()로 선택해주었기 때문.
  // 따라서 useParams()={postId:데이터에서뽑은포스트아이디} 이렇게 객체에 들어가있는 상태라고 보면됨.
  // 아래 코드는 const postId = useParams().postId랑 같음
  // const postId = useParams().postId;
  // postId를 넣어주기
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

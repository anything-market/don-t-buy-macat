import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/login/Login';
import SignIn from '../components/sign-in/SignIn';
import SerProfile from '../components/sign-in/SetProfile';
import Home from './home/Home';
import Search from './search/Search';
import PostUpload from './../components/postUpload/PostUpload';
import Follow from './follow/Follow';
import AdoptPost from './adoptPost/AdoptPost';
import Post from './post/Post';
import SocialLogin from '../components/login/SocialLogin';
import UserProfile from './userProfile/UserProfile';
import ChatList from './chats/ChatList/ChatList';
import Chat from './chats/Chat/Chat';
import { isLogin } from '../utils/isLogin';
import { useState, useEffect } from 'react';
import Splash from '../components/splash/Splash';
import Error from '../components/error/Error';
import EditUserProfile from './editprofile/EditUserProfile';

function Pages() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2400);
    }
  }, []);

  return loading ? <Splash /> : <MainPages />;
}

function MainPages() {
  return (
    <Routes>
      <Route path="/" element={isLogin() ? <Home /> : <SocialLogin />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/join/signin" element={<SignIn />}></Route>
      <Route path="/join/setprofile" element={<SerProfile />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/profile/:id" element={<UserProfile />}></Route>
      <Route path="/profile/:id/edit" element={<EditUserProfile />}></Route>
      <Route path="/upload" element={<PostUpload />}></Route>
      <Route path="/follow/:id/followers" element={<Follow />}></Route>
      <Route path="/follow/:id/followings" element={<Follow />}></Route>
      <Route path="/adoptPost" element={<AdoptPost />}></Route>
      <Route path="/post/:postId" element={<Post />}></Route>
      <Route path="/social-login" element={<SocialLogin />}></Route>
      <Route path="/chats" element={<ChatList />}></Route>
      <Route path="/chats/:id" element={<Chat />}></Route>
      <Route path="/*" element={<Error />}></Route>
    </Routes>
  );
}

export default Pages;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/login/Login';
import SignIn from '../components/sign-in/SignIn';
import SerProfile from '../components/sign-in/SetProfile';
import Home from './home/Home';
import Search from './search/Search';
import PostUpload from './../components/postUpload/PostUpload';
import Follow from './follow/Follow';

function Pages() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/join/signin" element={<SignIn />}></Route>
      <Route path="/join/setprofile" element={<SerProfile />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/upload" element={<PostUpload />}></Route>
      <Route path="/follow/followers" element={<Follow />}></Route>
      <Route path="/follow/followings" element={<Follow />}></Route>
    </Routes>
  );
}

export default Pages;

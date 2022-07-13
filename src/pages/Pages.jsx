import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/login/Login';
import SignIn from '../components/sign-in/SignIn';
import SerProfile from '../components/sign-in/SetProfile';

function Pages() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/setProfile" element={<SerProfile />}></Route>
    </Routes>
  );
}

export default Pages;